let students = [];

const studentName = document.getElementById("studentName");
const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");
const searchInput = document.getElementById("searchInput");
const themeBtn = document.getElementById("themeBtn");

const charCount = document.getElementById("charCount");

let studentId = 0;

// Add Student Function
function addStudent() {
  let name = studentName.value.trim();

  if (name === "") {
    alert("Please enter student name!");
    return;
  }

  let student = {
    id: ++studentId,
    name: name,
    status: "Absent",
  };

  students.push(student);

  studentName.value = "";

  charCount.innerText = "Characters: 0";

  displayStudents();
}

// Display Students
function displayStudents(searchText = "") {
  studentList.innerHTML = "";

  let filteredStudents = students.filter(function (student) {
    return student.name.toLowerCase().includes(searchText.toLowerCase());
  });

  filteredStudents.forEach(function (student) {
    let li = document.createElement("li");

    li.className = "student";

    li.innerHTML = `
            <span class="student-name">${student.name}</span>

            <div>
                <button class="present">Present</button>
                <button class="absent">Absent</button>
                <button class="delete">Delete</button>
            </div>
        `;

    // Double Click Event
    let nameElement = li.querySelector(".student-name");

    nameElement.addEventListener("dblclick", function () {
      nameElement.classList.toggle("highlight");
    });

    // Present Event
    li.querySelector(".present").addEventListener("click", function () {
      student.status = "Present";
      displayStudents(searchInput.value);
    });

    // Absent Event
    li.querySelector(".absent").addEventListener("click", function () {
      student.status = "Absent";
      displayStudents(searchInput.value);
    });

    // Delete Event
    li.querySelector(".delete").addEventListener("click", function () {
      students = students.filter(function (item) {
        return item.id !== student.id;
      });

      displayStudents(searchInput.value);
    });

    // Show Status
    let statusText = document.createElement("small");
    statusText.innerText = "Status: " + student.status;

    li.insertBefore(statusText, li.querySelector("div"));

    studentList.appendChild(li);
  });

  updateStats();
}

// Update Statistics
function updateStats() {
  document.getElementById("totalCount").innerText = students.length;

  let present = students.filter(function (student) {
    return student.status === "Present";
  }).length;

  let absent = students.filter(function (student) {
    return student.status === "Absent";
  }).length;

  document.getElementById("presentCount").innerText = present;

  document.getElementById("absentCount").innerText = absent;
}

// Click Event
addBtn.addEventListener("click", addStudent);

// Keyboard Event
studentName.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addStudent();
  }
});

// Input Event - Character Counter
studentName.addEventListener("input", function () {
  charCount.innerText = "Characters: " + studentName.value.length;
});

// Search Event
searchInput.addEventListener("input", function () {
  displayStudents(searchInput.value);
});

// Dark Mode Event
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.innerText = "Light Mode";
  } else {
    themeBtn.innerText = "Dark Mode";
  }
});
