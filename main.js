

/* Scroll til footer */
document.getElementById('scrollToFooter').addEventListener('click', function(event) {
  event.preventDefault(); // Forhindrer standardlinkadfærd
  document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});
