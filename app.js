/**
 * ==============================================================================
 * GradeSigma • Universal Relative Grading, Semester GPA & CGPA Suite
 * Multi-Class Section Manager, GPA Calculator & Statistical Visualizer
 * ==============================================================================
 */

// Initial Default Classes with realistic datasets
const DEFAULT_CLASSES = [
  {
    id: 'class-cse1021-a1',
    code: 'CSE1021',
    name: 'Problem Solving & Programming - Slot A1',
    scheme: 'gaussian',
    students: [
      { roll: 'CS101', name: 'Aarav Sharma', score: 96.5 },
      { roll: 'CS102', name: 'Diya Patel', score: 91.0 },
      { roll: 'CS103', name: 'Rohan Verma', score: 88.5 },
      { roll: 'CS104', name: 'Sneha Nair', score: 85.0 },
      { roll: 'CS105', name: 'Kabir Sen', score: 83.0 },
      { roll: 'CS106', name: 'Ananya Iyer', score: 81.5 },
      { roll: 'CS107', name: 'Vikram Malhotra', score: 79.0 },
      { roll: 'CS108', name: 'Ishaan Gupta', score: 77.5 },
      { roll: 'CS109', name: 'Pooja Hegde', score: 76.0 },
      { roll: 'CS110', name: 'Aditya Roy', score: 74.5 },
      { roll: 'CS111', name: 'Meera Nambiar', score: 73.0 },
      { roll: 'CS112', name: 'Siddharth Rao', score: 71.0 },
      { roll: 'CS113', name: 'Tanvi Joshi', score: 69.5 },
      { roll: 'CS114', name: 'Karthik Menon', score: 68.0 },
      { roll: 'CS115', name: 'Shruti Das', score: 66.5 },
      { roll: 'CS116', name: 'Varun Dhawan', score: 64.0 },
      { roll: 'CS117', name: 'Rhea Chakraborty', score: 62.5 },
      { roll: 'CS118', name: 'Nikhil Kamath', score: 60.0 },
      { roll: 'CS119', name: 'Tara Sutaria', score: 58.5 },
      { roll: 'CS120', name: 'Arjun Kapoor', score: 56.0 },
      { roll: 'CS121', name: 'Kriti Sanon', score: 53.5 },
      { roll: 'CS122', name: 'Ayushmann Khurrana', score: 51.0 },
      { roll: 'CS123', name: 'Bhumi Pednekar', score: 48.0 },
      { roll: 'CS124', name: 'Rajkummar Rao', score: 45.0 },
      { roll: 'CS125', name: 'Taapsee Pannu', score: 42.0 },
      { roll: 'CS126', name: 'Vicky Kaushal', score: 39.5 },
      { roll: 'CS127', name: 'Radhika Apte', score: 36.0 },
      { roll: 'CS128', name: 'Nawazuddin Siddiqui', score: 32.0 },
      { roll: 'CS129', name: 'Pankaj Tripathi', score: 28.5 },
      { roll: 'CS130', name: 'Manoj Bajpayee', score: 22.0 },
    ]
  },
  {
    id: 'class-cse1021-b2',
    code: 'CSE1021',
    name: 'Problem Solving & Programming - Slot B2',
    scheme: 'vit',
    students: [
      { roll: 'CS201', name: 'Harsh Vardhan', score: 94.0 },
      { roll: 'CS202', name: 'Priya Mani', score: 89.5 },
      { roll: 'CS203', name: 'Gautam Gambhir', score: 86.0 },
      { roll: 'CS204', name: 'Bhavana Reddy', score: 83.5 },
      { roll: 'CS205', name: 'Chirag Paswan', score: 80.0 },
      { roll: 'CS206', name: 'Esha Deol', score: 78.0 },
      { roll: 'CS207', name: 'Farhan Zaidi', score: 76.5 },
      { roll: 'CS208', name: 'Deepika Rao', score: 74.0 },
      { roll: 'CS209', name: 'Alok Nath', score: 72.0 },
      { roll: 'CS210', name: 'Sanya Mirza', score: 69.5 },
      { roll: 'CS211', name: 'Kushagra Soni', score: 67.0 },
      { roll: 'CS212', name: 'Vani Bhatia', score: 65.0 },
      { roll: 'CS213', name: 'Devendra Yadav', score: 63.5 },
      { roll: 'CS214', name: 'Ishita Dutta', score: 60.0 },
      { roll: 'CS215', name: 'Abhishek Roy', score: 58.0 },
      { roll: 'CS216', name: 'Chitra Banerjee', score: 55.5 },
      { roll: 'CS217', name: 'Girish Kumar', score: 51.0 },
      { roll: 'CS218', name: 'Tarun Tahiliani', score: 46.5 },
      { roll: 'CS219', name: 'Pooja Bhatt', score: 42.0 },
      { roll: 'CS220', name: 'Uday Chopra', score: 35.0 },
    ]
  },
  {
    id: 'class-mat1011-c1',
    code: 'MAT1011',
    name: 'Calculus & Linear Algebra - Section 3',
    scheme: 'gaussian',
    students: [
      { roll: 'MA301', name: 'Arnav Goswami', score: 98.0 },
      { roll: 'MA302', name: 'Shreya Ghoshal', score: 93.0 },
      { roll: 'MA303', name: 'Kunal Nayyar', score: 87.0 },
      { roll: 'MA304', name: 'Anushka Shetty', score: 84.5 },
      { roll: 'MA305', name: 'Mohit Chauhan', score: 81.0 },
      { roll: 'MA306', name: 'Sunidhi Chauhan', score: 79.5 },
      { roll: 'MA307', name: 'Sonu Nigam', score: 76.0 },
      { roll: 'MA308', name: 'Armaan Malik', score: 73.5 },
      { roll: 'MA309', name: 'Jasleen Royal', score: 70.0 },
      { roll: 'MA310', name: 'Darshan Raval', score: 66.5 },
      { roll: 'MA311', name: 'Jonita Gandhi', score: 64.0 },
      { roll: 'MA312', name: 'Badshah Grover', score: 59.0 },
      { roll: 'MA313', name: 'Raftaar Singh', score: 55.0 },
      { roll: 'MA314', name: 'Divine Fernandes', score: 50.5 },
      { roll: 'MA315', name: 'Emiway Bantai', score: 43.0 },
    ]
  }
];

// Master State
const state = {
  currentView: 'splash', // 'splash' | 'dashboard' | 'gpa' | 'cgpa' | 'classes' | 'comparison' | 'simulator'
  classes: [],
  activeClassId: '',
  sortColumn: 'id',
  sortDirection: 'asc',
  searchQuery: '',
  gradeFilter: 'ALL',
  theme: localStorage.getItem('gradesigma_theme') || localStorage.getItem('vityarthi_theme') || 'dark',
  charts: {
    bellCurve: null,
    gradeDist: null,
    comparison: null,
    cgpaTrend: null,
  }
};

// GPA Courses State
let gpaCourses = [
  { id: 'c1', name: 'Problem Solving & Programming', grade: 'S', credits: 4.0 },
  { id: 'c2', name: 'Calculus & Linear Algebra', grade: 'A', credits: 4.0 },
  { id: 'c3', name: 'Engineering Physics & Lab', grade: 'A', credits: 4.0 },
  { id: 'c4', name: 'Basic Electrical Engineering', grade: 'B', credits: 3.0 },
  { id: 'c5', name: 'Technical English & Comm', grade: 'S', credits: 2.0 },
  { id: 'c6', name: 'Design Thinking / Innovation', grade: 'S', credits: 1.5 },
];

const GRADE_POINTS = {
  'S': 10,
  'A': 9,
  'B': 8,
  'C': 7,
  'D': 6,
  'E': 5,
  'F': 0,
  'N': 0
};

