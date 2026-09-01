"""
=============================================================================
GradeSigma • Universal Relative Grade Calculator & Analytics Engine
Engineered for Universities with Relative Grading (VIT, SRM, BITS, LPU & More)
=============================================================================
"""

from dataclasses import dataclass, field
from enum import Enum
import csv
import json
import math
import os
import sys
import webbrowser
from typing import List, Dict, Optional, Tuple
import numpy as np


class GradingScheme(str, Enum):
    GAUSSIAN_RELATIVE = "Gaussian Relative (Z-Score)"
    VIT_RELATIVE = "VIT Relative Grading"
    PERCENTILE = "Percentile Rank"
    ABSOLUTE = "Absolute Threshold"


@dataclass
class Student:
    id: int
    name: str
    score: float
    z_score: float = 0.0
    grade: str = "N/A"
    grade_point: int = 0
    percentile: float = 0.0
    outlier_status: str = "Normal"

    def to_dict(self) -> Dict:
        return {
            "id": self.id,
            "name": self.name,
            "score": round(self.score, 2),
            "z_score": round(self.z_score, 3),
            "grade": self.grade,
            "grade_point": self.grade_point,
            "percentile": round(self.percentile, 2),
            "outlier_status": self.outlier_status,
        }


@dataclass
class StatisticalSummary:
    count: int = 0
    mean: float = 0.0
    std_dev: float = 0.0
    variance: float = 0.0
    median: float = 0.0
    min_score: float = 0.0
    max_score: float = 0.0
    q1: float = 0.0
    q3: float = 0.0
    iqr: float = 0.0
    grade_distribution: Dict[str, int] = field(default_factory=dict)
    pass_percentage: float = 0.0

    def to_dict(self) -> Dict:
        return {
            "count": self.count,
            "mean": round(self.mean, 2),
            "std_dev": round(self.std_dev, 2),
            "variance": round(self.variance, 2),
            "median": round(self.median, 2),
            "min_score": round(self.min_score, 2),
            "max_score": round(self.max_score, 2),
            "q1": round(self.q1, 2),
            "q3": round(self.q3, 2),
            "iqr": round(self.iqr, 2),
            "grade_distribution": self.grade_distribution,
            "pass_percentage": round(self.pass_percentage, 2),
        }


GRADE_POINTS = {
    "S": 10,
    "A": 9,
    "B": 8,
    "C": 7,
    "D": 6,
    "E": 5,
    "F": 0,
}


class GradingEngine:
    """Core computational engine for relative and absolute grading models."""

    @staticmethod
    def assign_grade_gaussian(z: float) -> str:
        """Standard Gaussian Z-Score grading thresholds."""
        if z >= 2.0:
            return "S"
        elif z >= 1.0:
            return "A"
        elif z >= 0.5:
            return "B"
        elif z >= -0.5:
            return "C"
        elif z >= -1.3:
            return "D"
        else:
            return "F"

    @staticmethod
    def assign_grade_vit(z: float) -> str:
        """VIT Relative curve grading standard."""
        if z >= 1.5:
            return "S"
        elif z >= 1.0:
            return "A"
        elif z >= 0.5:
            return "B"
        elif z >= 0.0:
            return "C"
        elif z >= -1.0:
            return "D"
        elif z >= -1.5:
            return "E"
        else:
            return "F"

    @staticmethod
    def assign_grade_absolute(score: float) -> str:
        """Absolute percentage thresholds."""
        if score >= 90.0:
            return "S"
        elif score >= 80.0:
            return "A"
        elif score >= 70.0:
            return "B"
        elif score >= 60.0:
            return "C"
        elif score >= 50.0:
            return "D"
        elif score >= 40.0:
            return "E"
        else:
            return "F"

    @classmethod
    def process_students(
        cls,
        students: List[Student],
        scheme: GradingScheme = GradingScheme.GAUSSIAN_RELATIVE,
    ) -> Tuple[List[Student], StatisticalSummary]:
        """Calculates statistics, Z-scores, percentiles, and grades."""
        if not students:
            return [], StatisticalSummary()

        scores = np.array([s.score for s in students], dtype=float)
        count = len(scores)
        mean = float(np.mean(scores))
        std_dev = float(np.std(scores))
        variance = float(np.var(scores))
        median = float(np.median(scores))
        min_score = float(np.min(scores))
        max_score = float(np.max(scores))
        q1 = float(np.percentile(scores, 25))
        q3 = float(np.percentile(scores, 75))
        iqr = q3 - q1

        # Sorted scores for percentile rank calculation
        sorted_scores = np.sort(scores)

        grade_counts: Dict[str, int] = {}
        processed_students: List[Student] = []

        for student in students:
            # 1. Z-Score with Zero-Variance protection
            if std_dev == 0.0:
                z_score = 0.0
            else:
                z_score = (student.score - mean) / std_dev

            # 2. Percentile Rank
            # Number of scores <= student.score / total * 100
            percentile = float(
                (np.searchsorted(sorted_scores, student.score, side="right") / count) * 100.0
            )

            # 3. Grade assignment based on scheme
            if scheme == GradingScheme.GAUSSIAN_RELATIVE:
                grade = cls.assign_grade_gaussian(z_score)
            elif scheme == GradingScheme.VIT_RELATIVE:
                grade = cls.assign_grade_vit(z_score)
            elif scheme == GradingScheme.ABSOLUTE:
                grade = cls.assign_grade_absolute(student.score)
            elif scheme == GradingScheme.PERCENTILE:
                if percentile >= 90:
                    grade = "S"
                elif percentile >= 75:
                    grade = "A"
                elif percentile >= 55:
                    grade = "B"
                elif percentile >= 30:
                    grade = "C"
                elif percentile >= 15:
                    grade = "D"
                else:
                    grade = "F"
            else:
                grade = cls.assign_grade_gaussian(z_score)

            # 4. Outlier Detection
            if z_score >= 2.0:
                outlier_status = "High Achiever (Top Tier)"
            elif z_score <= -1.3:
                outlier_status = "Remedial Support Needed"
            else:
                outlier_status = "Normal Distribution"

            grade_point = GRADE_POINTS.get(grade, 0)
            grade_counts[grade] = grade_counts.get(grade, 0) + 1

            student.z_score = z_score
            student.grade = grade
            student.grade_point = grade_point
            student.percentile = percentile
            student.outlier_status = outlier_status
            processed_students.append(student)

        # Calculate Pass Percentage (Passing grades are everything except 'F')
        fail_count = grade_counts.get("F", 0)
        pass_percentage = ((count - fail_count) / count) * 100.0 if count > 0 else 0.0

        summary = StatisticalSummary(
            count=count,
            mean=mean,
            std_dev=std_dev,
            variance=variance,
            median=median,
            min_score=min_score,
            max_score=max_score,
            q1=q1,
            q3=q3,
            iqr=iqr,
            grade_distribution=grade_counts,
            pass_percentage=pass_percentage,
        )

        return processed_students, summary


