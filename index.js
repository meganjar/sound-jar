
import { authUrl } from './spotifyAuth.js';


// oauth DOM

    

// const authLinkEl = document.getElementById("auth-url");
// console.log(document.getElementById("auth-url"));
// authLinkEl.href = authUrl;


document.addEventListener("DOMContentLoaded", () => {
// Find the auth link element
const authLinkEl = document.getElementById("auth-url");

// Ensure the element exists before setting the href
if (authLinkEl) {
    authLinkEl.href = authUrl;

} else {
    console.error("Element with ID 'auth-url' not found.");
}

})
// about me DOM


// create playlist DOM


