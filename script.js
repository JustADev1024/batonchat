// Добавляем интерактивность к странице
document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    
    // Добавляем эффект при клике на заголовок
    title.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Добавляем эффект при наведении мыши
    title.addEventListener('mouseover', function() {
        this.style.color = '#ffd700';
    });
    
    title.addEventListener('mouseout', function() {
        this.style.color = '#ffffff';
    });
    
    console.log('BATONCHAT страница загружена!');
});