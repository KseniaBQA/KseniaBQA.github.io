/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Дальше? А дальше зовите меня на собеседование @KBelog (͡° ͜ʖ ͡°)')
})