const imageGallery = document.getElementById("image-gallery");
const mainButton = document.getElementById("main-button");

function getRandomImage() {
  const imageHolder = document.createElement("div");

  const image = document.createElement("img");
  image.setAttribute(
    "src",
    `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`
  );
  image.setAttribute("alt", "Randomly Generated Image");

  const placeHolder = document.createElement("div");
  placeHolder.innerText = "Loading...";
  imageGallery.appendChild(placeHolder);

  image.onload = () => {
    placeHolder.remove();
    imageHolder.appendChild(image);

    const deleteImageButton = document.createElement("button");
    deleteImageButton.innerText = "❌";
    imageHolder.appendChild(deleteImageButton);
    imageGallery.appendChild(imageHolder);
  };
}

mainButton.addEventListener("click", getRandomImage);

imageGallery.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
    e.target.parentElement.remove();
  }
});
