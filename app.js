let confirm = document.getElementsByClassName("pword-conf");
let password = document.getElementById("pword");
let errorMsg = document.getElementById("error");
let submitBtn = document.getElementById("submit");

function checkPWord() {
if (password !== confirm) {
    errorMsg.innerHTML = "Please confirm same password";    
    } else {
        return ""
    }
}

submitBtn.addEventListener("click", checkPWord);
