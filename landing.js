"use strict";
const contactUrl = String(window.ROWAN_CONTACT_URL || "").trim();
const statusNode = document.getElementById("contact-status");
const reserveButton = document.getElementById("reserve-button");
const message = "Hi, I want to reserve a Rowan Founders Edition spot. Please send me the next steps.";

function reserve() {
  if (contactUrl) {
    window.location.href = contactUrl;
    return;
  }
  statusNode.textContent = "The direct contact link is being finalized. Copy the message and send it through the channel that brought you here.";
}
document.querySelectorAll(".cta").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!contactUrl) return;
    event.preventDefault();
    window.location.href = contactUrl;
  });
});
reserveButton.addEventListener("click", reserve);
document.getElementById("copy-message").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(message);
    statusNode.textContent = "Reservation message copied.";
  } catch {
    statusNode.textContent = message;
  }
});
statusNode.textContent = contactUrl ? "Founders contact is ready." : "For this assisted beta, use the contact link shared with you or copy the reservation message.";
