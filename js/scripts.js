// Business Logic

// function to calculate pizza price

function Pizza(size, crust, topping){
    this.sizes = size;
    this.crusts = crust;
    this.toppings = topping;
    this.totalPrice = function(){
        // return 
  }
}
/*
// Try an array for the prices
var sizePrices = [50, 75, 100];
var crustPrices = [25, 40, 80];
var toppingsPrices = [20, 30, 15, 5];
*/



// var conceptName = $('#aioConceptName').find(":selected").text();
// for radioButton $("input[name='optradio']:checked").val();



$(document).ready(function(){
    $("#new_order").submit(function(e){
        e.preventDefault();
        var pizzaSize = $("#pizzaSizeOptions").find(":selected").text();
        var crustType = $("#crustOptions").find(":selected").text();
        var toppingsOption = $("input[name='toppings']:checked").val();
        
        var newPizza = new Pizza(pizzaSize, crustType, toppingsOption);
        // alert(newPizza.sizes);
        
        prices = {
            "Small": 20,
            "Medium": 10,
            "Large": 15,
            "Crispy": 25,
            "Stuffed": 5,
            "Gluton-free": 35,
            "Mushrooms": 40,
            "Pepperoni": 25,
            "Green Pepper": 3
        }

        totalAmount = prices[newPizza.sizes] + prices[newPizza.crusts] + prices[newPizza.toppings];

        alert(totalAmount);
        
       
    });
});