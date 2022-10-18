import {inputByText,inputByImage,btnGetByImage,
    btnGetByText,contentInputImage,contentInputImageDropzone,
    contentInputImageText,contentBoxImage,contentInputImageBoxShowImage,
    contentInputImageDropzoneImage,contentSubmitText,btnLine,
    contentInputBoxSlider,InputValueSlider,contentBoxValues,
    btnCloseContentBoxValue,contentBoxShowImages,contentInputImageShowImage,
    contentInputImageClearImage,contentBoxTextValue
} from "./main.js";

export function createNewImage(url,idx) {
    console.log(1);
    let createImage = 
    `
        <div class="tagImageValue">
        <img src= ${url} alt="" class="itemImage">
        <p class="indexImage">${idx}</p>
        </div>
    `
    contentBoxShowImages.innerHTML = createImage;
}