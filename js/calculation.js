function cardCalculation(){
    const cardElementSpan = document.getElementById('first-card-span');
    const productPriceString = cardElementSpan.innerText;
    const productPrice = parseFloat(productPriceString);
    
    const totalPriceSpan = document.getElementById('total-price');
    const previousTotalPriceString = totalPriceSpan.innerHTML;
    const previousTotalPrice= parseFloat(previousTotalPriceString);
    console.log(previousTotalPrice);

    const newTotalPrice = previousTotalPrice + productPrice;
    const newTotalPriceTwoDecimal = newTotalPrice.toFixed(2);
    console.log(newTotalPrice);

    totalPriceSpan.innerHTML = newTotalPriceTwoDecimal;
}