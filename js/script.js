// Get visitor's name
const visitorName = prompt("Please enter your name:");
const nameElement = document.getElementById("visitorName");
if (nameElement) {
  nameElement.textContent = visitorName || "there";
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
