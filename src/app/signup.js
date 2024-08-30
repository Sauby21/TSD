import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from './firebase.js';

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = signupForm['signup-name'].value;
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created:', userCredentials);
        
        // Redirect to success page
        window.location.href = "success.html";

    } catch (error) {
        console.error('Error creating user:', error.message);
        
        let errorMessage = 'Algo salió mal, por favor intenta de nuevo.';
        switch (error.code) {
            case 'auth/invalid-email':
                errorMessage = 'Correo electrónico inválido.';
                break;
            case 'auth/weak-password':
                errorMessage = 'La contraseña es demasiado débil.';
                break;
            case 'auth/email-already-in-use':
                errorMessage = 'El correo electrónico ya está registrado.';
                break;
        }
        
        // Show error toast notification
        Toastify({
            text: errorMessage,
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            backgroundColor: " #ff0000",
        }).showToast();
    }
});
