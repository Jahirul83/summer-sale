// card
function cardCalculation(elementId, productTitle) {
    const productPrice = getValueById(elementId);
    const productName = getTextById(productTitle);

    const previousTotalPrice = getValueById('total-price');
    const previousTotalDiscount = getValueById('total-discount');
    const applyBtn = document.getElementById('coupon-apply-btn');

    // console.log(previousTotalDiscount);

    const newTotalPrice = previousTotalPrice + productPrice;
    const newTotalPriceDiscount = newTotalPrice - previousTotalDiscount;

    const newTotalPriceTwoDecimal = newTotalPrice.toFixed(2);
    const newTotalPriceDiscountTwoDecimal = newTotalPriceDiscount.toFixed(2);

    setValueById('total-price', newTotalPriceTwoDecimal);
    setValueById('total-payment', newTotalPriceDiscountTwoDecimal);
    const purchaseBtn = document.getElementById('purchase-btn');
    if (newTotalPrice > 0) {
        purchaseBtn.removeAttribute('disabled');

    }

    if(newTotalPrice >= 200)
    {
        applyBtn.removeAttribute('disabled')

    }

    // add to cart entry
    cartEntry(productName);


}


// cart entry
function cartEntry(productName) {
    // console.log(productName)
    const cardEntryDiv = document.getElementById('card-entry-div');
    const count = cardEntryDiv.childElementCount;

    const p = document.createElement('p');

    p.classList.add('font-semibold');

    p.innerHTML = `${count + 1}. ${productName}`;
    cardEntryDiv.appendChild(p);

}

