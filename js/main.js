//Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")
const copyPassword = document.querySelector("#copyPassword")

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