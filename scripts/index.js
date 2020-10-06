const editButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const modalEdit = document.querySelector(".modal_edit");
const closeImageButton = document.querySelector(".modal__close-button_image");
const closeEditButton = document.querySelector(".modal__close-button_edit");
const closeAddButton = document.querySelector(".modal__close-button_add");
const modalEnterName = document.querySelector(".modal__input_name");
const modalEnterJob = document.querySelector(".modal__input_job");
const modalEditForm = document.querySelector(".modal__form_edit");
const modalAdd = document.querySelector(".modal_add-card");
const modalAddForm = document.querySelector(".modal__form_add-card");
const listElements = document.querySelector(".elements");
const modalFullImage = document.querySelector(".modal_full-image");
const addButton = document.querySelector(".add-button");
const inputTitle = document.querySelector(".modal__input_title");
const inputSrc = document.querySelector(".modal__input_src");
const fullImageSrc = document.querySelector(".modal__card-image");
const fullImageAlt = document.querySelector(".modal__card-image");
const fullImageTitle = document.querySelector(".modal__card-title");
const cardTemplate = document.querySelector("#card").content;



function openModal(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("click", closeOverlay);
  document.addEventListener("keyup", closeEscape);
};

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("click", closeOverlay);
  document.removeEventListener("keyup", closeEscape);
  disableError(allClasses);
};

// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   modal.addEventListener("click", closeOverlay.bind(null, modal));
//   document.addEventListener("keyup", closeEscape.bind(null, modal));
// };
//
// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   modal.removeEventListener("click", closeOverlay.bind(null, modal));
//   document.removeEventListener("keyup", closeEscape.bind(null, modal));
//   disableError(allClasses);
// };
// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   modal.addEventListener("click", function(evt) {
//     closeOverlay(evt, modal);
//   });
//   document.addEventListener("keyup", function(evt) {
//     closeEscape(evt, modal);
//   });
// };
//
// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   modal.removeEventListener("click", function(evt) {
//     closeOverlay(evt, modal);
//   });
//   document.removeEventListener("keyup", function(evt) {
//     closeEscape(evt, modal);
//   });
//   disableError();
// };


initialCards.forEach(function(item) {
  addCard(listElements, createCard(item.name, item.link));
});


function closeEscape (evt) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    const modal = document.querySelector(".modal_opened");
    closeModal(modal);
  };
};

function closeOverlay(evt) {
  if (evt.target.classList.contains("modal")) {
    closeModal(evt.target);
  };
};


function changeProfileData(evt) {
  evt.preventDefault();
  const name = modalEnterName.value;
  const role = modalEnterJob.value;
  profileName.textContent = name;
  profileJob.textContent = role;
  closeModal(modalEdit);
};


function createCard(title, src) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");

  cardElement.querySelector(".element__title").textContent = title;
  cardImage.src = src;
  cardImage.alt = title;
  cardImage.addEventListener("click", function(evt) {
    fullImageTitle.textContent = title;
    fullImageSrc.src = src;
    fullImageAlt.alt = title;

    openModal(modalFullImage);
  });
  cardElement.querySelector(".element__like").addEventListener("click", function(evt) {
    evt.target.classList.toggle("element__like_active");
  });
  cardElement.querySelector(".element__delete-button").addEventListener("click", function(evt) {
    const element = evt.target.closest(".element");
    element.remove();
  });
  return cardElement;
};

function addCard(container, element) {
  container.prepend(element);
};



editButton.addEventListener("click", function() {
  modalEnterName.value = profileName.textContent;
  modalEnterJob.value = profileJob.textContent;

  openModal(modalEdit);
});

closeEditButton.addEventListener("click", function() {closeModal(modalEdit);});

addButton.addEventListener("click", function() {
  modalAddForm.reset();

  openModal(modalAdd);
});

closeAddButton.addEventListener("click", function(){closeModal(modalAdd)});

modalEditForm.addEventListener("submit", changeProfileData);

modalAddForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  addCard(listElements, createCard(inputTitle.value, inputSrc.value));
  closeModal(modalAdd);
});

closeImageButton.addEventListener("click", function(){closeModal(modalFullImage)});
