// Check if user is logged in
function checkLogin() {
  const username = localStorage.getItem("username");
  if (!username && window.location.pathname !== "/login.html") {
    window.location.href = "login.html";
  }
  return username;
}

// Handle login form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;

    // Simple validation - in real world, you'd want proper authentication
    if (username) {
      localStorage.setItem("username", username);
      window.location.href = "index.html";
    }
  });
}

// Update visitor name if on main page
const nameElement = document.getElementById("visitorName");
if (nameElement) {
  const username = checkLogin();
  nameElement.textContent = username || "there";
}

// Form validation and submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const birthDate = document.getElementById("birthDate").value;
    const gender = document.querySelector(
      'input[name="gender"]:checked'
    )?.value;
    const messages = document.getElementById("messages").value;

    // Validate form
    if (!name || !birthDate || !gender || !messages) {
      alert("Please fill in all fields!");
      return;
    }

    // Update output box
    const outputBox = document.getElementById("outputBox");
    document.getElementById("currentTime").textContent =
      new Date().toLocaleString();
    document.getElementById("outputName").textContent = name;
    document.getElementById("outputBirthDate").textContent = birthDate;
    document.getElementById("outputGender").textContent = gender;
    document.getElementById("outputMessages").textContent = messages;

    // Show output box
    outputBox.style.display = "block";

    // Reset form
    contactForm.reset();
  });
}
