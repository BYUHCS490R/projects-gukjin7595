document.getElementById('myForm').addEventListener('submit',function(event) {
            event.preventDefault();

            const name = document.getElementById('fname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!name || !email) {
                alert('You need a name and email.');
                return
            }
            

            const formData = {
                name: name,
                email: email,
                password: password, 
            };

            console.log(formData);
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "submit.json", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert("Form submitted successfully!")
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                    document.getElementById('myForm').innerHTML = '';
                    document.getElementById('message').innerText = response.message;
                } else if (xhr.readyState === 4) {
                    alert("Error submitting form.")
                }
            };
            xhr.send(JSON.stringify(formData));
        });