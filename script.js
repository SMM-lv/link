function showDetails() {
    const details = document.getElementById('details');
    const detailsBtn = document.getElementById('details-btn');
  
    // Показываем детали
    details.classList.remove('hidden');
    details.classList.add('visible');
  
    // Прячем кнопку "Подробнее"
    detailsBtn.style.display = 'none';
  }
  
  function hideDetails() {
    const details = document.getElementById('details');
    const detailsBtn = document.getElementById('details-btn');
  
    // Прячем детали
    details.classList.remove('visible');
    details.classList.add('hidden');
  
    // Возвращаем кнопку "Подробнее" после скрытия деталей
    setTimeout(() => {
      detailsBtn.style.display = 'inline-block';
    }, 300); // Время задержки, чтобы кнопка показалась после завершения анимации
  }