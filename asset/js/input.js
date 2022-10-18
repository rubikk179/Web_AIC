import {inputByText,inputByImage,btnGetByImage,
    btnGetByText,contentInputImage,contentInputImageDropzone,
    contentInputImageText,contentBoxImage,contentInputImageBoxShowImage,
    contentInputImageDropzoneImage,contentSubmitText,btnLine,
    contentInputBoxSlider,InputValueSlider,contentInputImageShowImage,
    contentInputImageClearImage,contentBoxTextValue
} from "./main.js";

// choosed
btnGetByImage.addEventListener("click", function() {
    inputByText.classList.add("hidden");
    inputByImage.classList.remove("hidden");
    btnGetByImage.classList.add("item-choosed-find");
    btnGetByText.classList.remove("item-choosed-find");
    contentSubmitText.textContent = "FIND BY IMAGE";
    btnLine.style.left =  this.offsetLeft + "px";
})
btnGetByText.addEventListener("click", function() {
    inputByImage.classList.add("hidden");
    inputByText.classList.remove("hidden");
    btnGetByImage.classList.remove("item-choosed-find");
    btnGetByText.classList.add("item-choosed-find");
    contentSubmitText.textContent = "FIND BY TEXT";
    btnLine.style.left =  this.offsetLeft + "px";
})

// Input image
var dropped = false;
function inputImage() {   
    const generateNames = function(file) {
        if(
        file[0].type === "image/jpeg" ||
        file[0].type === "image/png" ||
        file[0].type === "image/webp" ||
        file[0].type === "image/gif" 
        ){
            contentInputImageText.textContent = file[0].name;           
        } 
    else{
            contentInputImageText.textContent = "This file is not an image :<"; 
        }
    };
        
    contentInputImageDropzone.addEventListener('dragover',event => {
        event.preventDefault();
        contentInputImageDropzone.classList.add("image-uploading");  
    })
             
    contentInputImageDropzone.addEventListener('dragleave',event => {
        event.preventDefault();
        contentInputImageDropzone.classList.remove("image-uploading");
    })
    var reader = new FileReader();
    var uploaded_image = "";

    contentInputImageDropzone.addEventListener('drop',e=> {
        console.log(1);
        e.preventDefault(); 
        contentInputImageDropzone.classList.remove("image-uploading");
        dropped = true;
        contentInputImage.files = e.dataTransfer.files;
        generateNames(e.dataTransfer.files);
        reader.addEventListener("loadend", () => {
            uploaded_image = reader.result; 
            contentInputImageShowImage.style.background = `url(${uploaded_image})`; 
            contentInputImageShowImage.style.backgroundRepeat = "no-repeat";     
            contentInputImageShowImage.style.backgroundSize = "contain";  
            contentInputImageShowImage.style.backgroundPosition = "center center";   
            contentInputImageBoxShowImage.classList.remove("hidden"); 
        })
        contentInputImageDropzone.classList.add("hidden");
        reader.readAsDataURL(contentInputImage.files[0]);
    })       
    contentInputImageDropzone.onclick = function(e) {   
        e.preventDefault();
        contentInputImage.click();
    }

        contentInputImage.onchange = function() {
            if(!dropped) {
                generateNames(this.files);
            }
            reader.addEventListener("load", () => {
                uploaded_image = reader.result; 
                contentInputImageShowImage.style.background = `url(${uploaded_image})`; 
                contentInputImageShowImage.style.backgroundRepeat = "no-repeat";     
                contentInputImageShowImage.style.backgroundSize = "contain";   
                contentInputImageShowImage.style.backgroundPosition = "center center";  
                contentInputImageBoxShowImage.classList.remove("hidden"); 
            })
            reader.readAsDataURL(contentInputImage.files[0]);
            contentInputImageDropzone.classList.add("hidden");
            dropped = false;
        }
}
inputImage();
function clearImage() {
    contentInputImageShowImage.style.background = undefined;
    contentInputImageDropzone.classList.remove("hidden");
    contentInputImageBoxShowImage.classList.add("hidden");
}
contentInputImageClearImage.addEventListener("click",event => {
    clearImage();
})
//input text
//input slider 
InputValueSlider.innerHTML = contentInputBoxSlider.value;
contentInputBoxSlider.oninput = function() {
    InputValueSlider.innerHTML = this.value;
}