# =============================================================================
# Backward-Compatibility Helpers (Preserves original project API)
# =============================================================================

def assign_grade(z_score: float) -> str:
    """Original helper function kept for full backward-compatibility."""
    return GradingEngine.assign_grade_gaussian(z_score)


def calculate_grades_std_dev(scores: List[float]) -> Dict:
    """
    Original helper function for basic grade computation.
    Enhanced to return a robust list/dict structure without key collision.
    """
    students = [Student(id=i + 1, name=f"Student {i + 1}", score=s) for i, s in enumerate(scores)]
    processed, summary = GradingEngine.process_students(students, GradingScheme.GAUSSIAN_RELATIVE)

    print(f"Class Mean: {summary.mean:.2f}")
    print(f"Standard Deviation: {summary.std_dev:.2f}")
    print("-" * 35)

    results = {}
    for st in processed:
        print(f"ID: {st.id:02d} | Score: {st.score:6.2f} | Z-Score: {st.z_score:+5.2f} | Grade: {st.grade}")
        # Preserving original dictionary format while including student ID
        results[f"{st.name} ({st.score})"] = {"Grade": st.grade, "Z-Score": st.z_score}

    return results


# =============================================================================
# CSV / JSON File Manager
# =============================================================================

class DataFileManager:
    @staticmethod
    def export_to_csv(filepath: str, students: List[Student], summary: StatisticalSummary):
        """Exports processed student grades and summary metrics to CSV."""
        with open(filepath, mode="w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(["Roll No / ID", "Student Name", "Score", "Z-Score", "Grade", "Grade Point", "Percentile", "Status"])
            for s in students:
                writer.writerow([s.id, s.name, f"{s.score:.2f}", f"{s.z_score:.3f}", s.grade, s.grade_point, f"{s.percentile:.2f}%", s.outlier_status])
            
            writer.writerow([])
            writer.writerow(["--- Statistical Summary ---"])
            writer.writerow(["Total Students", summary.count])
            writer.writerow(["Class Mean", f"{summary.mean:.2f}"])
            writer.writerow(["Standard Deviation", f"{summary.std_dev:.2f}"])
            writer.writerow(["Median", f"{summary.median:.2f}"])
            writer.writerow(["Min Score", f"{summary.min_score:.2f}"])
            writer.writerow(["Max Score", f"{summary.max_score:.2f}"])
            writer.writerow(["Pass Percentage", f"{summary.pass_percentage:.2f}%"])

    @staticmethod
    def load_from_csv(filepath: str) -> List[Student]:
        """Loads student scores from a CSV file."""
        if not os.path.exists(filepath):
            raise FileNotFoundError(f"File not found: {filepath}")

        students = []
        with open(filepath, mode="r", encoding="utf-8") as f:
            reader = csv.reader(f)
            header = next(reader, None)
            
            # Simple heuristic: inspect columns
            row_num = 1
            for row in reader:
                if not row or row[0].startswith("---"):
                    continue
                try:
                    if len(row) >= 3:
                        s_id = int(row[0])
                        s_name = row[1].strip()
                        s_score = float(row[2])
                    elif len(row) == 2:
                        s_id = row_num
                        s_name = row[0].strip()
                        s_score = float(row[1])
                    elif len(row) == 1:
                        s_id = row_num
                        s_name = f"Student {row_num}"
                        s_score = float(row[0])
                    else:
                        continue
                    students.append(Student(id=s_id, name=s_name, score=s_score))
                    row_num += 1
                except ValueError:
                    continue
        return students


# =============================================================================
# Interactive CLI & Simulator
# =============================================================================

def print_banner():
    banner = """
===============================================================================
       GradeSigma • Universal Relative Grade Calculator & Engine v2.0          
       Engineered for Universities with Relative Grading (VIT, SRM, BITS, LPU) 
===============================================================================
"""
    print(banner)


def run_cli():
    print_banner()
    while True:
        print("\nMain Menu:")
        print("  [1] Manual Score Entry & Analysis")
        print("  [2] Run Built-in Test Benchmarks (Test Case 1 & 2)")
        print("  [3] 'What-If' Grade Threshold Simulator")
        print("  [4] Load Scores from CSV File")
        print("  [5] Launch Interactive Web Dashboard in Browser")
        print("  [0] Exit")

        choice = input("\nEnter your choice [0-5]: ").strip()

        if choice == "1":
            handle_manual_entry()
        elif choice == "2":
            handle_benchmarks()
        elif choice == "3":
            handle_what_if_simulator()
        elif choice == "4":
            handle_csv_load()
        elif choice == "5":
            launch_web_app()
        elif choice == "0":
            print("\nThank you for using Vityarthi Grade Calculator. Goodbye!\n")
            break
        else:
            print("Invalid selection! Please enter a number between 0 and 5.")


def handle_manual_entry():
    print("\n--- Manual Student Score Entry ---")
    while True:
        try:
            n_str = input("Enter the number of students: ").strip()
            n = int(n_str)
            if n <= 0:
                print("Please enter a positive number of students.")
                continue
            break
        except ValueError:
            print("Invalid input! Please enter an integer.")

    students = []
    print(f"\nEnter details for {n} student(s):")
    for i in range(n):
        name = input(f"Student {i+1} Name (default 'Student {i+1}'): ").strip()
        if not name:
            name = f"Student {i+1}"
        while True:
            try:
                score_str = input(f"Enter score for {name} (0-100): ").strip()
                score = float(score_str)
                if score < 0 or score > 100:
                    print("Warning: Score is outside typical 0-100 range.")
                break
            except ValueError:
                print("Invalid score! Please enter a numeric value.")
        students.append(Student(id=i+1, name=name, score=score))

    display_and_export_results(students)


def handle_benchmarks():
    print("\n==========================================================")
    print("                Running Test Benchmarks                   ")
    print("==========================================================")

    # Test Case 1: Standard Distribution
    print("\n>>> Test Case 1: Standard Distribution (Normal Class)")
    scores_1 = [95.0, 85.0, 75.0, 65.0, 55.0]
    students_1 = [Student(id=i+1, name=f"Student {i+1}", score=s) for i, s in enumerate(scores_1)]
    processed_1, sum_1 = GradingEngine.process_students(students_1, GradingScheme.GAUSSIAN_RELATIVE)
    print(f"Class Mean: {sum_1.mean:.2f} (Expected: 75.00)")
    print(f"Std Dev:    {sum_1.std_dev:.2f} (Expected: 14.14)")
    for s in processed_1:
        print(f"  {s.name:10} | Score: {s.score:5.1f} | Z-Score: {s.z_score:+5.2f} | Grade: {s.grade} | Status: {s.outlier_status}")

    # Test Case 2: Zero Variance
    print("\n>>> Test Case 2: Zero Variance (All identical scores)")
    scores_2 = [80.0, 80.0, 80.0]
    students_2 = [Student(id=i+1, name=f"Student {i+1}", score=s) for i, s in enumerate(scores_2)]
    processed_2, sum_2 = GradingEngine.process_students(students_2, GradingScheme.GAUSSIAN_RELATIVE)
    print(f"Class Mean: {sum_2.mean:.2f} (Expected: 80.00)")
    print(f"Std Dev:    {sum_2.std_dev:.2f} (Expected: 0.00)")
    for s in processed_2:
        print(f"  {s.name:10} | Score: {s.score:5.1f} | Z-Score: {s.z_score:+5.2f} | Grade: {s.grade} | Status: {s.outlier_status}")
    print("\n✓ All benchmark test cases executed with zero errors!")


def handle_what_if_simulator():
    print("\n--- 'What-If' Grade Target Simulator ---")
    print("Calculate the minimum score you need to reach a specific letter grade.")
    try:
        mean = float(input("Enter estimated Class Mean (e.g. 68.5): ").strip())
        std_dev = float(input("Enter estimated Standard Deviation (e.g. 12.0): ").strip())
        target_grade = input("Enter target grade (S, A, B, C, D): ").strip().upper()

        z_thresholds = {"S": 2.0, "A": 1.0, "B": 0.5, "C": -0.5, "D": -1.3}
        if target_grade not in z_thresholds:
            print(f"Unknown grade '{target_grade}'. Please choose from S, A, B, C, D.")
            return

        z_req = z_thresholds[target_grade]
        required_score = mean + (z_req * std_dev)
        print("\n-------------------------------------------------")
        print(f"To achieve Grade '{target_grade}' (Requires Z >= {z_req:+.2f}):")
        print(f"Required Minimum Score = Mean + (Z * StdDev)")
        print(f"                       = {mean:.2f} + ({z_req:.2f} * {std_dev:.2f})")
        print(f"                       = {required_score:.2f} marks")
        print("-------------------------------------------------")
    except ValueError:
        print("Invalid numerical inputs!")


def handle_csv_load():
    filepath = input("Enter path to CSV file (e.g. sample_students.csv): ").strip()
    try:
        students = DataFileManager.load_from_csv(filepath)
        if not students:
            print("No valid student records found in CSV.")
            return
        print(f"\nSuccessfully loaded {len(students)} student(s) from '{filepath}'.")
        display_and_export_results(students)
    except Exception as e:
        print(f"Error loading CSV: {e}")


def display_and_export_results(students: List[Student]):
    print("\nSelect Grading Scheme:")
    print("  [1] Gaussian Relative (Z-Score Standard)")
    print("  [2] VIT Relative Grading Model")
    print("  [3] Absolute Thresholds (Fixed marks)")
    print("  [4] Percentile Rank Model")
    scheme_choice = input("Enter choice [1-4, default 1]: ").strip()

    scheme_map = {
        "1": GradingScheme.GAUSSIAN_RELATIVE,
        "2": GradingScheme.VIT_RELATIVE,
        "3": GradingScheme.ABSOLUTE,
        "4": GradingScheme.PERCENTILE,
    }
    scheme = scheme_map.get(scheme_choice, GradingScheme.GAUSSIAN_RELATIVE)

    processed, summary = GradingEngine.process_students(students, scheme)

    print("\n==========================================================================")
    print(f"               ACADEMIC ASSESSMENT RESULTS ({scheme.value})              ")
    print("==========================================================================")
    print(f"Total Students: {summary.count} | Pass Percentage: {summary.pass_percentage:.1f}%")
    print(f"Class Mean:     {summary.mean:.2f} | Standard Deviation: {summary.std_dev:.2f}")
    print(f"Median:         {summary.median:.2f} | Range: [{summary.min_score:.1f} - {summary.max_score:.1f}]")
    print("-" * 74)
    print(f"{'ID':<4} | {'Name':<18} | {'Score':<6} | {'Z-Score':<8} | {'Grade':<5} | {'Percentile':<10} | {'Status'}")
    print("-" * 74)
    for s in processed:
        print(f"{s.id:<4} | {s.name:<18} | {s.score:<6.2f} | {s.z_score:<+8.2f} | {s.grade:<5} | {s.percentile:<9.1f}% | {s.outlier_status}")
    print("-" * 74)
    print("Grade Distribution:", summary.grade_distribution)

    export_choice = input("\nWould you like to export these results to a CSV file? (y/n): ").strip().lower()
    if export_choice == "y":
        out_path = input("Enter output CSV filename [default 'grade_results.csv']: ").strip()
        if not out_path:
            out_path = "grade_results.csv"
        DataFileManager.export_to_csv(out_path, processed, summary)
        print(f"✓ Results successfully exported to '{out_path}'")


def launch_web_app():
    html_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "index.html"))
    if os.path.exists(html_path):
        print(f"\nOpening Web Application in browser: file://{html_path}")
        webbrowser.open(f"file://{html_path}")
    else:
        print(f"Web interface file not found at: {html_path}")


if __name__ == "__main__":
    run_cli()
