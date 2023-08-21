function getValueById(elementId) {
    const ElementSpan = document.getElementById(elementId);
    const productPriceString = ElementSpan.innerText;
    const productPrice = parseFloat(productPriceString);
    return productPrice;
}

function setValueById(elementId, newTotalPrice) {
    const ElementSpan = document.getElementById(elementId);
    ElementSpan.innerText = newTotalPrice;
}

function getTextById(elementId) {
    const ElementSpan = document.getElementById(elementId);
    const productTitle = ElementSpan.innerText;
    return productTitle;

}