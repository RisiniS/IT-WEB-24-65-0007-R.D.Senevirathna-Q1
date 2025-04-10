document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
  
    forms.forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const emailInput = this.querySelector('input[type="email"]');
        const nameInput = this.querySelector('input[type="text"]');
        const passwordInput = this.querySelector('input[type="password"]');
  
        const email = emailInput ? emailInput.value.trim() : '';
        const name = nameInput ? nameInput.value.trim() : '';
        const password = passwordInput ? passwordInput.value.trim() : '';
  
        if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
        }
  
        if (nameInput && name === "") {
          alert("Please enter your full name.");
          return;
        }
  
        if (passwordInput && password.length < 6) {
          alert("Password must be at least 6 characters.");
          return;
        }
  
        alert("Thank you! Your form has been submitted successfully.");
        this.reset();
      });
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }
  });
  