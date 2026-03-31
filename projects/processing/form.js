const form = document.getElementById("myForm");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    if (!name || !email || !age) {
        alert("Please fill in all sections!");
        return;
    }

    if (age < 19 || age > 65) {
        alert("Age must be between 19 and 65");
        return;
    }

    const formData = {
        name: name,
        email: email,
        age: age
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "form.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            document.getElementById("responseMessage").textContent = response.message;

            Form.reset();
            
        }
    };
    xhr.send(JSON.stringify(formData));
}