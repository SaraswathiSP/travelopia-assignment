

// const mobileNavContainer = document.getElementById('mobileNavContainer');
// const mobileNavIcon = document.getElementById('mobileNavIcon');
// const mobileNavCloseIcon = document.getElementById('mobileNavCloseIcon');

// mobileNavIcon.addEventListener('click', function () {
//     mobileNavContainer.classList.add('show');
//     mobileNavIcon.style.display = 'none';
//     mobileNavCloseIcon.style.display = 'flex';
// });

// mobileNavCloseIcon.addEventListener('click', function () {
//     mobileNavContainer.classList.remove('show');
//     mobileNavIcon.style.display = 'flex';
//     mobileNavCloseIcon.style.display = 'none';
// });



const shortText = "Armenia is a mountainous nation in West Asia, A former Soviet Republic, and was one of the first Christian nations, embracing Christianity in the fourth century. This rich cultural and natural... Environment makes it an exciting destination for..."
const completeText = "Armenia is a mountainous nation in West Asia, A former Soviet Republic, and was one of the first Christian nations, embracing Christianity in the fourth century. This rich cultural and natural environment makes it an exciting destination for a wide range of adventure, activity and walking holidays. There are many pagan sites to visit as well as UNESCO World Heritage-listed churches, which are -- almost without exception -- built in stunning locations. Surrounded by forests, perched on the top of dramatic gorges or silhouetted before snow-capped mountains, they draw us to magnificent open spaces filled with a huge variety of trees and wild flowers. On Armenia tours we see wonderful mountains lakes and waterfalls in the tour."

const tourDetails = document.getElementById("tourDetails")
const buttonElement = document.getElementById("toggleButton")

buttonElement.addEventListener('click', () => {
    if (buttonElement.textContent === "Read More") {
        buttonElement.textContent = "Read Less";
        tourDetails.textContent = completeText;
    } else {
        buttonElement.textContent = "Read More";
        tourDetails.textContent = shortText
    }

})