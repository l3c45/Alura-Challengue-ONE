const btnEncriptar= document.getElementById("encriptar")
const btnDesencriptar= document.getElementById("desencriptar")
const textInput= document.getElementById("text-input")
const textOutputContainer= document.querySelector(".textOutput")
const textOutputCrypContainer= document.querySelector(".textOutputCrypted")
const textCrypted=document.querySelector(".textCrypted")
const copyBtn=document.querySelector(".buttonCrypted")


const libro={
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
}

const encriptar=(value)=>{
    
const arr=value.split("")
return  arr.reduce((acc,val)=>libro[val]?acc.concat(libro[val]):acc.concat(val),"")
}

const desencriptar=(value)=>{
    return Object.keys(libro)
                .reduce((acc,val)=>acc.replaceAll(libro[val],val),value)
 
}

btnEncriptar.addEventListener("click",()=>{
    const text=encriptar(textInput.value)
    textCrypted.innerHTML=(text)
     textOutputContainer.classList.toggle("empty")
     textOutputCrypContainer.classList.toggle("empty")
})

btnDesencriptar.addEventListener("click",()=>{
   const text= desencriptar(textInput.value)
   textCrypted.innerHTML=(text)

})

copyBtn.addEventListener("click",()=>{
    const text=textCrypted.textContent
    navigator.clipboard.writeText(text);
    textInput.value=(text)

})