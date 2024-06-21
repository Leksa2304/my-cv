document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {

            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: "smooth"
            });
        }
    });
});

function openFileWindow() {
    const fileUrl = "./img/Elena Lem.pdf";
    window.open(fileUrl, "_blank");
}



// const certificates = document.querySelectorAll(".certificates__item");

// certificates.forEach(function(certificate) {
//     certificate.addEventListener("click", function(event) {
//         if (event.target.classList.contains("enlarged")) {

//             event.target.classList.remove("enlarged");

//         } else {

//             event.target.classList.add("enlarged");
//         }
//     });
// });


const modal = document.getElementById('myModal');
const modalImage = document.getElementById('modalImage');
const myCert = document.querySelectorAll('.myCert');

myCert.forEach((img) => {
    img.addEventListener('click', () => {
        const selectedImagePath = img.getAttribute('src');
        modalImage.src = selectedImagePath;
        modal.style.display = 'block';
    });
});

modal.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});



const leftBtns = document.querySelector("#left-btns");
const rightBtns = document.querySelector("#right-btns");

window.addEventListener("resize", function() {

    if (window.innerWidth <= 982) {
        rightBtns.classList.add("hidden");
        leftBtns.classList.remove("hidden");

    }
});

const headerBurger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active");
    menu.classList.toggle("active");
})

const menuItems = document.querySelectorAll(".menu__item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        headerBurger.classList.remove("active");
        menu.classList.remove("active");
    })
})