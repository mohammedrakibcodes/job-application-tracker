// All Job data =>

let jobList = [
  {
    id: 1,
    companyName: "Tech nova Solutions",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$1200/month",
    description: "Build responsive UI using modern JavaScript frameworks.",
    status: "all",
  },
  {
    id: 2,
    companyName: "Cloud sync Ltd",
    position: "Backend Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "$1500/month",
    description: "Develop REST APIs and manage server architecture.",
    status: "all",
  },
  {
    id: 3,
    companyName: "Pixel craft Studio",
    position: "UI Designer",
    location: "Remote",
    type: "Contract",
    salary: "$900/month",
    description: "Design user interfaces for web applications.",
    status: "all",
  },
  {
    id: 4,
    companyName: "Secure net Systems",
    position: "Cyber Security Analyst",
    location: "Chittagong",
    type: "Full-time",
    salary: "$1800/month",
    description: "Monitor and secure enterprise network systems.",
    status: "all",
  },
  {
    id: 5,
    companyName: "Data mind AI",
    position: "Machine Learning Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$2000/month",
    description: "Develop AI models and improve prediction systems.",
    status: "all",
  },
  {
    id: 6,
    companyName: "Bright app studio",
    position: "Mobile App Developer",
    location: "Sylhet",
    type: "Full-time",
    salary: "$1300/month",
    description: "Build Android and iOS applications.",
    status: "all",
  },
  {
    id: 7,
    companyName: "Web core Agency",
    position: "WordPress Developer",
    location: "Remote",
    type: "Freelance",
    salary: "$800/month",
    description: "Develop and maintain WordPress websites.",
    status: "all",
  },
  {
    id: 8,
    companyName: "Fine Corp",
    position: "Software Engineer",
    location: "Dhaka",
    type: "Full-time",
    salary: "$1700/month",
    description: "Maintain scalable financial software systems.",
    status: "all",
  },
];

//============= Dom things-->

let jobContainer = document.getElementById("jobsContainer");

let totalCountBox = document.getElementById("totalCount");
let interviewCountBox = document.getElementById("interviewCount");
let rejectedCountBox = document.getElementById("rejectedCount");

let allBtn = document.getElementById("allTab");
let interviewBtn = document.getElementById("interviewTab");
let rejectedBtn = document.getElementById("rejectedTab");

let jobCountText = document.getElementById("jobCount");

let currentTab = "all";

function showJobs() {
  jobContainer.innerHTML = "";

  let jobsToShow = jobList;

  if (currentTab !== "all") {
    jobsToShow = jobList.filter(function (job) {
      return job.status === currentTab;
    });
  }

  if (jobsToShow.length === 0) {
    jobContainer.innerHTML = `
      <div class="text-center py-20">
        <h3 class="text-xl font-semibold text-blue-900 mb-2">
          No jobs available
        </h3>
        <p class="text-gray-500 text-sm">
          Try another tab
        </p>
      </div>
    `;

    jobCountText.innerText = "0 Jobs";
    updateDashboard();
    return;
  }

  jobContainer.className = "space-y-6";

  jobsToShow.forEach(function (job) {
    let card = document.createElement("div");

    card.className =
      "bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-3";

    card.innerHTML = `
      <h3 class="text-base font-semibold text-gray-900">
        ${job.companyName}
      </h3>

      <p class="text-sm text-gray-600">
        ${job.position}
      </p>

      <p class="text-sm text-gray-500">
        ${job.location} • ${job.type} • ${job.salary}
      </p>

      <p class="text-sm text-gray-500">
        ${job.description}
      </p>

      <div class="flex gap-3 pt-2">
        <button data-id="${job.id}" data-type="interview"
          class="px-4 py-1 border border-green-500 text-green-600 rounded-md text-xs">
          Interview
        </button>

        <button data-id="${job.id}" data-type="rejected"
          class="px-4 py-1 border border-red-500 text-red-600 rounded-md text-xs">
          Rejected
        </button>

        <button data-id="${job.id}" data-type="delete"
          class="px-4 py-1 border border-gray-400 text-gray-600 rounded-md text-xs">
          Delete
        </button>
      </div>
    `;

    jobContainer.appendChild(card);
  });

  jobCountText.innerText = jobsToShow.length + " Jobs";
  updateDashboard();
}

//=>

jobContainer.addEventListener("click", function (event) {
  let btn = event.target;

  if (btn.tagName !== "BUTTON") return;

  let id = btn.getAttribute("data-id");
  let type = btn.getAttribute("data-type");

  if (type === "delete") {
    jobList = removeJobById(jobList, id);
    showJobs();
    return;
  }

  let job = findJobById(jobList, id);

  if (job) {
    job.status = type;
  }

  showJobs();
});

//=> Counter

function updateDashboard() {
  totalCountBox.innerText = jobList.length;
  interviewCountBox.innerText = countInterview(jobList);
  rejectedCountBox.innerText = countRejected(jobList);
}

//>Btn-works-logic
allBtn.addEventListener("click", function () {
  currentTab = "all";
  showJobs();
});

interviewBtn.addEventListener("click", function () {
  currentTab = "interview";
  showJobs();
});

rejectedBtn.addEventListener("click", function () {
  currentTab = "rejected";
  showJobs();
});

showJobs();
