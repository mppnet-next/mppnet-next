(function () {
    'use strict';

    // Регистрация модуля через API
    MPPNetNext.registerModule("Example Module", () => {
        console.log("Модуль Example Module запущен!");

        // Добавление функционала
        const button = document.createElement("button");
        button.textContent = "Нажми меня";
        button.style.position = "fixed";
        button.style.bottom = "20px";
        button.style.left = "20px";
        button.style.zIndex = "1000";
        document.body.appendChild(button);

        button.addEventListener("click", () => {
            alert("Пример модуля работает!");
        });
    });
})();
