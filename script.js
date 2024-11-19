// Initial Timetable Data
const timetableData = [
  {
    time: "9:00 AM - 10:00 AM",
    monday: "BMATS101 LAB (BPLCK105B)",
    tuesday: "LEC (BPLCK105B)",
    wednesday: "APPLE PRAC (BMATS101)",
    thursday: "MATHS (BCHES102)",
    friday: "Lec",
  },
  {
    time: "10:00 AM - 11:00 AM",
    monday: "BMATS101 LAB",
    tuesday: "BMATS101 LEC (BPLCK105B)",
    wednesday: "APPLE PRAC (BESCK104B)",
    thursday: "Elec",
    friday: "",
  },
  {
    time: "11:15 AM - 12:15 PM",
    monday: "BCEDK158 CAED (BICOK107)",
    tuesday: "CONSTI LEC (BPLCK105B)",
    wednesday: "Python Lec (BCEDK103)",
    thursday: "CAED (BCHES102)",
    friday: "PRAC",
  },
  {
    time: "12:15 PM - 1:15 PM",
    monday: "BCEDK158 CAED",
    tuesday: "English (BCHES102)",
    wednesday: "Chem Lec (BCEDK103)",
    thursday: "CAED (BCHES102)",
    friday: "PRAC",
  },
];

// Function to render timetable
function renderTimetable() {
  const timetableBody = document.getElementById("timetable");
  timetableBody.innerHTML = ""; // Clear previous data

  timetableData.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="time-slot">${row.time}</td>
      <td contenteditable="true" class="editable-cell" data-index="${index}" data-day="monday">${row.monday}</td>
      <td contenteditable="true" class="editable-cell" data-index="${index}" data-day="tuesday">${row.tuesday}</td>
      <td contenteditable="true" class="editable-cell" data-index="${index}" data-day="wednesday">${row.wednesday}</td>
      <td contenteditable="true" class="editable-cell" data-index="${index}" data-day="thursday">${row.thursday}</td>
      <td contenteditable="true" class="editable-cell" data-index="${index}" data-day="friday">${row.friday}</td>
    `;
    timetableBody.appendChild(tr);
  });
}

// Function to save changes to the timetable
function saveTimetable() {
  const editableCells = document.querySelectorAll(".editable-cell");
  editableCells.forEach((cell) => {
    const rowIndex = cell.getAttribute("data-index");
    const day = cell.getAttribute("data-day");
    timetableData[rowIndex][day] = cell.textContent.trim();
  });
  alert("Timetable saved successfully!");
}

// Render the timetable on page load
document.addEventListener("DOMContentLoaded", () => {
  renderTimetable();

  // Save button functionality
  document.getElementById("saveButton").addEventListener("click", saveTimetable);
});
