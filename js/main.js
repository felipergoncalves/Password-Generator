//Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")
const copyPassword = document.querySelector("#copyPassword")
const showPassword = document.getElementById("showPassword")
const hidePassword = document.getElementById("hidePassword")
const showPasswordConfirm = document.getElementById("showPasswordConfirm")
const hidePasswordConfirm = document.getElementById("hidePasswordConfirm")
const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirmPassword")

//Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
    const symbols = '(){}[]=<>/,.!@#$*+-'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ''

    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for(i = 0; i < passwordLength; i = i + 4){//ou i = i + generators.length
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()
            
            password += randomValue
        })
    }
    password = password.slice(0, passwordLength)
    
    generatedPasswordElement.style.display = 'block'
    const PasswordText = generatedPasswordElement.querySelector("h4")
    PasswordText.innerText = password
}

//Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
    copyPassword.classList.remove('textCopiated')
    copyPassword.textContent = 'Copiar'
})

copyPassword.addEventListener("click", () => {
    const PasswordText = generatedPasswordElement.querySelector("h4")
    navigator.clipboard.writeText(PasswordText.innerText).then(() => {
        /* clipboard successfully set */
        copyPassword.classList.add('textCopiated')
        copyPassword.textContent = 'Copiado'
      });
})
confirmPasswordInput.addEventListener("keydown", () => {

})

hidePassword.addEventListener("click", () => {
    showPassword.style.display = 'block'
    hidePassword.style.display = 'none'
    passwordInput.removeAttribute('type')
    passwordInput.setAttribute('type', 'text')
})

showPassword.addEventListener("click", () => {
    showPassword.style.display = 'none'
    hidePassword.style.display = 'block'
    passwordInput.removeAttribute('type')
    passwordInput.setAttribute('type', 'password')
})

hidePasswordConfirm.addEventListener("click", () => {
    showPasswordConfirm.style.display = 'block'
    hidePasswordConfirm.style.display = 'none'
    confirmPasswordInput.removeAttribute('type')
    confirmPasswordInput.setAttribute('type', 'text')
})

showPasswordConfirm.addEventListener("click", () => {
    showPasswordConfirm.style.display = 'none'
    hidePasswordConfirm.style.display = 'block'
    confirmPasswordInput.removeAttribute('type')
    confirmPasswordInput.setAttribute('type', 'password')
})