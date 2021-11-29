// Business Logic

// function to calculate pizza price

function Pizza(size, crust, topping){
    this.sizes = size;
    this.crusts = crust;
    this.toppings = topping;
    this.prices = {
        "Small": 100,
        "Medium": 150,
        "Large": 200,
        "Crispy": 50,
        "Stuffed": 55,
        "Gluton-free": 60,
        "Mushrooms": 30,
        "Pepperoni": 40,
        "Green Pepper": 20
    }
}


Pizza.prototype.totalPrice = function(){
    return this.prices[this.sizes] + this.prices[this.crusts] + this.prices[this.toppings];
}



$(document).ready(function(){


    prices = {
        "Small": 100,
        "Medium": 150,
        "Large": 200,
        "Crispy": 50,
        "Stuffed": 55,
        "Gluton-free": 60,
        "Mushrooms": 30,
        "Pepperoni": 40,
        "Green Pepper": 20
    }

    // NOT WORKING AS WANTED CHECK
    $("#pizzaSizeOptions").click(function(){
        var pizzaSize = $("#pizzaSizeOptions").find(":selected").text();
        $("#sizePrice").append("<p><span class='order'>" + prices[pizzaSize] + "</span></p>");
        //alert(prices[pizzaSize]);
        var pizzaSize = $("#pizzaSizeOptions").find(":selected").text();
    });

    $("#crustOptions").click(function(){
        var crustType = $("#crustOptions").find(":selected").text();
        $("#crustPice").append("<p><span class='order'>" + prices[crustType] + "</span></p>");

    });

    // $("#toppingsOptions").click(function(){
    //     var toppingsOption = $("input[name='toppings']:checked").val();
    //     $("#toppingsPrice").append("<p><span class='order'>" + prices[toppingsOption] + "</span></p>");

    // });

    $("#new_order").submit(function(e){
        e.preventDefault();
        var pizzaSize = $("#pizzaSizeOptions").find(":selected").text();
        var crustType = $("#crustOptions").find(":selected").text();
        var toppingsOption = $("input[name='toppings']:checked").val();
        
        var newPizza = new Pizza(pizzaSize, crustType, toppingsOption);
        
        

        // totalAmount = prices[newPizza.sizes] + prices[newPizza.crusts] + prices[newPizza.toppings];
        statement = "Your order total is " + newPizza.totalPrice();
        $("ul#ordersList").append("<li><span class='order'>" + statement + "</span></li>");

        var pizzaSize = $("#pizzaSizeOptions").find(":selected").text();
        var crustType = $("#crustOptions").find(":selected").text();
        var toppingsOption = $("input[name='toppings']:checked").val();
       
    });

    $("#delivery").click(function(){
        var deliveryOption = $("#delivery").find(":selected").text();
        if (deliveryOption === "Deliver"){
            var location = prompt("Where do you want it delivered? ");
            alert("Your pizza will be delivered at: " + location);
        } else if (deliveryOption === "Pick Up") {
            alert("See you soon.");
        } else {
            alert("Please pick a delivery option.");
        }
        //alert(prices[pizzaSize]);
        var pizzaSize = $("#pizzaSizeOptions").find(":selected").text();
    });

     // TESTING
     $("#checkOutForm").submit(function(e){
        e.preventDefault();
        while ($("#ordersList").length > 0){
            totalBill = totalBill + newPizza.totalPrice();
        }
    });
    // End of testing

});