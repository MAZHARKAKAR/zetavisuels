const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});

const form = document.getElementById('myForm');
        const confirmationMessage = document.getElementById('confirmation-message');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Submit the form using Fetch API
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show confirmation message
                    form.style.display = 'none';
                    confirmationMessage.style.display = 'block';
                    form.reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });