const reservationForm = document.querySelector(".reservation-form");

const dateInput = document.querySelector("#date");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const currentDate = `${year}-${month}-${day}`;

dateInput.min = currentDate;

const timeInput = document.querySelector("#time");

timeInput.min = "10:00";
timeInput.max = "22:00";


reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const email = document.querySelector("#email").value.trim();
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const message = document.querySelector("#message").value.trim();


    if (name === "") {
        alert("Please enter your name.");
        return;
    }


    if (phone === "") {
        alert("Please enter your contact number.");
        return;
    }
    if (phone.length < 10) {
    alert("Please enter a valid phone number.");
    return;
}


    if (email === "") {
        alert("Please enter your email address.");
        return;
    }


    if (date === "") {
        alert("Please select a reservation date.");
        return;
    }


    if (time === "") {
        alert("Please select a reservation time.");
        return;
    }


    // Check reservation time
    if (time < "10:00" || time > "22:00") {
        alert("Please select a reservation time between 10:00 AM and 10:00 PM.");
        return;
    }


    alert(
        "Reservation Confirmed! ☕\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time + "\n" +
        "Special Request: " + message
    );


    reservationForm.reset();

});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});