// Scheme Definitions
const SCHEME_INFO = {
  gaussian: {
    name: 'Gaussian Relative (Z-Score)',
    desc: 'Based on standard deviations from class mean (\u03bc). Eliminates subjective bias for standardized curved grading.',
    thresholds: [
      { grade: 'S', cond: 'Z \u2265 +2.0', color: '#8b5cf6' },
      { grade: 'A', cond: 'Z \u2265 +1.0', color: '#10b981' },
      { grade: 'B', cond: 'Z \u2265 +0.5', color: '#06b6d4' },
      { grade: 'C', cond: 'Z \u2265 -0.5', color: '#f59e0b' },
      { grade: 'D', cond: 'Z \u2265 -1.3', color: '#f97316' },
      { grade: 'F', cond: 'Z < -1.3', color: '#ef4444' },
    ]
  },
  vit: {
    name: 'VIT Relative Grading Model',
    desc: 'Standard university curve with 7 grade tiers (S, A, B, C, D, E, F) and expanded pass margins.',
    thresholds: [
      { grade: 'S', cond: 'Z \u2265 +1.5', color: '#8b5cf6' },
      { grade: 'A', cond: 'Z \u2265 +1.0', color: '#10b981' },
      { grade: 'B', cond: 'Z \u2265 +0.5', color: '#06b6d4' },
      { grade: 'C', cond: 'Z \u2265 0.0', color: '#f59e0b' },
      { grade: 'D', cond: 'Z \u2265 -1.0', color: '#f97316' },
      { grade: 'E', cond: 'Z \u2265 -1.5', color: '#fbbf24' },
      { grade: 'F', cond: 'Z < -1.5', color: '#ef4444' },
    ]
  },
  percentile: {
    name: 'Percentile Rank Model',
    desc: 'Top percentage allocations. Ideal for competitive and standardized cohort rankings.',
    thresholds: [
      { grade: 'S', cond: 'Top 10%', color: '#8b5cf6' },
      { grade: 'A', cond: 'Next 15% (75-90%)', color: '#10b981' },
      { grade: 'B', cond: 'Next 25% (50-75%)', color: '#06b6d4' },
      { grade: 'C', cond: 'Next 25% (25-50%)', color: '#f59e0b' },
      { grade: 'D', cond: 'Next 15% (10-25%)', color: '#f97316' },
      { grade: 'F', cond: 'Bottom 10%', color: '#ef4444' },
    ]
  },
  absolute: {
    name: 'Absolute Score Thresholds',
    desc: 'Static benchmark grading without normalization curves.',
    thresholds: [
      { grade: 'S', cond: 'Score \u2265 90', color: '#8b5cf6' },
      { grade: 'A', cond: '80 \u2264 Score < 90', color: '#10b981' },
      { grade: 'B', cond: '70 \u2264 Score < 80', color: '#06b6d4' },
      { grade: 'C', cond: '60 \u2264 Score < 70', color: '#f59e0b' },
      { grade: 'D', cond: '50 \u2264 Score < 60', color: '#f97316' },
      { grade: 'E', cond: '40 \u2264 Score < 50', color: '#fbbf24' },
      { grade: 'F', cond: 'Score < 40', color: '#ef4444' },
    ]
  }
};


// ==============================================================================
// Local Storage Persistence
// ==============================================================================

function loadClassesFromStorage() {
  const saved = localStorage.getItem('gradesigma_classes_v2') || localStorage.getItem('vityarthi_classes_v2');
  if (saved) {
    try {
      state.classes = JSON.parse(saved);
    } catch (e) {
      state.classes = JSON.parse(JSON.stringify(DEFAULT_CLASSES));
    }
  } else {
    state.classes = JSON.parse(JSON.stringify(DEFAULT_CLASSES));
  }

  const savedActive = localStorage.getItem('gradesigma_active_class_v2') || localStorage.getItem('vityarthi_active_class_v2');
  if (savedActive && state.classes.some(c => c.id === savedActive)) {
    state.activeClassId = savedActive;
  } else if (state.classes.length > 0) {
    state.activeClassId = state.classes[0].id;
  }

  // Sanitize any previous cached student IDs containing 25BAI
  if (state.classes && Array.isArray(state.classes)) {
    state.classes.forEach(c => {
      if (c.students && Array.isArray(c.students)) {
        c.students.forEach((s, idx) => {
          if (s.roll && String(s.roll).includes('25BAI')) {
            const prefix = c.code && c.code.includes('MAT') ? 'MA' : 'CS';
            s.roll = `${prefix}${101 + idx}`;
          }
        });
      }
    });
  }

  // Load GPA courses if saved
  const savedGPA = localStorage.getItem('gradesigma_gpa_courses');
  if (savedGPA) {
    try {
      gpaCourses = JSON.parse(savedGPA);
    } catch (e) {}
  }
}

function saveClassesToStorage() {
  localStorage.setItem('gradesigma_classes_v2', JSON.stringify(state.classes));
  localStorage.setItem('gradesigma_active_class_v2', state.activeClassId);
  localStorage.setItem('gradesigma_gpa_courses', JSON.stringify(gpaCourses));
}

function getActiveClass() {
  return state.classes.find(c => c.id === state.activeClassId) || state.classes[0];
}


// ==============================================================================
// Mathematical & Statistical Engine
// ==============================================================================

function computeStats(students, scheme = 'gaussian') {
  if (!students || students.length === 0) {
    return {
      count: 0,
      mean: 0,
      stdDev: 0,
      median: 0,
      min: 0,
      max: 0,
      q1: 0,
      q3: 0,
      iqr: 0,
      passPercentage: 100,
      gradeDistribution: { 'S': 0, 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0 },
      highAchieversCount: 0,
      remedialCount: 0,
      processedStudents: []
    };
  }

  const scores = students.map(s => s.score);
  const n = scores.length;
  const mean = scores.reduce((acc, val) => acc + val, 0) / n;

  const variance = scores.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
  const stdDev = Math.sqrt(variance);

  const sortedScores = [...scores].sort((a, b) => a - b);
  const min = sortedScores[0];
  const max = sortedScores[sortedScores.length - 1];

  const median = getPercentileValue(sortedScores, 0.5);
  const q1 = getPercentileValue(sortedScores, 0.25);
  const q3 = getPercentileValue(sortedScores, 0.75);
  const iqr = q3 - q1;

  // Grade Assignment
  const gradeCounts = { 'S': 0, 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0 };
  let highAchieversCount = 0;
  let remedialCount = 0;

  const processedStudents = students.map(s => {
    let zScore = 0;
    if (stdDev > 0.0001) {
      zScore = (s.score - mean) / stdDev;
    }

    // Calculate Percentile
    const countBelow = sortedScores.filter(v => v < s.score).length;
    const countEqual = sortedScores.filter(v => v === s.score).length;
    const percentile = ((countBelow + 0.5 * countEqual) / n) * 100;

    let grade = 'C';
    let gradePoint = 7;

    if (scheme === 'gaussian') {
      if (stdDev < 0.0001) {
        grade = s.score >= 50 ? 'C' : 'F';
      } else {
        if (zScore >= 2.0) grade = 'S';
        else if (zScore >= 1.0) grade = 'A';
        else if (zScore >= 0.5) grade = 'B';
        else if (zScore >= -0.5) grade = 'C';
        else if (zScore >= -1.3) grade = 'D';
        else grade = 'F';
      }
    } else if (scheme === 'vit') {
      if (stdDev < 0.0001) {
        grade = s.score >= 50 ? 'C' : 'F';
      } else {
        if (zScore >= 1.5) grade = 'S';
        else if (zScore >= 1.0) grade = 'A';
        else if (zScore >= 0.5) grade = 'B';
        else if (zScore >= 0.0) grade = 'C';
        else if (zScore >= -1.0) grade = 'D';
        else if (zScore >= -1.5) grade = 'E';
        else grade = 'F';
      }
    } else if (scheme === 'percentile') {
      if (percentile >= 90) grade = 'S';
      else if (percentile >= 75) grade = 'A';
      else if (percentile >= 50) grade = 'B';
      else if (percentile >= 25) grade = 'C';
      else if (percentile >= 10) grade = 'D';
      else grade = 'F';
    } else if (scheme === 'absolute') {
      if (s.score >= 90) grade = 'S';
      else if (s.score >= 80) grade = 'A';
      else if (s.score >= 70) grade = 'B';
      else if (s.score >= 60) grade = 'C';
      else if (s.score >= 50) grade = 'D';
      else if (s.score >= 40) grade = 'E';
      else grade = 'F';
    }

    const gpMap = { 'S': 10, 'A': 9, 'B': 8, 'C': 7, 'D': 6, 'E': 5, 'F': 0 };
    gradePoint = gpMap[grade] || 0;

    let outlierStatus = 'Normal';
    if (zScore >= 2.0) {
      outlierStatus = 'High Achiever';
      highAchieversCount++;
    } else if (zScore <= -1.3 || grade === 'F') {
      outlierStatus = 'Remedial';
      remedialCount++;
    }

    gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;

    return {
      id: s.roll || s.id,
      name: s.name,
      score: s.score,
      z_score: zScore,
      grade: grade,
      grade_point: gradePoint,
      percentile: percentile,
      outlier_status: outlierStatus
    };
  });

  const passedCount = processedStudents.filter(s => s.grade !== 'F').length;
  const passPercentage = n > 0 ? (passedCount / n) * 100 : 100;

  return {
    count: n,
    mean,
    stdDev,
    median,
    min,
    max,
    q1,
    q3,
    iqr,
    passPercentage,
    gradeDistribution: gradeCounts,
    highAchieversCount,
    remedialCount,
    processedStudents
  };
}

