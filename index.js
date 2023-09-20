let certificate = document.querySelector("form");
let hides = document.querySelectorAll(".hide");

function calling() {
    hides.forEach(function (hide) {
        hide.style.display = "none";
    });
}
function img() {
    const imgElement = document.createElement("img");

    // Set the source (URL) of the image
    imgElement.src = "certificate.png";
    imgElement.height = 500;
    imgElement.width = 700;

    const imageContainer = document.getElementById("imageContainer");
    imageContainer.appendChild(imgElement);


}
function img1() {
    const imgElement = document.createElement("img");

    // Set the source (URL) of the image
    imgElement.src = "ankita certificate.jpg";
    imgElement.height = 500;
    imgElement.width = 700;

    const imageContainer = document.getElementById("imageContainer");
    imageContainer.appendChild(imgElement);

}
function img2() {
    const imgElement = document.createElement("img");

    // Set the source (URL) of the image
    imgElement.src = "karan certificate .jpg";
    imgElement.height = 500;
    imgElement.width = 700;

    const imageContainer = document.getElementById("imageContainer");
    imageContainer.appendChild(imgElement);

}
function img3() {
    const imgElement = document.createElement("img");

    // Set the source (URL) of the image
    imgElement.src = "harpreet certificate.jpg";
    imgElement.height = 500;
    imgElement.width = 700;

    const imageContainer = document.getElementById("imageContainer");
    imageContainer.appendChild(imgElement);

}
function img4() {
    const imgElement = document.createElement("img");

    // Set the source (URL) of the image
    imgElement.src = "anmol certificate .jpg";
    imgElement.height = 500;
    imgElement.width = 700;

    const imageContainer = document.getElementById("imageContainer");
    imageContainer.appendChild(imgElement);

}
certificate.addEventListener("submit", function (e) {

    e.preventDefault();
    let Certificate_id = parseInt(document.querySelector('#Certificate_id').value);
    let alert = document.querySelector('#alert');

    if (Certificate_id === 1603127702513) {
        calling();
        img();

    }
    else if (Certificate_id === 1603127701325) {
        calling();
        img1();

    }
    else if (Certificate_id === 1603128516793) {
        calling();
        img2();

    }
    else if (Certificate_id === 1603128582364) {
        calling();
        img3();

    }
    else if (Certificate_id === 1603128556189) {
        calling();
        img4();

    }
    else 
    {
        alert.innerHTML=`*Enter Valid details`;
    }

});