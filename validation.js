const email = document.getElementById("email");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  if (
    email.value === "" ||
    !email.value.includes("@") ||
    !email.value.includes(".com")
  ) {
    error.style.display = "block";
    email.style.border = "1.3px solid red";
    error.innerText = "Please provide a valid email address";
    e.preventDefault();
  } else {
    error.style.display = "block";
    error.innerText = "Thanks for subscribing";
    error.style.color = "skyblue";
  }
});

// example@email/com
