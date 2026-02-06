
// --- Expanded Data Store ---
const db = {
    "10": {
        "common": {
            focus: "Social: History - Nationalism",
            schedule: [
                { time: "06:00 AM", task: "Maths: Algebra Formulas" },
                { time: "08:00 AM", task: "Science: Biology Life Processes" },
                { time: "05:00 PM", task: "Tamil: Memoriter" },
                { time: "07:00 PM", task: "English: Grammar" },
                { time: "08:30 PM", task: "Social: Maps Practice" }
            ],
            tasks: [
                { id: 1001, title: "Maths: Solve Ex 3.5 (5 sums)", quiz: { q: "Formula for (a+b)²?", options: ["a²+b²", "a²+2ab+b²", "a²-b²", "2ab"], correct: 1 } },
                { id: 1002, title: "Science: Draw Heart Diagram", quiz: { q: "Which chamber pumps oxiginated blood?", options: ["Right Atrium", "Left Ventricle", "Right Ventricle", "Left Atrium"], correct: 1 } },
                { id: 1003, title: "Social: Read Rise of Nationalism", quiz: { q: "Who was the 'Iron Man of India'?", options: ["Nehru", "Gandhi", "Patel", "Bose"], correct: 2 } }
            ]
        }
    },
    "11": {
        "pure-science": {
            focus: "Botany: Plant Classification",
            schedule: [
                { time: "05:00 AM", task: "Zoology: Human Physiology" },
                { time: "07:00 AM", task: "Botany: Taxonomy" },
                { time: "05:00 PM", task: "Physics: Vectors" },
                { time: "08:00 PM", task: "Chemistry: Bonding" }
            ],
            tasks: [
                { id: 1101, title: "Zoology: Draw Nephron", quiz: { q: "Functional unit of Kidney?", options: ["Neuron", "Nephron", "Alveoli", "Villi"], correct: 1 } },
                { id: 1102, title: "Chemistry: Hybridization", quiz: { q: "Shape of CH4?", options: ["Linear", "Tetrahedral", "Trigonal", "Planar"], correct: 1 } }
            ]
        },
        "commerce": {
            focus: "Accountancy: BRS",
            schedule: [
                { time: "06:00 AM", task: "Accounts: Bank Rec. Statement" },
                { time: "08:00 AM", task: "Economics: Demand Analysis" },
                { time: "05:00 PM", task: "Commerce: Trade" },
                { time: "08:00 PM", task: "Business Maths" }
            ],
            tasks: [
                { id: 1111, title: "Solve BRS Problem 5", quiz: { q: "Unpresented cheques are?", options: ["Added", "Deducted", "Ignored", "None"], correct: 0 } },
                { id: 1112, title: "Read Types of Trade", quiz: { q: "Importing for Export is called?", options: ["Entrepot", "Internal", "External", "Wholesale"], correct: 0 } }
            ]
        },
        "statistics": {
            focus: "Stats: Measures of Central Tendency",
            schedule: [
                { time: "06:00 AM", task: "Statistics: Mean/Median/Mode" },
                { time: "08:00 AM", task: "Maths: Probability" },
                { time: "06:00 PM", task: "Economics" },
                { time: "08:00 PM", task: "Computer Science" }
            ],
            tasks: [
                { id: 1121, title: "Calculate Mean", quiz: { q: "Sum of deviations from Mean is?", options: ["1", "0", "Infinite", "Negative"], correct: 1 } }
            ]
        }
    },
    "12": {
        "pure-science": {
            focus: "Zoology: Genetics",
            schedule: [
                { time: "04:30 AM", task: "Physics: Ray Optics" },
                { time: "06:30 AM", task: "Chemistry: p-Block" },
                { time: "05:00 PM", task: "Botany: Photosynthesis" },
                { time: "08:00 PM", task: "Zoology: DNA" }
            ],
            tasks: [
                { id: 1201, title: "Derive Lens Maker's Formula", quiz: { q: "Power of lens unit?", options: ["Watt", "Dioptre", "Joule", "Meter"], correct: 1 } },
                { id: 1202, title: "Draw DNA Structure", quiz: { q: "Base pair of A is?", options: ["T", "G", "C", "U"], correct: 0 } }
            ]
        },
        "commerce": {
            focus: "Economics: Fiscal Policy",
            schedule: [
                { time: "05:30 AM", task: "Accounts: Company Accounts" },
                { time: "07:30 AM", task: "Commerce: Management" },
                { time: "05:30 PM", task: "Economics: National Income" },
                { time: "08:30 PM", task: "Computer App / BM" }
            ],
            tasks: [
                { id: 1211, title: "Solve Share Forfeiture", quiz: { q: "Share premium is shown in?", options: ["Asset", "Liability", "Expense", "Income"], correct: 1 } },
                { id: 1212, title: "Read Principles of Mgmt", quiz: { q: "Father of Scientific Mgmt?", options: ["Fayol", "Taylor", "Drucker", "Keynes"], correct: 1 } }
            ]
        },
        "statistics": {
            focus: "Stats: Testing of Hypothesis",
            schedule: [
                { time: "05:00 AM", task: "Statistics: T-Test" },
                { time: "07:00 AM", task: "Maths: Integration" },
                { time: "06:00 PM", task: "Economics" },
                { time: "09:00 PM", task: "Revision" }
            ],
            tasks: [
                { id: 1221, title: "Solve Null Hypothesis", quiz: { q: "Type I error is?", options: ["Rejecting True Null", "Accepting False Null", "Correct Decision", "None"], correct: 0 } }
            ]
        }
    }
};

