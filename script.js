function submitForm(event) {
  event.preventDefault();
  console.log("Form submitted!", event.target.elements);
  for (let i = 0; i < event.target.elements.length; i++) {
    const elementId = event.target.elements[i].id;
    console.log("elementID", elementId);
    // console.log("elements", event.target.elements[i].value);
    if (
      event.target.elements[i].type === "text" ||
      event.target.elements[i].type === "password"
    ) {
      const elementValue = event.target.elements[i].value.trim();
      if (!elementValue) {
        handleErrorElements(elementId, "emptyVal");
        // document.getElementById();
      } else if (elementValue && elementId === "emailAddressInput") {
        console.log("hello");
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(elementValue)) {
          //   removeErrorElement(elementId);
          //   const errorELementString = "empty" + elementId;
          const errorElement = document.getElementById("empty" + elementId);
          errorElement.classList.add("hiddenClass");
          errorElement.classList.remove("error-message");
          handleErrorElements(elementId, "invalidEmail");
        } else {
          removeErrorElement(elementId);
        }
      } else {
        removeErrorElement(elementId);
      }
    }
  }
  // document.getElementById('myForm').reset();
}

function handleErrorElements(elementId, errorType) {
  console.log("event.target.elements[i]", elementId.split("Input")[0]);
  const id = elementId.split("Input")[0];
  if (id) {
    console.log(id.length);
    const imgElement = document.getElementById(id).querySelector("img");
    let errorElement;
    const errorElementString = "empty" + elementId;
    console.log("errorElementString", errorElementString);
    if (errorType === "emptyVal") {
      console.log("hello4");
      errorElement = document.getElementById(errorElementString);
      // .querySelector(errorElementString);
    } else {
      errorElement = document.getElementById("invalidEmail");
    }
    console.log("temp", errorElement);
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
  console.log("event.target.elements[i]", elementId.split("Input")[0]);
  const id = elementId.split("Input")[0];
  if (id) {
    const placeholderValue = convertVariableToLabel(id);
    console.log(id.length);
    const imgElement = document.getElementById(id).querySelector("img");
    const errorELementString = "empty" + elementId;
    const errorElement = document.getElementById(errorELementString);

    const invalidEmailElement = document.getElementById("invalidEmail");
    // document.getElementById(id).getElementById("invalidEmail");
    console.log("temp", errorElement);
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
