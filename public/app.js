const form = document.querySelector("#order-form");
const cardSelect = document.querySelector("#card-select");
const status = document.querySelector("#form-status");
const buttons = document.querySelectorAll(".select-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest("[data-card]");
    cardSelect.value = product.dataset.card;
    document.querySelector("#order").scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => form.querySelector("input[name='firstName']").focus(), 450);
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = form.querySelector("button[type='submit']");
  const data = Object.fromEntries(new FormData(form).entries());

  status.className = "form-status";
  status.textContent = "Надсилаємо замовлення...";
  submitButton.disabled = true;

  try {
    const response = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();

    if (!response.ok || !result.ok) {
      throw new Error(result.message || "Помилка надсилання");
    }

    status.className = "form-status success";
    status.textContent = result.message;
    form.reset();
  } catch (error) {
    status.className = "form-status error";
    status.textContent = error.message;
  } finally {
    submitButton.disabled = false;
  }
});