// --- State ---
let userProfile = {
    name: "",
    grade: "",
    stream: ""
};
let completedTasks = new Set();
let activeQuizTask = null;
let selectedOptionIndex = null;

// --- DOM Elements ---
const regModal = document.getElementById('registrationModal');
const regForm = document.getElementById('regForm');
const regGrade = document.getElementById('regGrade');
const streamSection = document.getElementById('streamSection');
const welcomeMsg = document.getElementById('welcomeMsg');
const logoutBtn = document.getElementById('logoutBtn');
const dailyTopicEl = document.getElementById('dailyTopic');
const focusTitleEl = document.getElementById('focusTitle');

const scheduleListEl = document.getElementById('scheduleList');
const taskListEl = document.getElementById('taskList');
const currentDateEl = document.getElementById('currentDate');
const progressBarEl = document.getElementById('progressBar');
const progressTextEl = document.getElementById('progressText');
const notifyBtn = document.getElementById('notifyBtn');

// Quiz Elements
const quizModal = document.getElementById('quizModal');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const submitQuizBtn = document.getElementById('submitQuiz');
const quizFeedback = document.getElementById('quizFeedback');
const closeModalBtn = document.getElementById('closeModal');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    checkLogin();
    setupEventListeners();
    setupNotifications();
});

function updateDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    currentDateEl.innerText = today.toLocaleDateString('en-US', options);
}

// --- Auth / Reg Logic ---
function checkLogin() {
    const saved = localStorage.getItem('examAppUser');
    if (saved) {
        userProfile = JSON.parse(saved);
        regModal.classList.remove('active');
        loadDashboard();
    } else {
        regModal.classList.add('active'); // Ensure it's open
    }
}

function handleRegistration(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const grade = document.getElementById('regGrade').value;
    let stream = "common";
    if (grade === "11" || grade === "12") {
        stream = document.getElementById('regStream').value;
        if (!stream) {
            alert("Please select a stream!");
            return;
        }
    }

    userProfile = { name, grade, stream };
    localStorage.setItem('examAppUser', JSON.stringify(userProfile));
    regModal.classList.remove('active');
    loadDashboard();
}

function handleLogout() {
    if (confirm("Switch user profile? This will clear current progress.")) {
        localStorage.removeItem('examAppUser');
        completedTasks.clear();
        location.reload();
    }
}

// --- Dashboard Logic ---
function loadDashboard() {
    welcomeMsg.innerText = `Hi, ${userProfile.name} (Class ${userProfile.grade})`;

    // Get Data safely
    let gradeData = db[userProfile.grade];
    if (!gradeData) return; // Error handling

    let streamData = gradeData[userProfile.stream] || gradeData["common"];
    if (!streamData) return;

    // Load Focus
    dailyTopicEl.innerText = streamData.focus;
    dailyTopicEl.parentElement.classList.add('pulse'); // Re-trigger animation

    // Load Schedule
    renderSchedule(streamData.schedule);

    // Load Tasks
    renderTasks(streamData.tasks);
}

