document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Example check: user: admin, pass: 1234
  if (username === "admin" && password === "1234") {
    message.innerHTML = "✅ You are successfully logged in!";
    message.style.color = "lightgreen";
  } else {
    message.innerHTML = "❌ Invalid username or password!";
    message.style.color = "red";
  }
});