// card
function cardCalculation(elementId,productTitle){
    const productPrice = getValueById(elementId);
    const productName = getTextById(productTitle);
    
    const previousTotalPrice = getValueById('total-price');
    
    const newTotalPrice = previousTotalPrice + productPrice;
    const newTotalPriceTwoDecimal = newTotalPrice.toFixed(2);

    setValueById('total-price',newTotalPriceTwoDecimal);
    setValueById('total-payment',newTotalPriceTwoDecimal);
    const  purchaseBtn = document.getElementById('purchase-btn');
    if(newTotalPrice >= 200)
    {
        purchaseBtn.removeAttribute('disabled');
    
    }

    // add to cart entry
    cartEntry(productName);
    

}


// cart entry
function cartEntry(productName){
    console.log(productName)
    const cartEntry = document.getElementById('cart-entry');
    const count = cartEntry.childElementCount;

    const p = document.createElement('p');

    p.innerHTML =`${count+1}. ${productName}`;
    cartEntry.appendChild(p);

}

 