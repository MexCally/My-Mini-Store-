
// Subscription Button
const subscribeBtn = document.getElementById("subscribeBtn");

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    alert("Thank you for subscribing! Stay tuned for updates.");
  });
}

// Buy Now Buttons
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productName = e.target.getAttribute("data-product");
    alert(`${productName} has been added to your cart!`);
  });
});