document.addEventListener("DOMContentLoaded", function () {
    const menuHead = document.getElementById('menu-head');
    if (!menuHead) return;

    const texts = ["about", "ikuza47", "<3", "как дела?", "есть что интересное?"];
    let currentText = '';
    let charIndex = 0;

    // Получаем случайную фразу, не такую же как сейчас
    function getRandomText() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * texts.length);
        } while (texts[randomIndex] === currentText && texts.length > 1);

        currentText = texts[randomIndex];
        return currentText;
    }

    function typeText() {
        const targetText = currentText;

        if (charIndex <= targetText.length) {
            menuHead.innerHTML = targetText.substring(0, charIndex)+
            (charIndex < targetText.length ? '<span style="color: #888;"><</span>' : '');
            charIndex++;
            if (charIndex > targetText.length) {
                setTimeout(typeText, 1500); // пауза перед удалением
                return;
            }
        } else {
            // Завершаем печать и готовимся к следующей фразе
            getRandomText(); // получаем новую случайную фразу
            charIndex = 0;

            // Убираем символ < и очищаем текст мгновенно
            menuHead.textContent = ''; // мгновенная очистка

            // Через небольшую паузу начинаем печатать новую фразу
            typeText(); // можно изменить на своё значение
            return;
        }

        // Продолжаем печать
        setTimeout(typeText, 100); // скорость печати
    }

    getRandomText();
    typeText();
});