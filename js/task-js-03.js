const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt("Введите пароль администратора");
switch (message) {
    case ADMIN_PASSWORD: 
        message = "Добро пожаловать!";
        alert(message);
        break;
    case null: 
        message = "Отменено пользователем!";
        alert(message);
        break;
    default:
        message = "Доступ запрещен, неверный пароль!";
        alert(message);
        break;
}