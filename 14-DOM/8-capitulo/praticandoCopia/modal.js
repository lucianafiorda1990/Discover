const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

const bodyColor = document.querySelector('.h-screen')

buttonOpenModal.onclick = function () {
    modalWrapper
        .classList
        .remove('invisible')
    bodyColor.style.backgroundColor = 'gray'
}

document.addEventListener('keydown', function (event) {
    const isEscKey = event.key === 'Escape'

    if (isEscKey) {
        modalWrapper.classList.add('invisible')
        bodyColor.style.backgroundColor = 'white'
    }
})