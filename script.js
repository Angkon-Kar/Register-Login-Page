function showLogin(){
    document.getElementById('loginBtn').classList.add('active');
    document.getElementById('registerBtn').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
}

function showRegister(){
    document.getElementById('registerBtn').classList.add('active');
    document.getElementById('loginBtn').classList.remove('active');
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');    
}

function loginUser(){
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if(!email || !password){
        alert("Please fill out all fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    alert(`Welcome back! Login successful for ${email}`);
}

function registerUser(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(!name || !email || !password || !confirmPassword){
        alert("Please fill out all fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match.");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 Characters long.");
        return;
    }

    alert(`Welcome ${name}! Registration Successful.`);
}

function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strengthBar = document.getElementById("strengthBar");
  const strengthText = document.getElementById("strengthText");

  let strength = 0;

  if (password.length >= 6) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;

  switch (strength) {
    case 0:
    case 1:
      strengthBar.style.background = "red";
      strengthText.textContent = "Very Weak";
      break;
    case 2:
      strengthBar.style.background = "orange";
      strengthText.textContent = "Weak";
      break;
    case 3:
      strengthBar.style.background = "gold";
      strengthText.textContent = "Moderate";
      break;
    case 4:
      strengthBar.style.background = "blue";
      strengthText.textContent = "Strong";
      break;
    case 5:
      strengthBar.style.background = "green";
      strengthText.textContent = "Very Strong";
      break;
  }
}
