const checkInputLength = document.querySelector('[data-length="6"]');

 

checkInputLength.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length <= 6) {
        checkInputLength.classList.add('valid');
    } else {
        checkInputLength.classList.add('invalid');
    }
});

