function getData() {
    var getPrice = document.getElementsByClassName("product-price");
    var getQuantity = document.getElementsByClassName("product-quantity");
    var getTotal = document.getElementsByClassName("total-price");

    var subTotal = 0;

    for (var i = 0; i < tableRow - 4; i++) {
        var price = getPrice[i].value;
        var quantity = getQuantity[i].value;
        var total = price * quantity;
        getTotal[i].value = total;

        subTotal = subTotal + parseInt(getTotal[i].value);
    }

    //console.log(subTotal);
    document.getElementById("subTotal").value = subTotal;

    calTotal();
}

function calTotal() {
    var totalAmount = 0;
    var subTotal = parseInt(document.getElementById("subTotal").value);

    var discount = parseInt(document.getElementById("discount").value);
    //console.log(subTotal);
    var calDiscount = (discount * subTotal) / 100;
    totalAmount = subTotal - calDiscount;

    //console.log(calDiscount);

    document.getElementById("finaltotal").value = totalAmount;

}