document.getElementById('coupon-input').addEventListener('keyup',function(event){


    const text = event.target.value;
    const applyBtn = document.getElementById('coupon-apply-btn');
    const couponText = document.getElementById('sell-coupon');
    if(text === couponText.innerText)
    {
        applyBtn.removeAttribute('disabled');
        applyBtn.addEventListener('click',function(){
            event.target.value ='';
            applyBtn.setAttribute('disabled',true);
            
            const totalPrice = getValueById('total-price');
            const discount = 0.2 * totalPrice;
            const discountTwoDecimal = discount.toFixed(2);
            const newTotal = totalPrice - discount;
            const newTotalTwoDecimal = newTotal.toFixed(2);
            setValueById('total-discount',discountTwoDecimal);
            setValueById('total-payment',newTotalTwoDecimal);

        })
    }
    else{
        applyBtn.setAttribute('disabled',true);
    }
})