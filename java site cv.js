document.addEventListener("DOMContentLoaded", function() {
    const fadeInImage = document.querySelector(".fade-in-image");
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fadeInImage.classList.add("fade-in-visible");
            }
        });
    });

    observer.observe(fadeInImage);
});