function getPercentileValue(sortedArr, p) {
  if (sortedArr.length === 0) return 0;
  if (sortedArr.length === 1) return sortedArr[0];
  const idx = (sortedArr.length - 1) * p;
  const lower = Math.floor(idx);
  const upper = Math.ceil(idx);
  const weight = idx - lower;
  return sortedArr[lower] * (1 - weight) + sortedArr[upper] * weight;
}

function normalPDF(x, mean, stdDev) {
  if (stdDev <= 0.0001) return 0;
  const exponent = -0.5 * Math.pow((x - mean) / stdDev, 2);
  return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
}


// ==============================================================================
// Splash Screen Canvas Particle & Waveform Animation
// ==============================================================================

function initSplashAnimation() {
  const canvas = document.getElementById('splash-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const particleCount = 40;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  let waveOffset = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw animated Gaussian waveform across the screen
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.25)';
    ctx.lineWidth = 3;

    const centerY = canvas.height * 0.55;
    const peakHeight = canvas.height * 0.35;
    const centerX = canvas.width * 0.5;
    const curveWidth = canvas.width * 0.18;

    for (let x = 0; x <= canvas.width; x += 5) {
      const z = (x - centerX) / curveWidth;
      const gaussian = Math.exp(-0.5 * z * z);
      const sineWave = Math.sin(x * 0.01 + waveOffset) * 15;
      const y = centerY - (gaussian * peakHeight) + sineWave;

      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Second overlapping purple accent wave
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
    ctx.lineWidth = 2;
    for (let x = 0; x <= canvas.width; x += 5) {
      const z = (x - centerX) / (curveWidth * 1.3);
      const gaussian = Math.exp(-0.5 * z * z);
      const sineWave = Math.sin(x * 0.015 - waveOffset) * 12;
      const y = centerY - (gaussian * peakHeight * 0.8) + sineWave;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    waveOffset += 0.02;

    // Draw floating glowing particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
      ctx.fill();
    });

    animationFrameId = requestAnimationFrame(draw);
  }

  draw();
}


// ==============================================================================
// View Router & Page Switcher
// ==============================================================================

function switchView(viewName) {
  state.currentView = viewName;

  const splash = document.getElementById('view-splash');
  const appShell = document.getElementById('app-shell');
  const viewDashboard = document.getElementById('view-dashboard');
  const viewGPA = document.getElementById('view-gpa');
  const viewCGPA = document.getElementById('view-cgpa');
  const viewClasses = document.getElementById('view-classes');
  const viewComparison = document.getElementById('view-comparison');
  const viewSimulator = document.getElementById('view-simulator');

  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(t => t.classList.remove('active'));

  if (viewName === 'splash') {
    splash.classList.remove('hidden');
    appShell.classList.add('hidden');
    return;
  }

  splash.classList.add('hidden');
  appShell.classList.remove('hidden');

  viewDashboard.classList.add('hidden');
  viewGPA.classList.add('hidden');
  viewCGPA.classList.add('hidden');
  viewClasses.classList.add('hidden');
  viewComparison.classList.add('hidden');
  viewSimulator.classList.add('hidden');

  const targetTab = document.getElementById(`nav-tab-${viewName}`);
  if (targetTab) targetTab.classList.add('active');

  if (viewName === 'dashboard') {
    viewDashboard.classList.remove('hidden');
    renderDashboard();
  } else if (viewName === 'gpa') {
    viewGPA.classList.remove('hidden');
    renderGPACalculator();
  } else if (viewName === 'cgpa') {
    viewCGPA.classList.remove('hidden');
    renderCGPAPlanner();
  } else if (viewName === 'classes') {
    viewClasses.classList.remove('hidden');
    renderClassroomsHub();
  } else if (viewName === 'comparison') {
    viewComparison.classList.remove('hidden');
    renderComparisonView();
  } else if (viewName === 'simulator') {
    viewSimulator.classList.remove('hidden');
    renderFullSimulator();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.lucide) lucide.createIcons();
}


// ==============================================================================
// Dashboard Renderer (Classroom Relative Grading)
// ==============================================================================

function renderDashboard() {
  const currentClass = getActiveClass();
  if (!currentClass) return;

  // Update banner
  document.getElementById('dash-class-code').textContent = currentClass.code;
  document.getElementById('dash-class-name').textContent = currentClass.name;
  document.getElementById('dash-class-meta').textContent = 
    `Section &bull; ${currentClass.students.length} Enrolled &bull; ${SCHEME_INFO[currentClass.scheme].name}`;

  // Update Scheme UI
  document.getElementById('active-scheme-badge').textContent = SCHEME_INFO[currentClass.scheme].name;
  document.querySelectorAll('.scheme-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.scheme === currentClass.scheme);
  });
  renderSchemeDetails(currentClass.scheme);

  // Compute Stats
  const stats = computeStats(currentClass.students, currentClass.scheme);

  // Update KPI Cards
  document.getElementById('stat-total-students').textContent = stats.count;
  document.getElementById('stat-mean').textContent = stats.mean.toFixed(2);
  document.getElementById('stat-std-dev').textContent = stats.stdDev.toFixed(2);
  document.getElementById('stat-median').textContent = stats.median.toFixed(2);
  document.getElementById('stat-range').textContent = `Min: ${stats.min.toFixed(1)} | Max: ${stats.max.toFixed(1)}`;
  document.getElementById('stat-pass-rate').textContent = `${stats.passPercentage.toFixed(1)}%`;
  document.getElementById('stat-outliers-sub').textContent = 
    `${stats.highAchieversCount} High Achievers | ${stats.remedialCount} Remedial`;

  // Render Charts
  renderDashboardCharts(stats);

  // Render Table
  renderTable(stats.processedStudents);

  // Update header select
  const headerSelect = document.getElementById('header-class-select');
  if (headerSelect) headerSelect.value = state.activeClassId;
}

