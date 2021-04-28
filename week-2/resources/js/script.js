const button = document.querySelector("#button");

button.addEventListener("click", () => {
    const dateInput = document.getElementById("dob").valueAsDate;
    const currentDate = new Date();
    const yearsOld = Number(dateInput.getDate(), dateInput.getMonth()) <= Number(currentDate.getDate(), currentDate.getMonth()) ? Number(currentDate.getFullYear()) - Number(dateInput.getFullYear()) : (Number(currentDate.getFullYear()) - Number(dateInput.getFullYear()) - 1)
    const daysOld = yearsOld * 365;
    alert (`You are ${daysOld} days old!`);
})