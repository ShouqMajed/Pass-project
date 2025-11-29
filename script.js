function analyzePassword() {
    let password = document.getElementById("password").value;
    let strengthText = document.getElementById("strength");
    let feedbackText = document.getElementById("feedback");

    let score = 0;
    let feedback = [];

    // Length evaluation
    if (password.length >= 12) {
        score += 2;
    } else if (password.length >= 8) {
        score += 1;
    } else {
        feedback.push("The password must be at least 8 characters long.");
    }

    // Uppercase
    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push("Add an uppercase letter (A-Z).");

    // Lowercase
    if (/[a-z]/.test(password)) score += 1;
    else feedback.push("Add a lowercase letter (a-z).");

    // Numbers
    if (/\d/.test(password)) score += 1;
    else feedback.push("Add a number (0-9).");

    // Special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
    else feedback.push("Add a special character (!@#$%^&*).");

    // Common passwords
    let commonPasswords = ["123456", "password", "qwerty", "12345678"];
    if (commonPasswords.includes(password)) {
        score = 0;
        feedback.push("The password is too common. Please choose a stronger one.");
    }

    // Strength display
    if (score >= 5) {
        strengthText.innerHTML = "🔵 Very Strong";
        strengthText.style.color = "#4caf50";
    } else if (score >= 3) {
        strengthText.innerHTML = "🟡 Medium";
        strengthText.style.color = "#ffeb3b";
    } else {
        strengthText.innerHTML = "🔴 Weak";
        strengthText.style.color = "#f44336";
    }

    // Display feedback
    feedbackText.innerHTML = feedback
        .map(msg => `<span>⚠️ ${msg}</span>`)
        .join("");
}
