const openModalButton = document.querySelector(".profile__btn-edit");
const editModalWindow = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__close");
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');
const editModalSave = document.querySelector('.modal__save');
const editProfileName = document.querySelector('.modal__input_name');
const editProfileRole = document.querySelector('.modal__input_role');
const editSaveForm = document.querySelector('.modal__content');


function toggleModal() {
    editModalWindow.classList.toggle("modal__opened");
}

function saveInfo(event) {
    event.preventDefault();
    profileName.textContent = editProfileName.value;
    profileRole.textContent = editProfileRole.value;
    toggleModal()
}


openModalButton.addEventListener("click", (event) => {
    event.preventDefault();
    // profileName.value = editProfileName.textContent;
    // profileRole.value = editProfileRole.textContent;
    profileName.textContent = editProfileName.value;
    profileRole.textContent = editProfileRole.value;
    toggleModal()
});

closeModalButton.addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal()
});
editModalSave.addEventListener('click', saveInfo);





