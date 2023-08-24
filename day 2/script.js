// **Ways to Add JavaScript to a Webpage:**
// 1. **Inline Script:** Adding JavaScript code directly within HTML tags using the `<script>` tag's `src` attribute or within a `<script>` tag itself.
// 2. **Internal Script:** Placing JavaScript code within a `<script>` tag in the HTML `<head>` or at the end of the `<body>` section.
// 3. **External Script:** Linking to an external JavaScript file using the `<script>` tag's `src` attribute.

// **Preferred Way:**
// Using **External Scripts** is generally preferred. This promotes separation of concerns, improves code reusability, allows for browser caching, and enhances maintainability. Placing scripts at the end of the `<body>` is also recommended to ensure that the HTML content loads before scripts, improving page loading speed.

document.getElementById("genderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameField = document.getElementById("name");
    const commentField = document.getElementById("comment");
    const selectedGender = document.querySelector("input[name='gender']:checked");

    if (!nameField.value || !commentField.value || !selectedGender) {
      let errorMessage = "Please fill in all required fields.";
      
      if (!nameField.value) {
        nameField.focus();
      } else if (!commentField.value) {
        commentField.focus();
      }

      alert(errorMessage);
    } else {
      // Do something with the form data, e.g., send data to the server
    }
  });

  const genderRadios = document.querySelectorAll("input[name='gender']");
  genderRadios.forEach(radio => {
    radio.addEventListener("click", function() {
      if (this.checked) {
        genderRadios.forEach(otherRadio => {
          if (otherRadio !== this) {
            otherRadio.checked = false;
          }
        });
      }
    });
  });