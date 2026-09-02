# Project Problem Statement & Scope Specification

## Project Title
**GradeSigma • Universal Relative Grade Calculator & Statistical Analytics Platform**
*(Engineered for institutions using relative grading: VIT, SRM, BITS, LPU, IITs, and global universities)*

---

## 1. Problem Statement

### The Core Issue: Inequities of Absolute Grading
In traditional academic evaluation systems, students are frequently assessed using **Absolute Grading**, where grades correspond to static numerical score thresholds (e.g., $\ge 90\%$ for 'S/A', $< 40\%$ for 'Fail'). 

While simple, absolute grading introduces significant structural flaws:
1. **Exam Difficulty Inelasticity**: If an exam is unusually difficult, class performance drops uniformly. Hardworking students may receive poor grades simply due to exam difficulty rather than lack of proficiency.
2. **Grade Inflation / Deflation**: On very easy exams, grade inflation dilutes distinctions; on harsh exams, failure rates spike unfairly.
3. **Absence of Peer Context**: A raw mark of 75/100 does not inform whether the student topped the class or scored below average.

### The Solution: Relative Grading (Grading on the Gaussian Curve)
Relative Grading normalizes student performance against peer distribution by measuring how many standard deviations ($\sigma$) a student's score ($X$) deviates from the class average ($\mu$):

$$Z = \frac{X - \mu}{\sigma}$$

This project provides a robust, fair, and automated computational platform to eliminate subjective grading discrepancies and adapt dynamically to any test difficulty.

---

## 2. Project Objectives

1. **Automated Normal Curve Analysis**: Compute central tendency ($\mu$, Median) and dispersion ($\sigma$, $\sigma^2$, IQR) for student score datasets of arbitrary size.
2. **Multi-Model Relative Grading**: Support multiple standard institutional grading systems including Gaussian Z-score, VIT relative model, percentile ranking, and absolute thresholds.
3. **Interactive Visual Analytics**: Deliver a modern web dashboard with dynamic Gaussian Bell Curve generation and grade distribution histograms.
4. **Outlier Detection & Intervention**: Automatically flag top performers ($Z \ge +2.0$) and students requiring remedial academic assistance ($Z \le -1.3$).
5. **Predictive "What-If" Simulation**: Empower students and educators to simulate required exam marks to achieve specific target letter grades.
6. **Data Interoperability**: Seamlessly import and export datasets via CSV, JSON, and printable grade certificates.

---

## 3. Scope of the System

### In-Scope Capabilities
- **Statistical Computation**: Population Mean ($\mu$), Standard Deviation ($\sigma$), Variance, Median, Quartiles (Q1, Q3), and Min/Max.
- **Edge-Case Resilience**: Zero-variance ($\sigma = 0$) protection and duplicate score preservation.
- **Web Application**: Interactive single-page dashboard with Dark/Light mode, Chart.js visualizations, and live responsive tables.
- **CLI & Scripting Engine**: Modular Python engine with OOP design, backward-compatible API, and automated unit test suite.
- **Bulk Data Ingestion**: File drag-and-drop CSV parser and live paste tools.
- **Reporting**: PDF/Printable official student report cards and class grade sheets.

### Future Roadmap
- **Multi-Component Weighted Grading**: Multi-semester aggregate CGPA calculator with weighted quizzes, midterms, and lab components.
- **Cloud Database Persistence**: Cloud Firestore / SQL sync for university departmental records.
- **RESTful API Services**: FastAPI / Flask microservice endpoints for integration into campus LMS portals.

---

## 4. Author Information
- **Name**: Rajat Tiwari
- **GitHub**: [@tiwarirajat-1501](https://github.com/tiwarirajat-1501)
