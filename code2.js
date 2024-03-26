

const chars = "abcdefghijklmnopqrstuvwxyz1234567890";

const passwordLength = 12 + Math.floor(Math.random() * 5);

let password = "";
for (let i = 0; i < passwordLength-2; i++) {
  const randomIndex = 12 + Math.floor(Math.random() * chars.length - 11);
  password += chars.charAt(randomIndex);
}
for (let i = passwordLength-2; i < passwordLength; i++) {
  const randomIndex = 12 + Math.floor(Math.random() * 11);
  password += chars.charAt(randomIndex);
}
console.log('Generated password:', password);

const input = document.getElementById("password");
const input2 = document.getElementById("button");

let incorrectAttempts = 0;

input2.addEventListener("click", function () {
  const guess = input.value;
  if (guess === password) {
    document.getElementById("password").style.backgroundColor = "green";

  } else {
    incorrectAttempts++;
    document.getElementById("password").style.backgroundColor = "red";
  }
});

input.addEventListener("click", function () {
  document.getElementById("password").style.backgroundColor = "white";
});
