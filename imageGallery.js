const imageGallery = document.getElementById("image-gallery");
const mainButton = document.getElementById("main-button");

function getRandomImage()
{
    const image = document.createElement("img");
    image.setAttribute("src", `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`);
    image.setAttribute("alt", "Randomly Generated Image");
    
    const placeHolder = document.createElement("div");
    placeHolder.innerText = "Loading...";
    imageGallery.appendChild(placeHolder);
    
    image.onload = () => {
        placeHolder.remove();
        imageGallery.appendChild(image);
    }
}

mainButton.addEventListener("click", getRandomImage);

