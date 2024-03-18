const Store = {
    files: [], // какое-то хранилище файлов, для примера так
};

document.getElementById('fileInput').addEventListener('change', handleChange);

// при выборе файлов, мы будем их добавлять
function handleChange(e) {
    // Очищаем массив файлов
    Store.files = [];

    // если не выбрали файл и нажали отмену, то ничего не делать
    if (!e.target.files.length) {
        return;
    }

    // создаем новый массив с нашими файлами
    const files = Object.keys(e.target.files).map((i) => e.target.files[i]);

    addFiles(files); // добавляем файлы в хранилище

    // отображаем список файлов
    displayFiles(files);

    // сбрасываем форму, чтобы очистить поле ввода
    e.target.form.reset();
}

function addFiles(files) {
    // добавляем файлы в общую кучу
    Store.files = Store.files.concat(files);
}

// удалить файл из хранилища, например по индексу в массиве
function removeFile(index) {
    // удаляем файл по индексу
    Store.files.splice(index, 1);
    // перерисовываем список файлов
    displayFiles(Store.files);
}

// отображение списка файлов
function displayFiles(files) {
    const fileNamesContainer = document.querySelector('.file-names-container');
    fileNamesContainer.innerHTML = ''; // очищаем контейнер

    files.forEach(function(file, index) {
        const fileWrapper = createFileElement(file.name, index);
        fileNamesContainer.appendChild(fileWrapper);
    });
}

// создание элемента файла
function createFileElement(fileName, index) {
    const fileWrapper = document.createElement('div');
    fileWrapper.classList.add('file-wrapper');

    const fileNameDiv = document.createElement('div');
    const paragraph = document.createElement('div');
    paragraph.textContent = fileName;
    fileNameDiv.appendChild(paragraph);

    const deleteButton = document.createElement('span');
    deleteButton.innerHTML = '<span class="path1"></span><span class="path2"></span><span class="path3"></span>'
    deleteButton.classList.add('icon');
    deleteButton.classList.add('icon-cancel');
    deleteButton.classList.add('delete-button');

    // Удаляем файл из хранилища и контейнера при нажатии на кнопку удаления
    deleteButton.addEventListener('click', function() {
        removeFile(index);
    });

    fileNameDiv.appendChild(deleteButton); // Добавляем кнопку удаления внутри fileNameDiv
    fileWrapper.appendChild(fileNameDiv);

    return fileWrapper;
}

// если надо послать файлы на сервер, формируем FormData с файлами
// const formData = getFilesFormData(Store.files);
function getFilesFormData(files) {
    const formData = new FormData();

    files.map((file, index) => {
        formData.append(`file${index + 1}`, file);
    });

    return formData;
}


document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (отправку)

    // Формируем FormData с файлами из хранилища
    const formData = getFilesFormData(Store.files);

    // Далее вы можете использовать объект formData для отправки данных на сервер,
    // например, с помощью fetch или другого метода

    // Пример отправки данных на сервер с использованием fetch:
    fetch('URL_вашего_сервера', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            // Обрабатываем ответ от сервера
            console.log('Сервер ответил:', response);
        })
        .catch(error => {
            // Обрабатываем ошибку
            console.error('Произошла ошибка:', error);
        });
});
