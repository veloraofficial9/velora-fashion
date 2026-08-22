const product = document.getElementById('product');
const qty = document.getElementById('qty');
const total = document.getElementById('total');
const form = document.getElementById('checkoutForm');
const message = document.getElementById('message');

function updateTotal() {
  const opt = product.options[product.selectedIndex];
  const price = Number(opt?.dataset?.price || 0);
  const q = Number(qty.value || 1);
  total.value = price ? `₹${price * q}` : '';
}

product.addEventListener('change', updateTotal);
qty.addEventListener('input', updateTotal);
updateTotal();

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  message.style.display = 'block';
  message.textContent = 'Order saved locally. Next step is Razorpay server-side payment integration.';
});
