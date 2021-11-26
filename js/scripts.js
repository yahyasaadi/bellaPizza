// Business Logic

// function to calculate pizza price

function Pizza(size, crust, topping){
    this.sizes = size;
    this.crusts = crust;
    this.toppings = topping;
    this.totalPrice = function(){
        return this.sizePrice + this.crustPrice + this.toppingsPrice;
  }
}

// Try an array for the prices
var sizePrices = [50, 75, 100];
var crustPrices = [25, 40, 80];
var toppingsPrices = [20, 30, 15, 5];

// var conceptName = $('#aioConceptName').find(":selected").text();
// for radioButton $("input[name='optradio']:checked").val();

$(document).ready(function(){
    $("#new_order").submit(function(e){
        e.preventDefault();
        var pizzaSize = $("#pizzaSizeOptions").find(":selected").text();
        var crustType = $("#crustOptions").find(":selected").text();
        var toppingsOption = $("input[name='toppings']:checked").val();
        var newPizza = new Pizza(pizzaSize, crustType, toppingsOption);

        if (newPizza.sizes === "Small" && newPizza.crusts === "Crispy" && newPizza.toppings === "Pepperoni"){
            alert(sizePrices[0] + crustPrices[0] + toppingsPrices[1]);
        } else {
            alert("Nadda!");
        }
        // consit
        // alert(newPizza.toppingsOption);
    });
});