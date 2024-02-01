document.querySelectorAll('.radio-button input[type="radio"]').forEach(function(radio) {
  radio.addEventListener('change', function() {
    // Odstraní třídu 'selected' ze všech radio-button
    document.querySelectorAll('.radio-button').forEach(function(rb) {
      rb.classList.remove('selected');
    });
    // Přidá třídu 'selected' k rodiči vybraného radio buttonu
    if (this.checked) {
      this.closest('.radio-button').classList.add('selected');
    }
  });
});
