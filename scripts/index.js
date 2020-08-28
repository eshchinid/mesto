const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const userProfileModal = document.querySelector('.modal_profile');
const userName = document.querySelector('.profile__name');
const userRole = document.querySelector('.profile__role');
const userNameInput = document.querySelector('.modal_profile__name');
const userRoleInput = document.querySelector('.modal_profile__role');
const saveProfileButton = document.querySelector('.modal_profile__form');
const closeUserProfileModalButton = document.querySelector('.modal_profile__close-icon');

const userCardModal = document.querySelector('.modal_card');
const imageModal = document.querySelector('.modal_photo');
const closeAddCardModalButton = document.querySelector('.modal_card__close-icon');
const closeImageModalButton = document.querySelector('.modal_photo__close');
const saveCardButton = document.querySelector('.modal_card__form');
const cardNameInput = document.querySelector('.modal_card__title');
const cardLinkInput = document.querySelector('.modal_card__src');
const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.elements__table');


// открытие модальных окон

function toggleModal(modal) {
    modal.classList.toggle('modal_opened')
}

//работа с профилем

function saveProfile(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userRole.textContent = userRoleInput.value;
    toggleModal(userProfileModal);
}

function toggleProfileModal() {
    userNameInput.value = userName.textContent;
    userRoleInput.value = userRole.textContent;
    toggleModal(userProfileModal);
}


//работа с карточками
//работа с модальным окном "добавление фото"
initialCards.forEach(function (item) {
    addCard(createCard(item.name, item.link));
});

function toggleAddCardModal() {
    toggleModal(userCardModal);
    cardNameInput.value = '';
    cardLinkInput.value = '';
}

function saveCard(evt) {
    evt.preventDefault();
    addCard(createCard(cardNameInput.value, cardLinkInput.value));
    toggleModal(userCardModal);
}

function addCard(card) {
    cards.prepend(card);
}

function toggleImageModal(evt, cardTitle) {
    document.querySelector('.modal_photo__img').src = evt.src;
    document.querySelector('.modal_photo__title').textContent = cardTitle;
    toggleModal(imageModal);
}

function createCard(cardName, cardLink) {
    const card = cardTemplate.cloneNode(true);
    const imgElement = card.querySelector('.element__img');
    const nameElement = card.querySelector('.element__name');
    const delButton = card.querySelector('.element__del');
    const likeButton = card.querySelector('.element__like');

    imgElement.src = cardLink;
    nameElement.textContent = cardName;

    imgElement.addEventListener('click', function (evt) {
        const event = evt.target;
        toggleImageModal(event, nameElement.textContent);
    });
    likeButton.addEventListener('click', function () {
        likeButton.classList.toggle('element__like_active');
    });
    delButton.addEventListener('click', function () {
        const delCard = delButton.closest('.element');
        delCard.remove();
    });
    return card;
}


editProfileButton.addEventListener('click', toggleProfileModal);
addCardButton.addEventListener('click', toggleAddCardModal);
saveProfileButton.addEventListener('submit', saveProfile);
saveCardButton.addEventListener('submit', saveCard);
closeAddCardModalButton.addEventListener('click', function () {
    toggleModal(userCardModal)
});
closeUserProfileModalButton.addEventListener('click', function () {
    toggleModal(userProfileModal)
});
closeImageModalButton.addEventListener('click', function () {
    toggleModal(imageModal)
});