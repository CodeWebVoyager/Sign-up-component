function submitForm(event) {
  let counter = 0;
  event.preventDefault();
  for (let i = 0; i < event.target.elements.length; i++) {
    const elementId = event.target.elements[i].id;
    if (
      event.target.elements[i].type === "text" ||
      event.target.elements[i].type === "password"
    ) {
      const elementValue = event.target.elements[i].value.trim();
      if (!elementValue) {
        if (elementId === "emailAddressInput") {
          const errorElement = document.getElementById("empty" + elementId);
          if (errorElement.classList.contains("invalidEmail")) {
            errorElement.classList.add("hiddenClass");
            errorElement.classList.remove("invalidEmail");
          }
        }
        handleErrorElements(elementId, "emptyVal");
      } else if (elementValue && elementId === "emailAddressInput") {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(elementValue)) {
          const errorElement = document.getElementById("empty" + elementId);
          errorElement.classList.add("hiddenClass");
          errorElement.classList.remove("error-message");
          handleErrorElements(elementId, "invalidEmail");
        } else {
          counter = counter + 1;
          removeErrorElement(elementId);
        }
      } else {
        counter = counter + 1;
        removeErrorElement(elementId);
      }
    }
  }
  if (counter === event.target.elements.length - 1) {
    event.target.reset();
  }
}

function handleErrorElements(elementId, errorType) {
  const id = elementId.split("Input")[0];
  if (id) {
    const imgElement = document.getElementById(id).querySelector("img");
    let errorElement;
    const errorElementString = "empty" + elementId;
    if (errorType === "emptyVal") {
      errorElement = document.getElementById(errorElementString);
    } else {
      errorElement = document.getElementById("invalidEmail");
    }
    imgElement.classList.remove("hiddenClass");
    imgElement.classList.add("errorIconClass");
    errorElement.classList.remove("hiddenClass");
    errorElement.classList.add("error-message");
    document.getElementById(elementId).classList.add("error-input-class");
    document.getElementById(elementId).classList.remove("input-class");
    document.getElementById(elementId).removeAttribute("placeholder");
  }
}

function removeErrorElement(elementId) {
  const id = elementId.split("Input")[0];
  if (id) {
    const placeholderValue = convertVariableToLabel(id);
    const imgElement = document.getElementById(id).querySelector("img");
    const errorELementString = "empty" + elementId;
    const errorElement = document.getElementById(errorELementString);

    const invalidEmailElement = document.getElementById("invalidEmail");
    imgElement.classList.add("hiddenClass");
    imgElement.classList.remove("errorIconClass");
    errorElement.classList.add("hiddenClass");
    errorElement.classList.remove("error-message");
    invalidEmailElement.classList.add("hiddenClass");
    invalidEmailElement.classList.remove("error-message");
    document.getElementById(elementId).classList.remove("error-input-class");
    document.getElementById(elementId).classList.add("input-class");
    document
      .getElementById(elementId)
      .setAttribute("placeholder", placeholderValue);
  }
}

function convertVariableToLabel(variableName) {
  // Use a regular expression to split camelCase
  const words = variableName.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words with a space
  const label = capitalizedWords.join(" ");

  return label;
}
