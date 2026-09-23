var students = [
    { id: "ST-1001", name: "Ali Khan", batch: 2026, email: "ali@gmail.com" },
    { id: "ST-1002", name: "Ahmed Raza", batch: 2025, email: "ahmed@gmail.com" },
    { id: "ST-1003", name: "Sara Ahmed", batch: 2024, email: "sara@gmail.com" },
    { id: "ST-1004", name: "Hamza Ali", batch: 2026, email: "hamza@gmail.com" },
    { id: "ST-1005", name: "Zain Malik", batch: 2025, email: "zain@gmail.com" },
    { id: "ST-1006", name: "Usman Khan", batch: 2024, email: "usman@gmail.com" },
    { id: "ST-1007", name: "Ayesha Noor", batch: 2026, email: "ayesha@gmail.com" },
    { id: "ST-1008", name: "Fatima Ali", batch: 2025, email: "fatima@gmail.com" }
];

var studentId = new URLSearchParams(window.location.search).get("id") || "ST-1001";
var selectedStudent = students.find(function (student) {
    return student.id === studentId;
}) || students[0];

document.getElementById("studentName").textContent = selectedStudent.name;
document.getElementById("studentId").textContent = selectedStudent.id;
document.getElementById("studentBatch").textContent = selectedStudent.batch;
document.getElementById("studentEmail").textContent = selectedStudent.email;
document.getElementById("editStudentName").value = selectedStudent.name;
document.getElementById("editStudentEmail").value = selectedStudent.email;