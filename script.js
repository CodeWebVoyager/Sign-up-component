function submitForm(event) {
  event.preventDefault();
  console.log("Form submitted!", event.target.elements);
  for (let i = 0; i < event.target.elements.length; i++) {
    console.log("elements", event.target.elements[i].value);
    if (!event.target.elements[i].value) {
    }
  }
  // document.getElementById('myForm').reset();
}
