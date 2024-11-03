const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const donwloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.querySelector(".qr-body");
let size = sizes.value;

sizes.addEventListener("change",()=>{
    size = sizes.value;
    generateQRCode()
})
console.log(size)

generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    generateQRCode();

})

downloadBtn.addEventListener("click",(e)=>{
    let img = document.querySelector(".qr-body img");
    console.log(img)
    if(img!==null){
        let imgattr = img.getAttribute("src")
        console.log(imgattr)
        donwloadBtn.setAttribute("href",imgattr)
    }
    else{
        alert("error")
    }
    
})



donwloadBtn.addEventListener

function generateQRCode(){
    qrContainer.innerHTML = ""
    new QRCode(qrContainer,{
        text: qrText.value,
        height: size,
        width: size,
        colorDark: "#000",
        colorLight: "#fff",
    
    });
    
}