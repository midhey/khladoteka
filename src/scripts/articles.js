document.addEventListener('DOMContentLoaded', function() {
    const articlesBlocks = document.querySelectorAll('.articles-block');

    articlesBlocks.forEach(function(articlesBlock, index) {
        const articlesBlockText = articlesBlock.querySelector('.articles-block-text');

        articlesBlock.addEventListener('click', function(event) {
            // Переключаем класс для раскрытия или скрытия блока текста
            articlesBlocks.forEach(function(block) {
                if (block !== articlesBlock) {
                    block.classList.remove('articles-block-expanded');
                    block.classList.remove('articles-block-left');
                }
            });
            articlesBlock.classList.toggle('articles-block-expanded');
            // Если это последний элемент, добавляем класс для открытия влево
            if (index === articlesBlocks.length - 1) {
                articlesBlock.classList.toggle('articles-block-left');
            }
            event.stopPropagation(); // Останавливаем всплытие события
        });

        // Скрываем текст при любом клике в документе
        document.addEventListener('click', function() {
            articlesBlock.classList.remove('articles-block-expanded');
            // Удаляем класс для открытия влево
            articlesBlock.classList.remove('articles-block-left');
        });
    });

    if (!articlesBlocks.length) {
        console.log('Элементы не найдены');
    }
});
