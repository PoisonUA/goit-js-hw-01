let deliveryCount;
let deliveryPrice;

deliveryCount = prompt("Укажите страну в которую необходимо осуществить доставку");
if (deliveryCount==null || !isNaN(deliveryCount)) {
    console.log("Название страны указано в неправильном формате");
    }
    else {
        deliveryCount = deliveryCount.charAt(0).toUpperCase() + deliveryCount.slice(1).toLowerCase();

        switch (deliveryCount) {
            case "Китай": 
                deliveryPrice = 100;
                break;
            case "Чили": 
                deliveryPrice = 250;
                break;
            case "Австралия": 
                deliveryPrice = 170;
                break;
            case "Индия": 
                deliveryPrice = 80;
                break;
            case "Ямайка": 
                deliveryPrice = 120;
                break;
            default:
                alert("В вашей стране доставка не доступна");
                break;
        }
        if (!deliveryPrice) {
            console.log("Спасибо за обращение в нашу службу");
        }
            else {
                console.log("Доставка в", deliveryCount, "будет стоить", deliveryPrice, "кредитов");
            }
    }
