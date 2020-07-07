const openModalButton = document.querySelector(".profile__btn-edit");
const editModalWindow = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__close");
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');
const editProfileName = document.querySelector('.modal__input_name');
const editProfileRole = document.querySelector('.modal__input_role');
const modalSave = document.querySelector('.modal__form');


function toggleModal() {
    editModalWindow.classList.toggle("modal__opened");
}

function saveInfo(event) {
    event.preventDefault();
    profileName.textContent = editProfileName.value;
    profileRole.textContent = editProfileRole.value;
    toggleModal()
}

function openModal() {
    toggleModal();
    editProfileName.value = profileName.textContent;
    editProfileRole.value = profileRole.textContent;
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", toggleModal);
modalSave.addEventListener('submit', saveInfo);




