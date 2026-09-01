"""
Automated Test Suite for Vityarthi Grade Calculator & Analytics Engine
"""

import unittest
import numpy as np
from main import (
    Student,
    GradingEngine,
    GradingScheme,
    assign_grade,
    calculate_grades_std_dev,
)


class TestGradeCalculator(unittest.TestCase):

    def test_case_1_standard_distribution(self):
        """Test standard normal distribution with 5 students."""
        scores = [95.0, 85.0, 75.0, 65.0, 55.0]
        students = [Student(id=i+1, name=f"S{i+1}", score=s) for i, s in enumerate(scores)]
        processed, summary = GradingEngine.process_students(students, GradingScheme.GAUSSIAN_RELATIVE)

        self.assertEqual(summary.count, 5)
        self.assertAlmostEqual(summary.mean, 75.00, places=2)
        self.assertAlmostEqual(summary.std_dev, 14.14, places=2)

        # 95 -> Z ≈ +1.41 => Grade A in Gaussian
        grades = [s.grade for s in processed]
        self.assertEqual(grades[0], "A")  # Z = 1.414 -> A
        self.assertEqual(grades[2], "C")  # Z = 0.000 -> C
        self.assertEqual(grades[4], "F")  # Z = -1.414 -> F

    def test_case_2_zero_variance(self):
        """Test zero variance where all students have identical scores."""
        scores = [80.0, 80.0, 80.0]
        students = [Student(id=i+1, name=f"S{i+1}", score=s) for i, s in enumerate(scores)]
        processed, summary = GradingEngine.process_students(students, GradingScheme.GAUSSIAN_RELATIVE)

        self.assertEqual(summary.count, 3)
        self.assertAlmostEqual(summary.mean, 80.00, places=2)
        self.assertAlmostEqual(summary.std_dev, 0.00, places=2)

        # In zero variance, all Z-scores must be 0 and grade C
        for s in processed:
            self.assertEqual(s.z_score, 0.0)
            self.assertEqual(s.grade, "C")

    def test_duplicate_scores_preservation(self):
        """Ensure duplicate scores are not lost or overwritten."""
        scores = [80.0, 80.0, 80.0, 90.0]
        students = [Student(id=i+1, name=f"S{i+1}", score=s) for i, s in enumerate(scores)]
        processed, summary = GradingEngine.process_students(students, GradingScheme.GAUSSIAN_RELATIVE)

        self.assertEqual(len(processed), 4)
        self.assertEqual(processed[0].name, "S1")
        self.assertEqual(processed[1].name, "S2")

    def test_outlier_detection(self):
        """Test detection of high achievers (Z >= 2.0) and remedial students (Z <= -1.3)."""
        # 10 students: One 98, eight 50s, one 20
        scores = [98.0] + [50.0] * 8 + [20.0]
        students = [
            Student(id=i+1, name=f"Student {i+1}", score=s) for i, s in enumerate(scores)
        ]
        students[0].name = "HighAchiever"
        students[-1].name = "RemedialStudent"

        processed, summary = GradingEngine.process_students(students, GradingScheme.GAUSSIAN_RELATIVE)
        
        high_student = next(s for s in processed if s.name == "HighAchiever")
        low_student = next(s for s in processed if s.name == "RemedialStudent")

        self.assertGreaterEqual(high_student.z_score, 2.0)
        self.assertLessEqual(low_student.z_score, -1.3)
        self.assertIn("High Achiever", high_student.outlier_status)
        self.assertIn("Remedial", low_student.outlier_status)

    def test_backward_compatibility(self):
        """Verify legacy helper functions calculate_grades_std_dev and assign_grade work."""
        self.assertEqual(assign_grade(2.5), "S")
        self.assertEqual(assign_grade(1.2), "A")
        self.assertEqual(assign_grade(0.7), "B")
        self.assertEqual(assign_grade(0.0), "C")
        self.assertEqual(assign_grade(-1.0), "D")
        self.assertEqual(assign_grade(-2.0), "F")

        res = calculate_grades_std_dev([70, 80, 90])
        self.assertIsInstance(res, dict)
        self.assertEqual(len(res), 3)


if __name__ == "__main__":
    unittest.main()
