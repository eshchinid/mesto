const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const userProfileModal = document.querySelector('.modal_profile');
const userName = document.querySelector('.profile__name');
const userRole = document.querySelector('.profile__role');
const userNameInput = document.querySelector('.modal__input_type_name');
const userRoleInput = document.querySelector('.modal__input_type_role');
const saveProfileButton = document.querySelector('.modal_profile__form');

const closeModalProfile = document.querySelector('#profile-close');
const closeModalCard = document.querySelector('#card-close');

const userCardModal = document.querySelector('.modal_card');
const imageModal = document.querySelector('.modal_photo');
const closeImageModalButton = document.querySelector('.modal__close_photo');
const saveCardButton = document.querySelector('.modal_card__form');
const cardNameInput = document.querySelector('.modal__input_type_title');
const cardLinkInput = document.querySelector('.modal__input_type_src');
const cardTemplate = document.querySelector('#card').content;
const cardList = document.querySelector('.elements__table');


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
    addCard(createCard(item.name, item.link, item.alt));
});

function toggleAddCardModal() {
    toggleModal(userCardModal);
    cardNameInput.value = '';
    cardLinkInput.value = '';
}

function addCard(cards) {
    cardList.prepend(cards);
}

function saveCard(evt) {
    addCard(createCard(cardNameInput.value, cardLinkInput.value));
    evt.preventDefault();
    toggleModal(userCardModal);
}


function toggleImageModal(evt, cardTitle) {
    document.querySelector('.modal_photo__img').src = evt.src;
    document.querySelector('.modal_photo__title').textContent = cardTitle;
    document.querySelector('.modal_photo__img').alt = evt.alt;
    toggleModal(imageModal);
}

const handlePreviewPicture = (data) => {
    toggleImageModal(data.event, data.textContent);
};

function handleLikeIcon() {
    this.classList.toggle('element__like_active');
};

function handleDeleteCard() {
    const delCard = this.closest('.element');
    delCard.remove();
};

function createCard(cardName, cardLink, cardAlt) {
    const card = cardTemplate.cloneNode(true);
    const imgElement = card.querySelector('.element__img');
    const nameElement = card.querySelector('.element__name');
    const delButton = card.querySelector('.element__del');
    const likeButton = card.querySelector('.element__like');

    imgElement.src = cardLink;
    nameElement.textContent = cardName;
    imgElement.alt = cardAlt;

    imgElement.addEventListener('click', function (evt) {
        handlePreviewPicture({event: evt.target, textContent: nameElement.textContent})
    });
    likeButton.addEventListener('click', handleLikeIcon);
    delButton.addEventListener('click', handleDeleteCard);
    return card;
}


editProfileButton.addEventListener('click', toggleProfileModal);
addCardButton.addEventListener('click', toggleAddCardModal);
saveProfileButton.addEventListener('submit', saveProfile);
saveCardButton.addEventListener('submit', saveCard);

closeModalCard.addEventListener('click', function () {
    toggleModal(userCardModal);
});

closeModalProfile.addEventListener('click', function () {
    toggleModal(userProfileModal);
});

closeImageModalButton.addEventListener('click', function () {
    toggleModal(imageModal)
});

