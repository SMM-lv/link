function showDetails() {
  const details = document.getElementById('details');
  const detailsBtn = document.getElementById('details-btn');
  details.classList.remove('hidden');
  details.classList.add('visible');
  detailsBtn.style.display = 'none';
}

function hideDetails() {
  const details = document.getElementById('details');
  const detailsBtn = document.getElementById('details-btn');
  details.classList.remove('visible');
  details.classList.add('hidden');
  setTimeout(() => {
    detailsBtn.style.display = 'inline-block';
  }, 300);
}