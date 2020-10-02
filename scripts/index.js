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
const fullImageTitle = document.querySelector(".modal__card-title");
const cardTemplate = document.querySelector("#card").content;


function modalOpen(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("click", function(evt) {
    closeOverlay(evt, modal);
  });
  document.addEventListener("keyup", function(evt) {
    closeEscape(evt, modal);
  });
};

function modalClose(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("click", function(evt) {
    closeOverlay(evt, modal);
  });
  document.removeEventListener("keyup", function(evt) {
    closeEscape(evt, modal);
  });
  disableError();
};

initialCards.forEach(function(item) {
  addCard(listElements, createCard(item.name, item.link));
});

function closeEscape(evt, modal) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    modalClose(modal);
  };
};

function closeOverlay(evt, modal) {
  if (evt.target.classList.contains("modal")) {
    modalClose(modal);
  };
};

function changeProfileData(evt) {
  evt.preventDefault();
  const name = modalEnterName.value;
  const role = modalEnterJob.value;
  profileName.textContent = name;
  profileJob.textContent = role;
  modalClose(modalEdit);
};

function createCard(title, src) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");

  cardElement.querySelector(".element__title").textContent = title;
  cardImage.src = src;
  cardImage.addEventListener("click", function(evt) {
    fullImageTitle.textContent = title;
    fullImageSrc.src = src;

    modalOpen(modalFullImage);
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

  modalOpen(modalEdit);
});

closeEditButton.addEventListener("click", function() {modalClose(modalEdit);});

addButton.addEventListener("click", function() {
  modalAddForm.reset();

  modalOpen(modalAdd);
});

closeAddButton.addEventListener("click", function(){modalClose(modalAdd)});

modalEditForm.addEventListener("submit", changeProfileData);

modalAddForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  addCard(listElements, createCard(inputTitle.value, inputSrc.value));
  modalClose(modalAdd);
});

closeImageButton.addEventListener("click", function(){modalClose(modalFullImage)});
