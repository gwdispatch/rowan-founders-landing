"use strict";
const statusNode = document.getElementById("contact-status");
const message = "FOUNDERS — I’m interested in Rowan’s assisted Windows beta. My Windows version is __. I want to build __. Please check compatibility and send the setup, pricing, support and cancellation/refund details before payment.";
document.getElementById("copy-message").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(message);
    statusNode.textContent = "Inquiry copied. Open Rowan on Facebook or Instagram and paste it into a message.";
  } catch {
    statusNode.textContent = message;
  }
});
statusNode.textContent = "Inquiries are open. No payment or automatic reservation is made by these links.";
