// Business Logic

// function to calculate pizza price

function Pizza(size, crust, toppings){
    this.sizePrice = size;
    this.crustPrice = crust;
    this.toppingsPrice = toppings;
    this.totalPrice = function(){
        return this.sizePrice + this.crustPrice + this.toppingsPrice;
  }
}

// Try an array for the prices
// var conceptName = $('#aioConceptName').find(":selected").text();
// for radioButton $("input[name='optradio']:checked").val();

$(document).ready(function(){
    $("#new_order").submit(function(e){
        e.preventDefault();
        var pizzaSize = $("#pizzaSizeOptions").find(":selected").text();
        var crustType = $("#crustOptions").find(":selected").text();
        var toppingsOption = $("input[name='toppings']:checked").val();
        alert(toppingsOption);
    });
});