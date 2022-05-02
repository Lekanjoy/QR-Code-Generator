let generateBtn = document.getElementById('generate');
let qrInput = document.getElementById("text");
let box = document.getElementById('box'); 
let qrImage = document.getElementById("qr-image");



generateBtn.addEventListener('click',() =>{
    let qrValue = qrInput.value;
    console.log(qrValue)
    if(!qrValue) return;
    qrImage.src =
     ` https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    generateBtn.textContent ="Generating QR Code";
    
    qrImage.addEventListener('load',()=>{
     box.classList.add("active");
    generateBtn.innerText = "Generate QR Code";

    });
})


    qrInput.addEventListener("keydown", () => {
      box.classList.remove("active");
    });
    

