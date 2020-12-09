const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let pwd = prompt('Введите пароль');
if (pwd === null) {
  message = 'Отменено пользователем!';
} else if (pwd === 'jqueryismyjam') {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
