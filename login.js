document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("su");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "user" && password === "web") {
            window.location.href = "profile.html";
        } else {
            alert("Failed login");
        }
    });
});
