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