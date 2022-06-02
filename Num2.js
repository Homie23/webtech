function getDiscount(){
    let discount = prompt('Цена на яблоки - 12,50. Завтра на них будет скидка. \nУкажите скидку: (%)');
    if (isNaN(discount)) {
        alert('Пожалуйста - введите скидку в числовом формате');
        return getDiscount();
    } else {
        let price = 12.50;
        let finalPrice = price - price * (discount / 100);
        return finalPrice;
    }
}
 
alert(`Цена яблок с учётом скидки: ${getDiscount()}`);