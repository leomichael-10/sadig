document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger");

    // Toggle Navbar
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        document.addEventListener("click", closeMenuOutside);
    });

    function closeMenuOutside(event) {
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            nav.classList.remove("active");
            document.removeEventListener("click", closeMenuOutside);
        }
    }
});

// Redirect Functions
function shopNow() {
    window.location.href = "shop.html";
}

function buyNow() {
    alert("Redirecting to purchase page...");
    window.location.href = "checkout.html";
}

function seeMore() {
    window.location.href = "details.html";
}
