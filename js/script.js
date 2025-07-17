function checkLogin() {
  const username = localStorage.getItem("username");
  if (!username && window.location.pathname !== "/login.html") {
    window.location.href = "login.html";
  }
  return username;
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;

    if (username) {
      localStorage.setItem("username", username);
      window.location.href = "index.html";
    }
  });
}

const nameElement = document.getElementById("visitorName");
if (nameElement) {
  const username = checkLogin();
  nameElement.textContent = username || "there";
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birthDate = document.getElementById("birthDate").value;
    const gender = document.querySelector(
      'input[name="gender"]:checked'
    )?.value;
    const messages = document.getElementById("messages").value;

    if (!name || !birthDate || !gender || !messages) {
      alert("Please fill in all fields!");
      return;
    }

    const outputBox = document.getElementById("outputBox");
    document.getElementById("currentTime").textContent =
      new Date().toLocaleString();
    document.getElementById("outputName").textContent = name;
    document.getElementById("outputBirthDate").textContent = birthDate;
    document.getElementById("outputGender").textContent = gender;
    document.getElementById("outputMessages").textContent = messages;

    outputBox.style.display = "block";

    contactForm.reset();
  });
}
