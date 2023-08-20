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
            console.log('20% korte hobe');
        })
    }
    else{
        applyBtn.setAttribute('disabled',true);
    }
})