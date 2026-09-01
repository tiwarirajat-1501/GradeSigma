# 🎓 GradeSigma • Universal Relative Grading & Bell Curve Analytics

![Python Version](https://img.shields.io/badge/Python-3.8%2B-blue?logo=python)
![NumPy](https://img.shields.io/badge/NumPy-Statistical%20Engine-013243?logo=numpy)
![Interface](https://img.shields.io/badge/Interface-Interactive%20Web%20%2B%20CLI-success)
![Chart.js](https://img.shields.io/badge/Visualizations-Chart.js%20Bell%20Curve-FF6384)
![License](https://img.shields.io/badge/License-MIT-green)

> **GradeSigma** is a universal relative grading and statistical analytics platform engineered for universities and institutes that implement relative grading on a curve — including **VIT, SRM, BITS, LPU, IITs/NITs**, and higher-education institutions worldwide. It normalizes student scores using Gaussian Normal Distribution curves ($\mu$ and $\sigma$).

---

## 🌟 Key Features

### 1. 📊 Interactive Web Application (`index.html`)
- **🚪 Gateway Hub & Opening Screen**: Direct choice between Classroom Relative Grading, Semester GPA Calculator, Cumulative CGPA Forecaster, and "What-If" Predictor.
- **🧮 Semester GPA Calculator**:
  - Course-wise Letter Grade (`S`=10, `A`=9, `B`=8, `C`=7, `D`=6, `E`=5, `F`=0) and Credits weightage ($1.0$ to $5.0$).
  - Live GPA dial, total quality points, credit summation, and honors standing badge.
  - 20-credit and 24-credit quick presets.
- **📈 Cumulative CGPA Planner**:
  - Combined CGPA Calculator integrating previous credits and current semester GPA.
  - Target Graduation CGPA forecaster (e.g. 9.00+ distinction goal analyzer).
  - Multi-semester degree trend visualization.
- **📊 Interactive Gaussian Bell Curve**: Dynamically renders the Probability Density Function (PDF) curve with colored $\pm 1\sigma, \pm 2\sigma, \pm 3\sigma$ bands, Class Mean baseline, and hoverable student score plot points.
- **Grade Distribution Frequency Chart**: Real-time bar chart breakdown of students across grades.
- **Student Roster Manager**:
  - Live search, multi-column sorting, and grade-tier filtering.
  - Drag-and-drop CSV / Excel upload or direct bulk text paste.
  - Inline student editing and removal.
- **🎯 "What-If" Grade Simulator**: Calculate the exact exam score required to achieve a target letter grade (S, A, B, etc.) based on predicted class statistics.
- **📑 Export & Report Cards**:
  - Export class records to CSV or JSON.
  - Generate and print official Academic Grade Sheets & Individual Student Certificates.

### 2. 🧮 Advanced Python Analytics Engine (`main.py`)
- **Robust Object-Oriented Architecture**: `Student`, `GradingEngine`, `StatisticalSummary`, and `DataFileManager`.
- **Advanced Metrics**: Class Mean ($\mu$), Standard Deviation ($\sigma$), Variance ($\sigma^2$), Median, Min, Max, Quartiles (Q1, Q3), and Pass Rate.
- **Zero-Variance & Edge-Case Protection**: Prevents mathematical singularities when all students have identical marks ($\sigma = 0$).
- **Outlier Flagging**: Instantly flags top-tier high achievers ($Z \ge +2.0$) and students needing remedial assistance ($Z \le -1.3$).
- **Full Backward Compatibility**: Retains original `calculate_grades_std_dev()` and `assign_grade()` functions.

---

## 📐 Supported Grading Schemes

| Scheme | Description | Thresholds |
| :--- | :--- | :--- |
| **Gaussian Relative (Z-Score)** | Standard statistical curve | $S: Z \ge 2.0$, $A: Z \ge 1.0$, $B: Z \ge 0.5$, $C: Z \ge -0.5$, $D: Z \ge -1.3$, $F: Z < -1.3$ |
| **VIT Relative Grading** | University standard model | $S: Z \ge 1.5$, $A: Z \ge 1.0$, $B: Z \ge 0.5$, $C: Z \ge 0.0$, $D: Z \ge -1.0$, $E: Z \ge -1.5$, $F: Z < -1.5$ |
| **Percentile Rank** | Rank-based grading | $S: \ge 90\%$, $A: \ge 75\%$, $B: \ge 55\%$, $C: \ge 30\%$, $D: \ge 15\%$, $F: < 15\%$ |
| **Absolute Marks** | Fixed score thresholds | $S: \ge 90$, $A: \ge 80$, $B: \ge 70$, $C: \ge 60$, $D: \ge 50$, $E: \ge 40$, $F: < 40$ |

---

## 🚀 Getting Started

### 1. Launching the Web Application
Open [`index.html`](file:///d:/Semester_1/Problem%20Solving/Vityarthi%20Project/Grade_calculator.py/index.html) directly in any modern browser (Chrome, Edge, Firefox, Safari):
```bash
# Double click index.html or open via browser
```
*(No server or internet installation needed—Chart.js and Lucide icons load automatically via CDN)*

### 2. Running the Python CLI Engine
Ensure Python and NumPy are installed:
```bash
pip install numpy
python main.py
```

### 3. Running Automated Tests
```bash
python test_grade_calculator.py
```

---

## 🧪 Test Benchmarks

### Test Case 1: Standard Normal Class ($N=5$)
- **Input Scores**: `95.0, 85.0, 75.0, 65.0, 55.0`
- **Class Mean ($\mu$)**: `75.00`
- **Std Dev ($\sigma$)**: `14.14`
- **Output Grades**:
  - `95.0` $\to$ **A** ($Z \approx +1.41$)
  - `75.0` $\to$ **C** ($Z = 0.00$)
  - `55.0` $\to$ **F** ($Z \approx -1.41$)

### Test Case 2: Zero Variance ($N=3$)
- **Input Scores**: `80.0, 80.0, 80.0`
- **Class Mean ($\mu$)**: `80.00`
- **Std Dev ($\sigma$)**: `0.00`
- **Output Grades**: All students receive **C** ($Z = 0.00$, zero-division safely handled).

---

## 📐 Mathematical Formulas

### 1. Gaussian Z-Score (Relative Grading)
$$Z = \frac{X - \mu}{\sigma}$$
*where $X$ is the student's raw score, $\mu$ is the class mean, and $\sigma$ is the standard deviation.*

### 2. Semester Grade Point Average (GPA)
$$\text{GPA} = \frac{\sum_{i=1}^{n} (\text{Grade Point}_i \times \text{Credits}_i)}{\sum_{i=1}^{n} \text{Credits}_i}$$

### 3. Cumulative Grade Point Average (CGPA)
$$\text{CGPA}_{\text{new}} = \frac{(\text{CGPA}_{\text{prev}} \times \text{Credits}_{\text{prev}}) + (\text{GPA}_{\text{curr}} \times \text{Credits}_{\text{curr}})}{\text{Credits}_{\text{prev}} + \text{Credits}_{\text{curr}}}$$

---

## 📁 Repository Structure

```
Grade_calculator.py/
├── index.html                  # Single-Page Web Application (Splash + Hub + Analytics)
├── style.css                   # Glassmorphism design system & print styling
├── app.js                      # Chart.js visualizer, GPA engine & state manager
├── main.py                     # Upgraded Python CLI & OOP statistical engine
├── test_grade_calculator.py    # Automated unit test suite
├── sample_class_normal.csv     # 5-student benchmark CSV
├── sample_class_large.csv      # 30-student realistic section CSV
├── statement.md                # Project problem statement & specifications
└── README.md                   # Complete documentation
```

---

## 👤 Author
- **Name**: Rajat Tiwari
- **Registration Number**: `25BAI10250`
- **GitHub**: [@tiwarirajat-1501](https://github.com/tiwarirajat-1501)
- **Course**: Semester 1 &bull; Problem Solving & Programming (CSE1021)
