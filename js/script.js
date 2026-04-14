document.addEventListener("DOMContentLoaded", function () {

    window.scrollToBooking = function () {
        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });
    };

    window.openModal = function (img) {
        document.getElementById("modal").style.display = "block";
        document.getElementById("modalImg").src = img.src;
    };

    window.closeModal = function () {
        document.getElementById("modal").style.display = "none";
    };

    window.book = function () {
        const name = document.getElementById("name").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        if (!name || !date || !time) {
            alert("Please fill in all fields");
            return;
        }

        const phoneNumber = "27730617274";

        const message = `Hello, I'd like to book an appointment 💅

Name: ${name}
Service: ${service}
Date: ${date}
Time: ${time}`;

        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    // ✅ FIXED TOGGLE
    const priceBtn = document.getElementById("priceBtn");
    const priceImages = document.getElementById("priceImages");

    if (priceBtn && priceImages) {
        priceBtn.addEventListener("click", () => {

            if (priceImages.classList.contains("show")) {
                priceImages.classList.remove("show");
                priceBtn.textContent = "View Full Price List";
            } else {
                priceImages.classList.add("show");
                priceBtn.textContent = "Hide Price List";
            }

        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    });

    document.querySelectorAll(".scrollEffect").forEach(el => {
        observer.observe(el);
    });

});

// PRICE MODAL
window.openPriceModal = function () {
    document.getElementById("priceModal").style.display = "flex";
};

window.closePriceModal = function () {
    document.getElementById("priceModal").style.display = "none";
};