document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // empeche l'envoie du formulaire
    // verifie si l'email est deja present
    let email = document.getElementById("email").value;

    if (localStorage.getItem("email") === email) {
        alert("Cet email est déjà utilisé !");
        return;
    }

    // Continue avec l'inscription...

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");

    emailError.innerText = "";
    passwordError.innerText = "";

    if (!validateEmail(email)) {
        emailError.innerText = "Email invalide !";
        return;
    }

    if (password !== confirmPassword) {
        passwordError.innerText = "Les mots de passe ne correspondent pas !";
        return;
    }
    //animation de validation
    let submitButton = document.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.innerText = "En cours...";

    setTimeout(function() {
        // Simule l'inscription réussie après 2 secondes (remplace par logique réelle si nécessaire)
        submitButton.disabled = false;
        submitButton.innerText = "S'inscrire";
        alert("Inscription réussie !");
    }, 2000); 
    // Stockage des informations de l'utilisateur
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Inscription réussie !");
});

// Fonction pour valider l'email
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
