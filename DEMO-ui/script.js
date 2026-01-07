let token = null;

/* LOGIN */
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.token) {
    token = data.token;
    document.getElementById("output").textContent =
      "✅ Login successful";
  } else {
    document.getElementById("output").textContent =
      "❌ Login failed";
  }
}

/* ASK QUESTION */
async function ask() {
  if (!token) {
    alert("Please login first");
    return;
  }

  const question = document.getElementById("question").value;

  const res = await fetch("http://localhost:5000/api/chat/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({ question })
  });

  const data = await res.json();

  document.getElementById("output").textContent =
    "Bot: " + data.response + "\nSeverity: " + data.severity;
}
