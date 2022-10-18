import {inputByText,inputByImage,btnGetByImage,
    btnGetByText,contentInputImage,contentInputImageDropzone,
    contentInputImageText,contentBoxImage,contentInputImageBoxShowImage,
    contentInputImageDropzoneImage,contentSubmitText,btnLine,
    contentInputBoxSlider,InputValueSlider,contentBoxValues,
    btnCloseContentBoxValue,contentInputImageShowImage,
    contentInputImageClearImage,contentBoxTextValue
} from "./main.js";

import {createNewImage
} from "./show_images.js";

let valueOfText,valueOfImage,valueOfSlider;
contentSubmitText.addEventListener('click', event => {
    contentBoxValues.classList.remove("hidden");
    //Get value to send
    valueOfText = contentBoxTextValue.value;
    valueOfImage = contentInputImageShowImage.valueOf(ImageData);
    valueOfSlider = contentInputBoxSlider.value;
})

btnCloseContentBoxValue.addEventListener("click",event => {
    contentBoxValues.classList.add("hidden");
})