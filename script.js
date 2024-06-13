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



const certificates = document.querySelectorAll(".certificates__item");

certificates.forEach(function(certificate) {
    certificate.addEventListener("click", function(event) {
        if (event.target.classList.contains("enlarged")) {

            event.target.classList.remove("enlarged");

        } else {

            event.target.classList.add("enlarged");
        }
    });
});