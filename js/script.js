const imgNames = document.querySelectorAll(".img-name");
const imgPreviewContainer = document.querySelector(".img-preview-container");

imgNames.forEach((imgName) => {
    imgName.addEventListener("mouseover", () => {
        const dataImg = imgName.getAttribute("data-img");
        imgPreviewContainer.innerHTML = `<img class="preview" src="./Images/kunstenaars/${dataImg}.png" alt="" />`;
    });
});