function renderSchedule(schedule) {
    scheduleListEl.innerHTML = '';
    schedule.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.style.animationDelay = `${index * 0.1}s`;
        div.innerHTML = `
            <div class="time-slot">${item.time}</div>
            <div class="activity-info">
                <h4>${item.task}</h4>
                <p>Status: Pending</p>
            </div>
        `;
        scheduleListEl.appendChild(div);
    });
}

function renderTasks(tasks) {
    taskListEl.innerHTML = '';
    tasks.forEach((task) => {
        const isCompleted = completedTasks.has(task.id);
        const li = document.createElement('li');
        li.className = `task-item ${isCompleted ? 'completed' : ''}`;
        li.innerHTML = `
            <div class="task-checkbox"><i class="fa-solid fa-check" style="display: ${isCompleted ? 'block' : 'none'}; color: white; font-size: 10px;"></i></div>
            <span>${task.title}</span>
        `;

        li.addEventListener('click', () => {
            if (!isCompleted) {
                openQuizModal(task);
            }
        });
        taskListEl.appendChild(li);
    });
    updateProgress(tasks.length);
}

function updateProgress(total) {
    const completedCount = completedTasks.size;
    const percent = total === 0 ? 0 : Math.round((completedCount / total) * 100);
    progressBarEl.style.width = `${percent}%`;
    progressTextEl.innerText = `${percent}%`;
}

// --- Event Listeners ---
function setupEventListeners() {
    regForm.addEventListener('submit', handleRegistration);

    regGrade.addEventListener('change', (e) => {
        if (e.target.value === "11" || e.target.value === "12") {
            streamSection.style.display = 'block';
            document.getElementById('regStream').required = true;
        } else {
            streamSection.style.display = 'none';
            document.getElementById('regStream').required = false;
        }
    });

    logoutBtn.addEventListener('click', handleLogout);
    closeModalBtn.addEventListener('click', closeQuizModal);
    submitQuizBtn.addEventListener('click', evaluateQuiz);
    notifyBtn.addEventListener('click', requestNotificationPermission);
}

// --- Quiz Logic (Reused) ---
function openQuizModal(task) {
    activeQuizTask = task;
    selectedOptionIndex = null;
    quizQuestion.innerText = task.quiz.q;
    quizOptions.innerHTML = '';
    quizFeedback.innerText = '';
    submitQuizBtn.disabled = false;

    task.quiz.options.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedOptionIndex = idx;
        });
        quizOptions.appendChild(btn);
    });

    quizModal.classList.add('active');
}

function closeQuizModal() {
    quizModal.classList.remove('active');
    activeQuizTask = null;
}

function evaluateQuiz() {
    if (selectedOptionIndex === null || !activeQuizTask) {
        quizFeedback.innerText = "Please select an answer!";
        quizFeedback.className = "error-msg";
        return;
    }

    if (selectedOptionIndex === activeQuizTask.quiz.correct) {
        document.querySelectorAll('.option-btn')[selectedOptionIndex].classList.add('correct');
        quizFeedback.innerText = "Correct! Task Completed.";
        quizFeedback.className = "success-msg";
        submitQuizBtn.disabled = true;
        completedTasks.add(activeQuizTask.id);
        setTimeout(() => {
            closeQuizModal();
            // Re-render to show checkmark
            // Optimization: Just update DOM instead of full re-render
            loadDashboard();
        }, 1000);
    } else {
        document.querySelectorAll('.option-btn')[selectedOptionIndex].classList.add('wrong');
        quizFeedback.innerText = "Incorrect. Try again!";
        quizFeedback.className = "error-msg";
    }
}

// --- Notifications (Reused) ---
function requestNotificationPermission() {
    if (!("Notification" in window)) {
        alert("Not supported");
        return;
    }
    Notification.requestPermission().then(p => {
        if (p === 'granted') notifyBtn.innerText = "Notifications Enabled ✅";
    });
}

function setupNotifications() {
    setInterval(() => {
        if (Notification.permission !== 'granted' || !userProfile.grade) return;

        const now = new Date();
        const formattedTime = formatTime(now);

        // Find current schedule
        let gData = db[userProfile.grade];
        if (!gData) return;
        let sData = gData[userProfile.stream] || gData["common"];
        if (!sData) return;

        sData.schedule.forEach(item => {
            if (item.time === formattedTime) {
                new Notification(`Time for: ${item.task}`);
            }
        });
    }, 60000);
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours < 10 ? '0' + hours : hours}:${minutes} ${ampm}`;
}
