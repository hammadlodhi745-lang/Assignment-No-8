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

var studentsContainer = document.getElementById("studentsContainer");

students.forEach(function (student) {
    var column = document.createElement("div");
    column.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    var card = document.createElement("div");
    card.className = "card h-100 shadow";

    var image = document.createElement("img");
    image.src = "jpg.2.jpeg";
    image.className = "card-img-top";
    image.alt = `${student.name} profile picture`;

    var cardBody = document.createElement("div");
    cardBody.className = "card-body text-center";

    var name = document.createElement("h5");
    name.className = "card-title";
    name.textContent = student.name;

    var batch = document.createElement("p");
    batch.className = "card-text";
    batch.textContent = `Batch: ${student.batch}`;

    var profileLink;

    if (student.id === "ST-1001") {
        profileLink = document.createElement("a");
        profileLink.href = "student-profile.html?id=" + student.id;
    } else {
        profileLink = document.createElement("button");
        profileLink.type = "button";
    }

    profileLink.className = "btn btn-primary w-100";
    profileLink.textContent = "View Profile";

    cardBody.append(name, batch, profileLink);
    card.append(image, cardBody);
    column.appendChild(card);
    studentsContainer.appendChild(column);
});