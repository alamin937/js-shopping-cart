function productArea(product,price,increasing){
    const inputArea = document.getElementById(product+'-number');

    const inputValue = inputArea.value;

   if(increasing == true){
    inputArea.value = parseInt(inputValue) + 1;
   }
   else if(inputValue > 0){
    inputArea.value = parseInt(inputValue) - 1;
   }
   const productTotal = document.getElementById(product+'-money');
   productTotal.innerText = parseInt(inputArea.value) * price;

   calculateTotal();
}

function getInput(product){
    const inputArea = document.getElementById(product+'-number');

    const inputValue = inputArea.value;

    return inputValue;
}

function calculateTotal(){
    const total1 = getInput('phone')*1219;
    const total2 = getInput('case')*59;
    const subTotal = total1 + total2;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-area').innerText = subTotal;
    document.getElementById('tax-area').innerText = tax;
    document.getElementById('total-area').innerText = totalPrice;
}
// phone area
document.getElementById('phone-plus').addEventListener('click', function(){
   
    productArea('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
   
    productArea('phone',1219,false);
})


// case area
document.getElementById('case-plus-button').addEventListener('click', function(){
   
    productArea('case',59,true);
})
document.getElementById('case-minus-button').addEventListener('click', function(){
   
    productArea('case',59,false);
})