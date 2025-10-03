const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let generateBtn = document.getElementById("generatepass-btn");

generateBtn.addEventListener("click", function() {
    password1El.textContent = generatePassword()
    password2El.textContent = generatePassword()
        })

password1El.addEventListener("click", function() {
    copyToClipboard(password1El.textContent)
})

password2El.addEventListener("click", function() {
    copyToClipboard(password2El.textContent)
})

function copyToClipboard(text) {
    if (text) {
        navigator.clipboard.writeText(text)
        showToast()
    }
}

function showToast() {
    const toast = document.getElementById("toast")
    toast.classList.add("show")
    
    setTimeout(() => {
        toast.classList.remove("show")
    }, 2000)
}
        
function generatePassword() {
    let password = ""
    for (let i = 0; i < 15; i++){
        let randomCharacter = Math.floor(Math.random() * characters.length);
        password += characters[randomCharacter];
    }
    return password;
}


