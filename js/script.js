// Scroll to booking
function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

// Modal open
function openModal(img) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalImg").src = img.src;
}

// Modal close
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// WhatsApp booking
function book() {
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
}

// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});