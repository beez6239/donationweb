

// 1️⃣ Handle main donation form submission
document.addEventListener('DOMContentLoaded', function () {
  const donationForm = document.getElementById('donationForm');
  const donorInfoForm = document.getElementById('donorInfoForm');
  const paymentForm = document.getElementById('paymentForm');
  const cardNumberInput = document.getElementById('card-number');
  const expiryInput = document.getElementById('expiry-date');

  if (!donationForm || !donorInfoForm || !paymentForm) return;

  // 1️⃣ Handle main donation form submission
  donationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = document.getElementById('donation-amount-input').value.trim();
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }

    // Open donor info modal first
    $('#donorInfoModal').modal('show');
  });

  // 2️⃣ Handle donor info submission
  donorInfoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !email || !phone) {
      alert('Please fill in all required fields.');
      return;
    }

    // Close donor info modal, open card modal
    $('#donorInfoModal').modal('hide');
    setTimeout(() => $('#donationModal').modal('show'), 400);
  });

  // 3️⃣ Handle card details submission
  paymentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const cardName = document.getElementById('card-holder-name').value.trim();
    const card = document.getElementById('card-number').value.trim();
    const expiry = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!cardName || !card || !expiry || !cvv) {
      alert('Please complete all card details.');
      return;
    }

    $('#donationModal').modal('hide');
    setTimeout(() => {
      alert(`🎉 Thank you, ${document.getElementById('donor-name').value}! Your donation has been received successfully.`);
    }, 400);
  });

  // 4️⃣ Optional: Formatting helpers
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', function (e) {
      this.value = this.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    });
  }

  if (expiryInput) {
    expiryInput.addEventListener('input', function (e) {
      let value = this.value.replace(/\D/g, '');
      if (value.length >= 3) value = value.substring(0, 2) + '/' + value.substring(2, 4);
      this.value = value;
    });
  }
});

// ==================== END OF DONATION FLOW SCRIPT ====================
