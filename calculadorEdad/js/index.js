function calculateAge() {
    let name = document.getElementById("name").value;
    let birthdate = new Date(document.getElementById("birthdate").value);

    if (isNaN(birthdate.getTime())) {
        alert("Please enter a valid birthdate.");
        return;
    }

    let today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();

    if (today < new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate())) {
        age--;
    }

    const ageYears = age;
    const totalMonths = ageYears * 12;
    const daysFromMonths = Math.floor(totalMonths * 30.44);

    let result = document.getElementById("result");
    result.textContent = name + ", you are " + age + " years old (" + totalMonths + " months ≈ " + daysFromMonths + " days).";
}

