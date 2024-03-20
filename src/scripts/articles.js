document.addEventListener('DOMContentLoaded', function() {
    const articlesBlocks = document.querySelectorAll('.articles-block');

    articlesBlocks.forEach(function(articlesBlock) {
        const articlesBlockText = articlesBlock.querySelector('.articles-block-text');

        articlesBlock.addEventListener('click', function(event) {
            // Переключаем класс для раскрытия или скрытия блока текста
            articlesBlock.classList.toggle('articles-block-expanded');
            event.stopPropagation(); // Останавливаем всплытие события
        });

        // Скрываем текст при любом клике в документе
        document.addEventListener('click', function() {
            articlesBlock.classList.remove('articles-block-expanded');
        });
    });

    if (!articlesBlocks.length) {
        console.log('Элементы не найдены');
    }
});
