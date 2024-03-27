
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("Hello");
//     const container = document.querySelector('.products-list-container');
//     const cards = container.querySelectorAll('.products-list-card');
//     const showMoreBtn = document.getElementById('show-more-btn');
//     const maxVisibleCards = 1;
//
//     // Показываем кнопку "Показать остальные", если есть скрытые карточки
//     if (cards.length > maxVisibleCards) {
//         showMoreBtn.style.display = 'block';
//     }
//
//     showMoreBtn.addEventListener('click', function() {
//         // Показываем скрытые карточки
//         for (let i = maxVisibleCards; i < cards.length; i++) {
//             cards[i].style.display = 'block';
//         }
//         // Скрываем кнопку "Показать остальные"
//         showMoreBtn.style.display = 'none';
//     });
//
//     // Скрываем все карточки, кроме первых maxVisibleCards
//     for (let i = maxVisibleCards; i < cards.length; i++) {
//         cards[i].style.display = 'none';
//     }
// });