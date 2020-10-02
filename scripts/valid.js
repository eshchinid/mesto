function inputTextShowError(formElement, inputElement, errorMessage, allClasses) {
  const inputErrorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(allClasses.inputErrorClass);
  inputErrorText.textContent = errorMessage;
  inputErrorText.classList.add(allClasses.errorClass);
};

function isValid(formElement, inputElement, allClasses) {
  if (!inputElement.validity.valid) {
    inputTextShowError(formElement, inputElement, inputElement.validationMessage, allClasses);
  } else {
    inputTextHideError(formElement, inputElement, allClasses);
  };
};

function invalidInput(inputList) {
  return inputList.some(function(inputElement) {
    return !inputElement.validity.valid;
  });
};

function disableButton(buttonElement, allClasses) {
  buttonElement.classList.add(allClasses.inactiveButtonClass);
  buttonElement.setAttribute("disabled", "true");
};

function inputTextHideError(formElement, inputElement, allClasses) {
  const inputErrorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(allClasses.inputErrorClass);
  inputErrorText.classList.remove(allClasses.errorClass);
  inputErrorText.textContent = "";
};

function disableError() {
  const errors = Array.from(document.querySelectorAll(".modal__input_error"));
  const inputs = Array.from(document.querySelectorAll(".modal__input"));
  errors.forEach(function(error) {
    error.textContent = "";
  });
  inputs.forEach(function(input) {
    input.classList.remove("modal__input_type_error");
  });
};

function toggleStateButton(inputList, buttonElement, allClasses) {
  if (invalidInput(inputList)) {
    disableButton(buttonElement, allClasses);
  } else {
    buttonElement.classList.remove(allClasses.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  };
};

function setEventListeners(formElement, allClasses) {
  const inputList = Array.from(formElement.querySelectorAll(allClasses.inputSelector));
  const buttonElement = formElement.querySelector(allClasses.submitButtonSelector);
  toggleStateButton(inputList, buttonElement, allClasses);
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener("input", function() {
      isValid(formElement, inputElement, allClasses);
      toggleStateButton(inputList, buttonElement, allClasses);
    });
  });
};

function enableTextValidation(allClasses) {
  const formList = Array.from(document.querySelectorAll(allClasses.formSelector));
  formList.forEach(function(formElement) {
    const buttonElement = formElement.querySelector(allClasses.submitButtonSelector);
    formElement.addEventListener("submit", function(evt) {
      evt.preventDefault();
      disableButton(buttonElement, allClasses);
    });
    setEventListeners(formElement, allClasses);
  });
};

enableTextValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input_error_active"
});