function renderSchemeDetails(schemeKey) {
  const info = SCHEME_INFO[schemeKey];
  const container = document.getElementById('scheme-details-container');
  if (!container) return;

  let thresholdsHtml = info.thresholds.map(t => `
    <div class="threshold-pill" style="border-left: 3px solid ${t.color}">
      <span class="threshold-grade" style="color: ${t.color}">${t.grade}</span>
      <span class="threshold-cond">${t.cond}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <p class="scheme-desc">${info.desc}</p>
    <div class="thresholds-grid">${thresholdsHtml}</div>
  `;
}

function renderTable(students) {
  const tbody = document.getElementById('roster-table-body');
  const emptyState = document.getElementById('table-empty-state');
  const recordCounter = document.getElementById('table-record-count');

  if (!students || students.length === 0) {
    tbody.innerHTML = '';
    emptyState.classList.remove('hidden');
    recordCounter.textContent = 'Showing 0 students';
    return;
  }
  emptyState.classList.add('hidden');

  let filtered = [...students];

  // Search filter
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(s => 
      s.name.toLowerCase().includes(q) || String(s.id).toLowerCase().includes(q)
    );
  }

  // Grade filter
  if (state.gradeFilter !== 'ALL') {
    filtered = filtered.filter(s => s.grade === state.gradeFilter);
  }

  // Sorting
  filtered.sort((a, b) => {
    let valA = a[state.sortColumn];
    let valB = b[state.sortColumn];

    if (typeof valA === 'string') {
      return state.sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return state.sortDirection === 'asc' ? valA - valB : valB - valA;
  });

  recordCounter.textContent = `Showing ${filtered.length} of ${students.length} students`;

  tbody.innerHTML = filtered.map(s => {
    let outlierBadge = '<span class="outlier-tag outlier-normal">Normal</span>';
    if (s.outlier_status === 'High Achiever') {
      outlierBadge = '<span class="outlier-tag outlier-high"><i data-lucide="star" style="width:12px;height:12px;"></i> Top Tier</span>';
    } else if (s.outlier_status === 'Remedial') {
      outlierBadge = '<span class="outlier-tag outlier-low"><i data-lucide="alert-triangle" style="width:12px;height:12px;"></i> Remedial</span>';
    }

    return `
      <tr>
        <td><strong>${escapeHtml(s.id)}</strong></td>
        <td>${escapeHtml(s.name)}</td>
        <td><strong>${s.score.toFixed(1)}</strong></td>
        <td><code style="color: ${s.z_score >= 0 ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">${s.z_score >= 0 ? '+' : ''}${s.z_score.toFixed(2)}</code></td>
        <td><span class="grade-badge grade-badge-${s.grade}">${s.grade}</span></td>
        <td>${s.percentile.toFixed(1)}%</td>
        <td>${outlierBadge}</td>
        <td class="text-right">
          <div class="action-btn-group">
            <button class="btn-icon" onclick="openStudentReport('${escapeHtml(s.id)}')" title="View Report Card">
              <i data-lucide="file-text" style="width:14px;height:14px;"></i>
            </button>
            <button class="btn-icon btn-icon-danger" onclick="deleteStudent('${escapeHtml(s.id)}')" title="Delete Student">
              <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function renderDashboardCharts(stats) {
  const isDark = state.theme === 'dark';
  const textColor = isDark ? '#9ca3af' : '#4b5563';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';

  // 1. Bell Curve Chart
  const ctxCurve = document.getElementById('bell-curve-chart').getContext('2d');
  const points = [];
  const minX = Math.max(0, Math.floor(stats.mean - 3.5 * (stats.stdDev || 10)));
  const maxX = Math.min(100, Math.ceil(stats.mean + 3.5 * (stats.stdDev || 10)));
  const step = Math.max(0.5, (maxX - minX) / 80);

  for (let x = minX; x <= maxX; x += step) {
    points.push({ x: Number(x.toFixed(1)), y: normalPDF(x, stats.mean, stats.stdDev || 1) });
  }

  const studentScatter = stats.processedStudents.map(s => ({
    x: s.score,
    y: normalPDF(s.score, stats.mean, stats.stdDev || 1),
    name: s.name,
    grade: s.grade,
    z: s.z_score
  }));

  if (state.charts.bellCurve) state.charts.bellCurve.destroy();

  state.charts.bellCurve = new Chart(ctxCurve, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Gaussian Normal Curve',
          data: points,
          borderColor: '#3b82f6',
          backgroundColor: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.08)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2.5
        },
        {
          label: 'Student Scores',
          data: studentScatter,
          type: 'scatter',
          backgroundColor: '#8b5cf6',
          borderColor: '#fff',
          borderWidth: 1.5,
          pointRadius: 5,
          pointHoverRadius: 7
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              if (ctx.datasetIndex === 1) {
                const s = ctx.raw;
                return `${s.name}: ${s.x} marks (Grade ${s.grade}, Z=${s.z >= 0 ? '+' : ''}${s.z.toFixed(2)})`;
              }
              return `Score: ${ctx.parsed.x}`;
            }
          }
        }
      },
      scales: {
        x: {
          type: 'linear',
          min: minX,
          max: maxX,
          grid: { color: gridColor },
          ticks: { color: textColor }
        },
        y: {
          display: false,
          grid: { display: false }
        }
      }
    }
  });

  // 2. Grade Distribution Chart
  const ctxDist = document.getElementById('grade-dist-chart').getContext('2d');
  const gradeLabels = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
  const gradeCounts = gradeLabels.map(g => stats.gradeDistribution[g] || 0);

  if (state.charts.gradeDist) state.charts.gradeDist.destroy();

  state.charts.gradeDist = new Chart(ctxDist, {
    type: 'bar',
    data: {
      labels: gradeLabels.map(g => `Grade ${g}`),
      datasets: [{
        label: 'Number of Students',
        data: gradeCounts,
        backgroundColor: [
          '#8b5cf6', '#10b981', '#06b6d4', '#f59e0b', '#f97316', '#fbbf24', '#ef4444'
        ],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: textColor } },
        y: { beginAtZero: true, ticks: { stepSize: 1, color: textColor }, grid: { color: gridColor } }
      }
    }
  });
}


// ==============================================================================
// VIEW 2: SEMESTER GPA CALCULATOR ENGINE
// ==============================================================================

function calculateGPA() {
  let totalPoints = 0;
  let totalCredits = 0;

  gpaCourses.forEach(c => {
    const pts = GRADE_POINTS[c.grade] ?? 0;
    const cred = parseFloat(c.credits) || 0;
    totalPoints += pts * cred;
    totalCredits += cred;
  });

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits) : 0.00;
  return { gpa, totalPoints, totalCredits, count: gpaCourses.length };
}

function renderGPACalculator() {
  const tbody = document.getElementById('gpa-course-tbody');
  if (!tbody) return;

  tbody.innerHTML = gpaCourses.map((c, idx) => `
    <tr data-id="${c.id}">
      <td>
        <input type="text" class="form-control" value="${escapeHtml(c.name)}" placeholder="Course Code / Subject Name" onchange="updateGPACourse('${c.id}', 'name', this.value)">
      </td>
      <td>
        <select class="form-control" onchange="updateGPACourse('${c.id}', 'grade', this.value)">
          ${['S', 'A', 'B', 'C', 'D', 'E', 'F', 'N'].map(g => `
            <option value="${g}" ${c.grade === g ? 'selected' : ''}>Grade ${g} (${GRADE_POINTS[g]} pts)</option>
          `).join('')}
        </select>
      </td>
      <td>
        <select class="form-control" onchange="updateGPACourse('${c.id}', 'credits', parseFloat(this.value))">
          ${[5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0].map(cr => `
            <option value="${cr}" ${c.credits === cr ? 'selected' : ''}>${cr.toFixed(1)} Credits</option>
          `).join('')}
        </select>
      </td>
      <td class="text-right">
        <button class="btn-icon btn-icon-danger" onclick="deleteGPACourse('${c.id}')" title="Remove Course">
          <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
        </button>
      </td>
    </tr>
  `).join('');

  updateGPADisplay();
  if (window.lucide) lucide.createIcons();
}

function updateGPADisplay() {
  const res = calculateGPA();
  document.getElementById('gpa-display-value').textContent = res.gpa.toFixed(2);
  document.getElementById('gpa-total-credits').textContent = res.totalCredits.toFixed(1);
  document.getElementById('gpa-total-points').textContent = res.totalPoints.toFixed(1);
  document.getElementById('gpa-courses-count').textContent = res.count;

  // Standing Badge
  const standingBadge = document.getElementById('gpa-standing-badge');
  if (res.gpa >= 9.0) {
    standingBadge.textContent = "First Class Distinction (Gold)";
    standingBadge.className = "badge badge-accent";
  } else if (res.gpa >= 8.0) {
    standingBadge.textContent = "First Class with Distinction";
    standingBadge.className = "badge badge-success";
  } else if (res.gpa >= 6.5) {
    standingBadge.textContent = "First Class";
    standingBadge.className = "badge badge-info";
  } else if (res.gpa >= 5.0) {
    standingBadge.textContent = "Pass Standing";
    standingBadge.className = "badge badge-warning";
  } else {
    standingBadge.textContent = "Academic Warning";
    standingBadge.className = "badge badge-danger";
  }

  document.getElementById('gpa-math-sub').textContent = 
    `GPA = ${res.totalPoints.toFixed(1)} points / ${res.totalCredits.toFixed(1)} credits = ${res.gpa.toFixed(2)}`;
}

window.updateGPACourse = function(courseId, field, value) {
  const course = gpaCourses.find(c => c.id === courseId);
  if (course) {
    course[field] = value;
    saveClassesToStorage();
    updateGPADisplay();
  }
};

window.deleteGPACourse = function(courseId) {
  gpaCourses = gpaCourses.filter(c => c.id !== courseId);
  saveClassesToStorage();
  renderGPACalculator();
};

window.addGPACourse = function() {
  const newId = 'c_' + Date.now();
  gpaCourses.push({
    id: newId,
    name: `Course ${gpaCourses.length + 1}`,
    grade: 'A',
    credits: 3.0
  });
  saveClassesToStorage();
  renderGPACalculator();
};


// ==============================================================================
// VIEW 3: CUMULATIVE CGPA PLANNER & FORECASTER
// ==============================================================================

function renderCGPAPlanner() {
  updateQuickCGPA();
  updateTargetCGPA();
  renderCGPATrendChart();
}

function updateQuickCGPA() {
  const prevCGPA = parseFloat(document.getElementById('cgpa-prev-gpa').value) || 0;
  const prevCredits = parseFloat(document.getElementById('cgpa-prev-credits').value) || 0;
  const currGPA = parseFloat(document.getElementById('cgpa-curr-gpa').value) || 0;
  const currCredits = parseFloat(document.getElementById('cgpa-curr-credits').value) || 0;

  const totalCredits = prevCredits + currCredits;
  let newCGPA = 0;
  if (totalCredits > 0) {
    newCGPA = ((prevCGPA * prevCredits) + (currGPA * currCredits)) / totalCredits;
  }

  document.getElementById('cgpa-quick-result').textContent = newCGPA.toFixed(2);
  document.getElementById('cgpa-quick-formula').textContent = 
    `CGPA = ( (${prevCGPA.toFixed(2)} \u00D7 ${prevCredits}) + (${currGPA.toFixed(2)} \u00D7 ${currCredits}) ) / ${totalCredits.toFixed(0)} = ${newCGPA.toFixed(3)}`;
}

function updateTargetCGPA() {
  const targetCGPA = parseFloat(document.getElementById('cgpa-target-desired').value) || 9.0;
  const totalDegreeCredits = parseFloat(document.getElementById('cgpa-target-total-deg-credits').value) || 160;
  const creditsLeft = parseFloat(document.getElementById('cgpa-target-credits-left').value) || 100;
  const prevCGPA = parseFloat(document.getElementById('cgpa-prev-gpa').value) || 8.5;
  const creditsDone = Math.max(0, totalDegreeCredits - creditsLeft);

  const totalPointsNeeded = targetCGPA * totalDegreeCredits;
  const pointsAlreadyEarned = prevCGPA * creditsDone;
  const remainingPointsNeeded = totalPointsNeeded - pointsAlreadyEarned;

  let requiredGPA = 0;
  if (creditsLeft > 0) {
    requiredGPA = remainingPointsNeeded / creditsLeft;
  }

  const reqEl = document.getElementById('cgpa-target-required-gpa');
  const statusEl = document.getElementById('cgpa-target-status-text');

  reqEl.textContent = requiredGPA > 10 ? '10.0+' : (requiredGPA < 0 ? '0.00' : requiredGPA.toFixed(2));
  if (requiredGPA > 10.0) {
    statusEl.textContent = "Mathematically not possible without grade improvements.";
    statusEl.style.color = "var(--accent-rose)";
  } else if (requiredGPA >= 9.0) {
    statusEl.textContent = "Aim for straight 'S' and 'A' grades in remaining semesters.";
    statusEl.style.color = "var(--accent-amber)";
  } else if (requiredGPA >= 7.5) {
    statusEl.textContent = "Very achievable with steady consistent preparation!";
    statusEl.style.color = "var(--accent-emerald)";
  } else {
    statusEl.textContent = "Target benchmark is comfortably within reach!";
    statusEl.style.color = "var(--accent-teal)";
  }
}

function renderCGPATrendChart() {
  const ctx = document.getElementById('cgpa-trend-chart')?.getContext('2d');
  if (!ctx) return;

  const isDark = state.theme === 'dark';
  const textColor = isDark ? '#9ca3af' : '#4b5563';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';

  const labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4 (Current)', 'Sem 5 (Est)', 'Sem 6 (Est)', 'Sem 7 (Est)', 'Sem 8 (Est)'];
  const dataCGPA = [8.40, 8.55, 8.68, 8.75, 8.85, 8.92, 9.02, 9.08];

  if (state.charts.cgpaTrend) state.charts.cgpaTrend.destroy();

  state.charts.cgpaTrend = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Cumulative CGPA Progression',
          data: dataCGPA,
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139, 92, 246, 0.12)',
          fill: true,
          tension: 0.35,
          pointRadius: 5,
          pointHoverRadius: 7,
          borderWidth: 2.5
        },
        {
          label: '9.00 Distinction Benchmark',
          data: [9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0],
          borderColor: 'rgba(16, 185, 129, 0.6)',
          borderDash: [6, 6],
          pointRadius: 0,
          borderWidth: 1.5,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top', labels: { color: textColor } }
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: textColor } },
        y: { min: 7.0, max: 10.0, ticks: { stepSize: 0.5, color: textColor }, grid: { color: gridColor } }
      }
    }
  });
}


// ==============================================================================
// Classrooms Hub / Section Manager
// ==============================================================================

function renderClassroomsHub() {
  const container = document.getElementById('classes-card-grid');
  if (!container) return;

  container.innerHTML = state.classes.map(c => {
    const stats = computeStats(c.students, c.scheme);
    const isActive = c.id === state.activeClassId;

    return `
      <div class="class-card card ${isActive ? 'active-class-card' : ''}">
        <div class="class-card-header">
          <div>
            <span class="badge ${isActive ? 'badge-accent' : 'badge-info'}">${escapeHtml(c.code)}</span>
            <h3 class="class-card-title">${escapeHtml(c.name)}</h3>
          </div>
          ${isActive ? '<span class="active-pill"><i data-lucide="check-circle" style="width:12px;height:12px;"></i> Active</span>' : ''}
        </div>

        <div class="class-meta-grid">
          <div class="meta-item">
            <span class="meta-label">Students</span>
            <span class="meta-val">${stats.count}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Average (&mu;)</span>
            <span class="meta-val">${stats.mean.toFixed(1)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Std Dev (&sigma;)</span>
            <span class="meta-val">${stats.stdDev.toFixed(1)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Pass Rate</span>
            <span class="meta-val" style="color: var(--accent-emerald);">${stats.passPercentage.toFixed(0)}%</span>
          </div>
        </div>

        <div class="class-card-footer">
          <button class="btn ${isActive ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="selectClass('${c.id}')">
            <i data-lucide="arrow-right"></i> ${isActive ? 'Manage Section' : 'Switch To Class'}
          </button>
          <div class="class-action-icons">
            <button class="btn-icon" onclick="exportClassCSV('${c.id}')" title="Export CSV">
              <i data-lucide="download" style="width:14px;height:14px;"></i>
            </button>
            ${state.classes.length > 1 ? `
              <button class="btn-icon btn-icon-danger" onclick="deleteClass('${c.id}')" title="Delete Class">
                <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

window.selectClass = function(classId) {
  state.activeClassId = classId;
  saveClassesToStorage();
  populateClassDropdowns();
  switchView('dashboard');
};

window.deleteClass = function(classId) {
  if (state.classes.length <= 1) {
    alert("You must keep at least one classroom section.");
    return;
  }
  const cls = state.classes.find(c => c.id === classId);
  if (confirm(`Are you sure you want to delete section "${cls?.name}"?`)) {
    state.classes = state.classes.filter(c => c.id !== classId);
    if (state.activeClassId === classId) {
      state.activeClassId = state.classes[0].id;
    }
    saveClassesToStorage();
    populateClassDropdowns();
    renderClassroomsHub();
  }
};


// ==============================================================================
// Cross-Section Comparative View
// ==============================================================================

function renderComparisonView() {
  const isDark = state.theme === 'dark';
  const textColor = isDark ? '#9ca3af' : '#4b5563';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';

  const tbody = document.getElementById('comparison-table-body');
  const comparisonData = state.classes.map(c => ({
    classObj: c,
    stats: computeStats(c.students, c.scheme)
  }));

  tbody.innerHTML = comparisonData.map(cd => `
    <tr>
      <td><strong>${escapeHtml(cd.classObj.code)}</strong> - ${escapeHtml(cd.classObj.name)}</td>
      <td>${cd.stats.count}</td>
      <td><strong>${cd.stats.mean.toFixed(2)}</strong></td>
      <td>${cd.stats.stdDev.toFixed(2)}</td>
      <td>${cd.stats.median.toFixed(2)}</td>
      <td>[${cd.stats.min.toFixed(1)} - ${cd.stats.max.toFixed(1)}]</td>
      <td><span style="color: var(--accent-emerald); font-weight: bold;">${cd.stats.passPercentage.toFixed(1)}%</span></td>
      <td><span class="badge badge-accent">${cd.stats.gradeDistribution['S'] || 0}</span></td>
      <td><span class="badge ${cd.stats.remedialCount > 0 ? 'badge-info' : ''}">${cd.stats.remedialCount}</span></td>
    </tr>
  `).join('');

  // Render Multi-dataset comparison chart
  const ctx = document.getElementById('comparison-chart').getContext('2d');
  const labels = ['Grade S', 'Grade A', 'Grade B', 'Grade C', 'Grade D', 'Grade E', 'Grade F'];
  const palette = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899'];

  const datasets = comparisonData.map((cd, idx) => ({
    label: `${cd.classObj.code} (${cd.classObj.name.split('-')[1]?.trim() || cd.classObj.name})`,
    data: ['S', 'A', 'B', 'C', 'D', 'E', 'F'].map(g => cd.stats.gradeDistribution[g] || 0),
    backgroundColor: palette[idx % palette.length],
    borderRadius: 4,
  }));

  if (state.charts.comparison) state.charts.comparison.destroy();

  state.charts.comparison = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top', labels: { color: textColor } }
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: textColor } },
        y: { beginAtZero: true, ticks: { stepSize: 1, color: textColor }, grid: { color: gridColor } }
      }
    }
  });
}


// ==============================================================================
// Dedicated "What-If" Simulator View
// ==============================================================================

function renderFullSimulator() {
  const classSelect = document.getElementById('sim-full-class-select');
  classSelect.innerHTML = state.classes.map(c => `
    <option value="${c.id}" ${c.id === state.activeClassId ? 'selected' : ''}>${escapeHtml(c.code)} - ${escapeHtml(c.name)}</option>
  `).join('');

  const cls = getActiveClass();
  if (cls && cls.students.length > 0) {
    const stats = computeStats(cls.students, cls.scheme);
    document.getElementById('sim-full-mean').value = stats.mean.toFixed(1);
    document.getElementById('sim-full-std').value = stats.stdDev.toFixed(1);
  }

  updateFullSimulator();
}

function updateFullSimulator() {
  const mean = parseFloat(document.getElementById('sim-full-mean').value) || 0;
  const std = parseFloat(document.getElementById('sim-full-std').value) || 1;
  const targetGrade = document.getElementById('sim-full-target-grade').value;

  const zMap = { 'S': 2.0, 'A': 1.0, 'B': 0.5, 'C': -0.5, 'D': -1.3 };
  const zReq = zMap[targetGrade] ?? 1.0;

  const reqScore = Math.max(0, Math.min(100, mean + zReq * std));
  document.getElementById('sim-full-required-score').textContent = reqScore.toFixed(2);
  document.getElementById('sim-full-math-sub').textContent = 
    `Score = ${mean.toFixed(2)} + (${zReq >= 0 ? '+' : ''}${zReq.toFixed(2)} \u00D7 ${std.toFixed(2)}) = ${reqScore.toFixed(2)} marks`;

  const brackets = [
    { grade: 'S', z: 2.0, label: 'Exceptional (Top Tier)' },
    { grade: 'A', z: 1.0, label: 'Excellent' },
    { grade: 'B', z: 0.5, label: 'Very Good' },
    { grade: 'C', z: -0.5, label: 'Average' },
    { grade: 'D', z: -1.3, label: 'Passing Benchmark' },
  ];

  const bracketsHtml = brackets.map(b => {
    const minScore = Math.max(0, Math.min(100, mean + b.z * std));
    const isSelected = b.grade === targetGrade;
    return `
      <div class="sim-bracket-row ${isSelected ? 'selected-bracket' : ''}">
        <span class="sim-bracket-grade grade-badge-${b.grade}">Grade ${b.grade}</span>
        <span class="sim-bracket-z">Z \u2265 ${b.z >= 0 ? '+' : ''}${b.z.toFixed(1)}</span>
        <span class="sim-bracket-score"><strong>\u2265 ${minScore.toFixed(1)}</strong> marks</span>
        <span class="sim-bracket-desc">${b.label}</span>
      </div>
    `;
  }).join('');

  document.getElementById('sim-full-brackets-container').innerHTML = bracketsHtml;
}


// ==============================================================================
// Event Listeners & Modals Setup
// ==============================================================================

function populateClassDropdowns() {
  const headerSelect = document.getElementById('header-class-select');
  if (!headerSelect) return;
  headerSelect.innerHTML = state.classes.map(c => `
    <option value="${c.id}" ${c.id === state.activeClassId ? 'selected' : ''}>${escapeHtml(c.code)} - ${escapeHtml(c.name)}</option>
  `).join('');
  document.getElementById('nav-class-count').textContent = state.classes.length;
}

function setupEventListeners() {
  // Splash Screen Action Gateway Buttons
  document.getElementById('gateway-relative-btn').addEventListener('click', () => switchView('dashboard'));
  document.getElementById('gateway-gpa-btn').addEventListener('click', () => switchView('gpa'));
  document.getElementById('gateway-cgpa-btn').addEventListener('click', () => switchView('cgpa'));
  document.getElementById('gateway-simulator-btn').addEventListener('click', () => switchView('simulator'));

  document.getElementById('header-brand').addEventListener('click', () => switchView('splash'));
  const headerHomeBtn = document.getElementById('header-home-btn');
  if (headerHomeBtn) {
    headerHomeBtn.addEventListener('click', () => switchView('splash'));
  }
  document.getElementById('footer-splash-link').addEventListener('click', (e) => {
    e.preventDefault();
    switchView('splash');
  });

  // Top Nav Tab Switching
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => switchView(tab.dataset.view));
  });

  // Header Active Class Selector
  document.getElementById('header-class-select').addEventListener('change', (e) => {
    state.activeClassId = e.target.value;
    saveClassesToStorage();
    if (state.currentView === 'dashboard') renderDashboard();
    else if (state.currentView === 'classes') renderClassroomsHub();
  });

  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  document.documentElement.setAttribute('data-theme', state.theme);
  themeToggleBtn.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('gradesigma_theme', state.theme);
    if (state.currentView === 'dashboard') renderDashboard();
    else if (state.currentView === 'comparison') renderComparisonView();
    else if (state.currentView === 'cgpa') renderCGPATrendChart();
  });

  // Scheme Switcher (Dashboard)
  document.querySelectorAll('.scheme-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const cls = getActiveClass();
      if (!cls) return;
      cls.scheme = tab.dataset.scheme;
      saveClassesToStorage();
      renderDashboard();
    });
  });

  // Add Single Student Form
  const addForm = document.getElementById('add-student-form');
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const roll = document.getElementById('input-roll').value.trim();
    const name = document.getElementById('input-name').value.trim();
    const score = parseFloat(document.getElementById('input-score').value);
    if (isNaN(score)) return;

    const cls = getActiveClass();
    if (!cls) return;
    cls.students.push({ roll, name, score });
    saveClassesToStorage();

    addForm.reset();
    document.getElementById('input-roll').focus();
    renderDashboard();
  });

  // Clear Class Roster
  document.getElementById('clear-all-btn').addEventListener('click', () => {
    const cls = getActiveClass();
    if (!cls) return;
    if (confirm(`Are you sure you want to clear all student records for ${cls.name}?`)) {
      cls.students = [];
      saveClassesToStorage();
      renderDashboard();
    }
  });

  // GPA Presets & Actions
  document.getElementById('btn-add-gpa-course').addEventListener('click', addGPACourse);
  document.getElementById('btn-add-course-bottom').addEventListener('click', addGPACourse);

  document.getElementById('btn-gpa-preset-20').addEventListener('click', () => {
    gpaCourses = [
      { id: 'c1', name: 'Course 1 (Theory)', grade: 'S', credits: 4.0 },
      { id: 'c2', name: 'Course 2 (Theory)', grade: 'A', credits: 4.0 },
      { id: 'c3', name: 'Course 3 (Theory)', grade: 'A', credits: 4.0 },
      { id: 'c4', name: 'Course 4 (Theory)', grade: 'B', credits: 4.0 },
      { id: 'c5', name: 'Course 5 (Theory)', grade: 'S', credits: 4.0 },
    ];
    saveClassesToStorage();
    renderGPACalculator();
  });

  document.getElementById('btn-gpa-preset-24').addEventListener('click', () => {
    gpaCourses = [
      { id: 'c1', name: 'Core Subject 1', grade: 'S', credits: 4.0 },
      { id: 'c2', name: 'Core Subject 2', grade: 'A', credits: 4.0 },
      { id: 'c3', name: 'Elective Subject 1', grade: 'A', credits: 4.0 },
      { id: 'c4', name: 'Elective Subject 2', grade: 'B', credits: 4.0 },
      { id: 'c5', name: 'Mathematics / Science', grade: 'S', credits: 4.0 },
      { id: 'c6', name: 'Practical / Project Lab', grade: 'S', credits: 4.0 },
    ];
    saveClassesToStorage();
    renderGPACalculator();
  });

  document.getElementById('btn-gpa-clear').addEventListener('click', () => {
    if (confirm("Reset all courses in GPA calculator?")) {
      gpaCourses = [];
      saveClassesToStorage();
      renderGPACalculator();
    }
  });

  document.getElementById('btn-transfer-to-cgpa').addEventListener('click', () => {
    const res = calculateGPA();
    document.getElementById('cgpa-curr-gpa').value = res.gpa.toFixed(2);
    document.getElementById('cgpa-curr-credits').value = res.totalCredits.toFixed(1);
    switchView('cgpa');
  });

  // CGPA Inputs Listeners
  ['cgpa-prev-gpa', 'cgpa-prev-credits', 'cgpa-curr-gpa', 'cgpa-curr-credits'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateQuickCGPA);
  });

  ['cgpa-target-desired', 'cgpa-target-total-deg-credits', 'cgpa-target-credits-left', 'cgpa-prev-gpa'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateTargetCGPA);
  });

  // Table Search and Grade Filter
  document.getElementById('roster-search').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    const cls = getActiveClass();
    if (!cls) return;
    const stats = computeStats(cls.students, cls.scheme);
    renderTable(stats.processedStudents);
  });

  document.getElementById('grade-filter').addEventListener('change', (e) => {
    state.gradeFilter = e.target.value;
    const cls = getActiveClass();
    if (!cls) return;
    const stats = computeStats(cls.students, cls.scheme);
    renderTable(stats.processedStudents);
  });

  // Table Sorting
  document.querySelectorAll('.roster-table th.sortable').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort;
      if (state.sortColumn === col) {
        state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortColumn = col;
        state.sortDirection = 'asc';
      }
      const cls = getActiveClass();
      if (!cls) return;
      const stats = computeStats(cls.students, cls.scheme);
      renderTable(stats.processedStudents);
    });
  });

  // CSV Drop Zone
  const dropZone = document.getElementById('csv-drop-zone');
  const fileInput = document.getElementById('csv-file-input');

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files.length > 0) {
      handleCsvFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleCsvFile(e.target.files[0]);
    }
  });

  // Bulk Paste Modal
  document.getElementById('open-paste-modal-btn').addEventListener('click', () => {
    document.getElementById('paste-modal').classList.remove('hidden');
  });
  document.getElementById('close-paste-modal-btn').addEventListener('click', () => {
    document.getElementById('paste-modal').classList.add('hidden');
  });
  document.getElementById('cancel-paste-modal-btn').addEventListener('click', () => {
    document.getElementById('paste-modal').classList.add('hidden');
  });
  document.getElementById('import-pasted-data-btn').addEventListener('click', () => {
    const text = document.getElementById('bulk-paste-textarea').value;
    parseBulkText(text);
    document.getElementById('paste-modal').classList.add('hidden');
    document.getElementById('bulk-paste-textarea').value = '';
  });

  // Create Class Modal
  document.getElementById('btn-create-class-modal').addEventListener('click', () => {
    document.getElementById('modal-create-class').classList.remove('hidden');
  });
  document.getElementById('close-create-class-modal').addEventListener('click', () => {
    document.getElementById('modal-create-class').classList.add('hidden');
  });
  document.getElementById('cancel-create-class-modal').addEventListener('click', () => {
    document.getElementById('modal-create-class').classList.add('hidden');
  });
  document.getElementById('form-create-class').addEventListener('submit', (e) => {
    e.preventDefault();
    const code = document.getElementById('new-class-code').value.trim().toUpperCase();
    const name = document.getElementById('new-class-name').value.trim();
    const scheme = document.getElementById('new-class-scheme').value;

    const newClass = {
      id: 'class-' + Date.now(),
      code,
      name,
      scheme,
      students: []
    };

    state.classes.push(newClass);
    state.activeClassId = newClass.id;
    saveClassesToStorage();
    populateClassDropdowns();

    document.getElementById('modal-create-class').classList.add('hidden');
    document.getElementById('form-create-class').reset();
    renderClassroomsHub();
  });

  // Simulator Inputs
  document.getElementById('sim-full-class-select').addEventListener('change', (e) => {
    const cls = state.classes.find(c => c.id === e.target.value);
    if (cls && cls.students.length > 0) {
      const stats = computeStats(cls.students, cls.scheme);
      document.getElementById('sim-full-mean').value = stats.mean.toFixed(1);
      document.getElementById('sim-full-std').value = stats.stdDev.toFixed(1);
    }
    updateFullSimulator();
  });
  document.getElementById('sim-full-mean').addEventListener('input', updateFullSimulator);
  document.getElementById('sim-full-std').addEventListener('input', updateFullSimulator);
  document.getElementById('sim-full-target-grade').addEventListener('change', updateFullSimulator);

  // Export & Print Buttons
  document.getElementById('export-csv-btn').addEventListener('click', () => exportClassCSV(state.activeClassId));
  document.getElementById('btn-export-class-csv').addEventListener('click', () => exportClassCSV(state.activeClassId));
  document.getElementById('export-json-btn').addEventListener('click', exportClassJSON);
  document.getElementById('print-sheet-btn').addEventListener('click', () => window.print());
  document.getElementById('btn-print-class-sheet').addEventListener('click', () => window.print());

  // Report Card Modal Close
  document.getElementById('close-report-modal-btn').addEventListener('click', () => {
    document.getElementById('report-modal').classList.add('hidden');
  });
  document.getElementById('close-report-btn').addEventListener('click', () => {
    document.getElementById('report-modal').classList.add('hidden');
  });
  document.getElementById('print-single-report-btn').addEventListener('click', () => window.print());

  // Empty state load demo
  document.getElementById('empty-load-demo-btn')?.addEventListener('click', () => {
    const cls = getActiveClass();
    if (!cls) return;
    cls.students = JSON.parse(JSON.stringify(DEFAULT_CLASSES[0].students));
    saveClassesToStorage();
    renderDashboard();
  });
}

function handleCsvFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result;
    parseBulkText(text);
  };
  reader.readAsText(file);
}

function parseBulkText(text) {
  const cls = getActiveClass();
  if (!cls) return;

  const lines = text.trim().split(/\r?\n/);
  const newStudents = [];

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('---') || trimmed.toLowerCase().startsWith('roll') || trimmed.toLowerCase().startsWith('id')) {
      return;
    }
    const parts = trimmed.split(',').map(p => p.trim());
    let roll, name, score;

    if (parts.length >= 3) {
      roll = parts[0];
      name = parts[1];
      score = parseFloat(parts[2]);
    } else if (parts.length === 2) {
      if (!isNaN(parseFloat(parts[1]))) {
        roll = (cls.students.length + newStudents.length + 1).toString();
        name = parts[0];
        score = parseFloat(parts[1]);
      } else {
        roll = parts[0];
        name = `Student ${cls.students.length + newStudents.length + 1}`;
        score = parseFloat(parts[1]);
      }
    } else if (parts.length === 1) {
      score = parseFloat(parts[0]);
      roll = (cls.students.length + newStudents.length + 1).toString();
      name = `Student ${roll}`;
    }

    if (!isNaN(score)) {
      newStudents.push({ roll, name, score });
    }
  });

  if (newStudents.length > 0) {
    cls.students = [...cls.students, ...newStudents];
    saveClassesToStorage();
    renderDashboard();
  }
}

window.deleteStudent = function(roll) {
  const cls = getActiveClass();
  if (!cls) return;
  cls.students = cls.students.filter(s => s.roll !== roll);
  saveClassesToStorage();
  renderDashboard();
};

window.openStudentReport = function(roll) {
  const cls = getActiveClass();
  if (!cls) return;
  const stats = computeStats(cls.students, cls.scheme);
  const student = stats.processedStudents.find(s => s.id === roll);
  if (!student) return;

  const reportContainer = document.getElementById('report-modal-content');
  reportContainer.innerHTML = `
    <div class="certificate-box">
      <div class="cert-header">
        <h4>GradeSigma Academic Assessment Certificate</h4>
        <p>${escapeHtml(cls.code)} - ${escapeHtml(cls.name)}</p>
      </div>

      <div class="cert-grid">
        <div class="cert-item"><label>Student Name</label><span>${escapeHtml(student.name)}</span></div>
        <div class="cert-item"><label>Roll Number / ID</label><span>${escapeHtml(student.id)}</span></div>
        <div class="cert-item"><label>Raw Marks Scored</label><span>${student.score.toFixed(2)} / 100</span></div>
        <div class="cert-item"><label>Class Average (\u03bc)</label><span>${stats.mean.toFixed(2)}</span></div>
        <div class="cert-item"><label>Standard Deviation (\u03c3)</label><span>${stats.stdDev.toFixed(2)}</span></div>
        <div class="cert-item"><label>Z-Score (Deviation)</label><span>${student.z_score >= 0 ? '+' : ''}${student.z_score.toFixed(3)}</span></div>
        <div class="cert-item"><label>Class Percentile Rank</label><span>${student.percentile.toFixed(1)}%</span></div>
        <div class="cert-item"><label>Performance Status</label><span>${escapeHtml(student.outlier_status)}</span></div>
      </div>

      <div class="cert-grade-huge" style="color: var(--grade-${student.grade.toLowerCase()})">
        GRADE ${student.grade}
      </div>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">
        Evaluated under <strong>${escapeHtml(SCHEME_INFO[cls.scheme].name)}</strong> model.
      </p>
    </div>
  `;

  document.getElementById('report-modal').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
};

window.exportClassCSV = function(classId) {
  const cls = state.classes.find(c => c.id === classId) || getActiveClass();
  if (!cls) return;
  const stats = computeStats(cls.students, cls.scheme);

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += `GradeSigma Assessment Report - ${cls.code}: ${cls.name}\r\n`;
  csvContent += "Roll No / ID,Student Name,Score,Z-Score,Grade,Grade Point,Percentile,Status\r\n";

  stats.processedStudents.forEach(s => {
    csvContent += `"${s.id}","${s.name}",${s.score.toFixed(2)},${s.z_score.toFixed(3)},${s.grade},${s.grade_point},${s.percentile.toFixed(2)}%,"${s.outlier_status}"\r\n`;
  });

  csvContent += "\r\n--- Statistical Summary ---\r\n";
  csvContent += `Total Students,${stats.count}\r\n`;
  csvContent += `Class Mean,${stats.mean.toFixed(2)}\r\n`;
  csvContent += `Standard Deviation,${stats.stdDev.toFixed(2)}\r\n`;
  csvContent += `Median,${stats.median.toFixed(2)}\r\n`;
  csvContent += `Pass Rate,${stats.passPercentage.toFixed(2)}%\r\n`;

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${cls.code}_Grades_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function exportClassJSON() {
  const cls = getActiveClass();
  if (!cls) return;
  const stats = computeStats(cls.students, cls.scheme);

  const jsonStr = JSON.stringify({
    metadata: {
      platform: "GradeSigma",
      courseCode: cls.code,
      courseName: cls.name,
      gradingScheme: SCHEME_INFO[cls.scheme].name,
      generatedAt: new Date().toISOString()
    },
    summary: {
      totalStudents: stats.count,
      mean: stats.mean,
      stdDev: stats.stdDev,
      median: stats.median,
      passPercentage: stats.passPercentage,
      gradeDistribution: stats.gradeDistribution
    },
    students: stats.processedStudents
  }, null, 2);

  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${cls.code}_Analytics_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  loadClassesFromStorage();
  initSplashAnimation();
  setupEventListeners();
  populateClassDropdowns();

  if (window.lucide) lucide.createIcons();
});
