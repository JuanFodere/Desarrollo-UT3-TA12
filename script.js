function generatePassword(largo){
    let password = ""
    if(largo < 8){
        console.log("la contraseña debe tener al menos 8 caracteres")
    }
    else{
        password += mayRandom()
        password +=minRandom()
        password += numRandom()
        password += simbRandom()
        for(let i = 4; i < largo; i++){
            let tipo = (Math.floor(Math.random() * 4))
            if(tipo===0){
                password += mayRandom()
            }
            else if(tipo===1){
                password += minRandom()
            }
            else if(tipo===2){
                password += simbRandom()
            }
            else{
                password += numRandom()
            }
        }
    }
    
    console.log(password)
}

function mayRandom(){
    let mayausculas = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    let posicion = (Math.floor(Math.random() * 27))
    let letra = mayausculas[posicion]
    return letra
}

function minRandom(){
    let minusculas ="qwertyuiopasdfghjklñzxcvbnm"
    let posicion = (Math.floor(Math.random() * 27))
    let letra = minusculas[posicion]
    return letra
}

function numRandom(){
    let numeros = "1234567890"
    let caracter = Math.floor(Math.random() * 9) 
    let num = numeros[caracter]
    return num
}

function simbRandom(){
    let simbolos= "!#$%&/()=+{}-.,;:_]["
    let simbolo = (Math.floor(Math.random() * 20))
    let sim = simbolos[simbolo]
    return sim
}

generatePassword(10)