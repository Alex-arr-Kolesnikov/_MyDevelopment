let header_phone = document.querySelector('.header__actions-phone');
header_phone.addEventListener("click", function (e) {
    let header_tel = document.querySelector('.header__actions-tel');
    header_tel.classList.toggle('_active');
});