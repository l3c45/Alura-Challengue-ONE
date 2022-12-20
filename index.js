const btnEncriptar= document.getElementById("encriptar")
const btnDesencriptar= document.getElementById("desencriptar")
const textInput= document.getElementById("text-input")

const libro={
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
}

const encriptar=(value)=>{
    
const arr=value.split("")
return  arr.reduce((acc,val)=>{
    libro[val]? acc.concat(libro[val]):acc.concat(val)
},"")

//console.log(cifrado)

}

const desencriptar=(value)=>{
    return Object.keys(libro)
                .reduce((acc,val)=>acc.replaceAll(libro[val],val),value)

   // console.log(textoPlano)
    
}

btnEncriptar.addEventListener("click",()=>{
    encriptar(textInput.value)
})

btnDesencriptar.addEventListener("click",()=>{
    desencriptar(textInput.value)
})