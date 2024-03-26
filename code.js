const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>/?";

const passwordLength = 12 + Math.floor(Math.random() * 6); // Using Math.random() to generate a random length

let password = "";
for (let i = 0; i < passwordLength; i++) {
  const randomIndex = Math.floor(Math.random() * chars.length);
  password += chars.charAt(randomIndex);
}

const sha256 = str => { // Custom SHA256 function
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return hash.toString(16); // Convert to hexadecimal string
};

let hashedPassword = sha256(password); // Hash the password using custom function

const input = document.getElementById("password");
const input2 = document.getElementById("button");

let incorrectAttempts = 0;

input2.addEventListener("click", function () {
  const guess = sha256(input.value); // Hash the guessed password using custom function

  if (guess === hashedPassword) {
    incorrectAttempts = 0;
    const newPasswordLength = 12 + Math.floor(Math.random() * 6); // Generate a new random length
    let newPassword = "";
    document.getElementById("password").style.backgroundColor = "green";
    for (let i = 0; i < newPasswordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars.charAt(randomIndex);
    }

    hashedPassword = sha256(newPassword); // Hash the new password using custom function

  } else {
    incorrectAttempts++;
    if (incorrectAttempts >= 5) {
      alert("Too many failed attempts. Please try again later.");
      return;
    }
    document.getElementById("password").style.backgroundColor = "red";
  }
});

input.addEventListener("click", function () {
  document.getElementById("password").style.backgroundColor = "grey";
});
