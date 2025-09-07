const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  console.log("Form Submitted");
  e.preventDefault();

  const formData = new FormData(form);

  var valid = true;

  const firstName = formData.get("first-name")?.trim();
  if (!firstName) {
    document.getElementById("first-name-error").classList.remove("error-hidden");
    document.getElementById("first-name").classList.add("invalid-input");
    document.getElementById("first-name").setAttribute("aria-invalid", "true");

    valid = false;
  } else {
    document.getElementById("first-name-error").classList.add("error-hidden");
    document.getElementById("first-name").classList.remove("invalid-input");
    document.getElementById("first-name").setAttribute("aria-invalid", "false");
  }

  const lastName = formData.get("last-name")?.trim();
  if (!lastName) {
    document.getElementById("last-name-error").classList.remove("error-hidden");
    document.getElementById("last-name").classList.add("invalid-input");
    document.getElementById("last-name").setAttribute("aria-invalid", "true");

    valid = false;
  } else {
    document.getElementById("last-name-error").classList.add("error-hidden");
    document.getElementById("last-name").classList.remove("invalid-input");
    document.getElementById("last-name").setAttribute("aria-invalid", "false");
  }

  const email = formData.get("email")?.trim();

  if (!email) {
    document.getElementById("email-error").classList.remove("error-hidden");
    document.getElementById("email").classList.add("invalid-input");
    document.getElementById("email").setAttribute("aria-invalid", "true");

    valid = false;
  } else {
    document.getElementById("email-error").classList.add("error-hidden");
    document.getElementById("email").classList.remove("invalid-input");
    document.getElementById("email").setAttribute("aria-invalid", "false");
  }

  const query = formData.get("query");

  if (!query) {
    document.getElementById("query-type-error").classList.remove("error-hidden");
    document.getElementById("general-enquiry").setAttribute("aria-invalid", "true");
    document.getElementById("support-request").setAttribute("aria-invalid", "true");
    valid = false;
  } else {
    document.getElementById("query-type-error").classList.add("error-hidden");
    document.getElementById("general-enquiry").setAttribute("aria-invalid", "false");
    document.getElementById("support-request").setAttribute("aria-invalid", "false");
  }

  const message = formData.get("message")?.trim();

  if (!message) {
    console.log("here");
    document.getElementById("message-error").classList.remove("error-hidden");
    document.getElementById("message").classList.add("invalid-input");
    document.getElementById("message").setAttribute("aria-invalid", "true");

    valid = false;
  } else {
    document.getElementById("message-error").classList.add("error-hidden");
    document.getElementById("message").classList.remove("invalid-input");
    document.getElementById("message").setAttribute("aria-invalid", "false");
  }

  const consent = formData.get("consent");

  if (!consent) {
    document.getElementById("consent-error").classList.remove("error-hidden");
    document.getElementById("consent").setAttribute("aria-invalid", "true");

    valid = false;
  } else {
    document.getElementById("consent-error").classList.add("error-hidden");
    document.getElementById("consent").setAttribute("aria-invalid", "false");
  }

  if (valid) {
    form.reset();

    document.getElementById("success-container").classList.remove("success-container-hidden");

    setTimeout(() => {
      document.getElementById("success-container").classList.add("success-container-hidden");
    }, 10000);
  }
});
