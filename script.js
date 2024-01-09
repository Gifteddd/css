// Получаем все кнопки с классом .collapsible
var coll = document.getElementsByClassName("collapsible");

// Итерируем по кнопкам и добавляем обработчик событий
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        // Тогглим класс 'active' для текущей кнопки
        this.classList.toggle("active");

        // Получаем элемент .content, который находится после кнопки
        var content = this.nextElementSibling;

        // Если элемент видимый, скрываем его, и наоборот
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
