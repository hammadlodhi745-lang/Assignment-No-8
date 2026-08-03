let users = [
    "hammadlodhi745@gmail.com"
];

document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let email = document.getElementById("email").value;

    if (users.includes(email)) {
        window.location.href = "dashboard.html";
    } else {
        alert("User not found! Enter correct email");
    }
});