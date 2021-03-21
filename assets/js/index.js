let main = document.getElementById('main');
let customer = document.getElementById('customer');
let item = document.getElementById('item');
let order = document.getElementById('order')
customer.style.display = 'none';
item.style.display = 'none';
order.style.display='none';
main.style.display = 'block';

let btnHome = document.getElementById('btnHome');
btnHome.addEventListener('click',function (){
    console.log("Home click");
    customer.style.display = 'none';
    item.style.display = 'none';
    order.style.display='none';
    main.style.display = 'block';
})


let btnCustomer = document.getElementById('btnCustomer');
btnCustomer.addEventListener('click',function (){
    console.log("Customer clicked");
    main.style.display = 'none';
    item.style.display = 'none';
    order.style.display='none';
    customer.style.display = 'block';
})


let btnItem = document.getElementById('btnItem');
btnItem.addEventListener('click',function (){
    console.log("Item clicked");
    main.style.display='none';
    customer.style.display= 'none';
    order.style.display='none';
    item.style.display= 'block';
})


let btnOrder = document.getElementById('btnOrder');
btnOrder.addEventListener('click',function (){
    console.log("Order clicked");
    main.style.display = 'none';
    customer.style.display= 'none';
    item.style.display= 'none';
    order.style.display='block';
})


