let main = document.getElementById('main');
let customer = document.getElementById('customer');
let item = document.getElementById('item');
let order = document.getElementById('order');
customer.style.display = 'none';
item.style.display = 'none';
order.style.display = 'none';
main.style.display = 'block';

let btnHome = document.getElementById('btnHome');
btnHome.addEventListener('click', function () {
    // console.log("Home click");
    customer.style.display = 'none';
    item.style.display = 'none';
    order.style.display = 'none';
    main.style.display = 'block';
})


let btnCustomer = document.getElementById('btnCustomer');
btnCustomer.addEventListener('click', function () {
    // console.log("Customer clicked");
    main.style.display = 'none';
    item.style.display = 'none';
    order.style.display = 'none';
    customer.style.display = 'block';
    $("#txtCustomerId").focus();
})


let btnItem = document.getElementById('btnItem');
btnItem.addEventListener('click', function () {
    // console.log("Item clicked");
    main.style.display = 'none';
    customer.style.display = 'none';
    order.style.display = 'none';
    item.style.display = 'block';
    $("#txtCode").focus();
})


let btnOrder = document.getElementById('btnOrder');
btnOrder.addEventListener('click', function () {
    // console.log("Order clicked");
    main.style.display = 'none';
    customer.style.display = 'none';
    item.style.display = 'none';
    order.style.display = 'block';
    setCurrentDate();
    setOrderId();
    addItemToDropDown();
    addCustomerToDropDown();
})


var items = new Array();
var customers = new Array();
var orders = new Array();

/*-----------------------Customer---------------------------------*/

$('#btnSaveCustomer').click(function () {
    saveCustomer();
});

function saveCustomer() {
    $('#tblCustomer>tr').off('click');

    let cusId = $('#txtCustomerId').val();
    let cusName = $("#txtCustomerName").val();
    let cusAddress = $("#txtAddress").val();
    let cusMobile = $("#txtPhoneNo").val();
    let cusEmail = $("#txtEmail").val();

    let row = `<tr><td>${cusId}</td><td>${cusName}</td><td>${cusAddress}</td><td>${cusMobile}</td><td>${cusEmail}</td></tr>`;

    $('#tblCustomer').append(row);

    let customer = {
        cusId:cusId,
        cusName:cusName,
        cusAddress:cusAddress,
        cusMobile:cusMobile,
        cusEmail:cusEmail,
    }

    customers.push(customer);

    clearCustomerTextFields();

    $('#tblCustomer>tr').click(function () {
        let id = $(this).children('td:eq(0)').text();
        let name = $(this).children('td:eq(1)').text();
        let address = $(this).children('td:eq(2)').text();
        let phoneNo = $(this).children('td:eq(3)').text();
        let email = $(this).children('td:eq(4)').text();
        // console.log(id,name,address,phoneNo,email);

    });
}

function clearCustomerTextFields() {
    // console.log("clear");
    $('#txtCustomerId').val("");
    $("#txtCustomerName").val("");
    $("#txtAddress").val("");
    $("#txtPhoneNo").val("");
    $("#txtEmail").val("");

    $("#txtCustomerId").focus();
}

$("#txtCustomerId").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#txtCustomerName").focus();
    }
});
$("#txtCustomerName").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#txtAddress").focus();
    }
});
$("#txtAddress").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#txtPhoneNo").focus();
    }
});
$("#txtPhoneNo").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#txtEmail").focus();
    }
});

$("#txtEmail").on('keydown',function (event) {
    if (event.key=="Enter"){
        saveCustomer();
    }
});

// $("#txtCustomerId,#txtCustomerName,#txtAddress,#txtPhoneNo,#txtEmail").on('keydown',function (event){
//     if (event.key=Tab){
//         event.preventDefault();
//     }
// });
/*---------------------------Item-------------------------------*/

$('#btnSaveItem').click(function () {
    saveItem();
});

function saveItem() {
    $('#tblItem>tr').off('click');

    let itemBrand = $("#cmbBrandName option:selected").text();
    let itemCode = $("#txtCode").val();
    let itemName = $("#txtItemName").val();
    let itemDescription = $("#txtDescription").val();
    let itemQty = $("#txtQty").val();
    let itemUnit = $("#txtUnitPrice").val();
    let itemGrand = $("#txtGrandTotal").val();

    let row = `<tr><td>${itemBrand}</td><td>${itemCode}</td><td>${itemName}</td><td>${itemDescription}</td><td>${itemQty}</td><td>${itemUnit}</td><td>${itemGrand}</td></tr>`;

    $('#tblItem').append(row);

    let item = {
        brand:itemBrand,
        code:itemCode,
        name:itemName,
        description:itemDescription,
        qty:itemQty,
        unitPrice:itemUnit,
        total:itemGrand
    }
    items.push(item);

    clearItemTextFields();

    $('#tblItem>tr').click(function () {
        let brand = $(this).children('td:eq(0)').text();
        let code = $(this).children('td:eq(1)').text();
        let iName = $(this).children('td:eq(2)').text();
        let description = $(this).children('td:eq(3)').text();
        let qty = $(this).children('td:eq(4)').text();
        let unit = $(this).children('td:eq(5)').text();
        let grand = $(this).children('td:eq(6)').text();
    });


}

function clearItemTextFields() {
    // console.log("clear");
    $('#cmbBrandName').val("UnBrand");
    $("#txtCode").val("");
    $("#txtItemName").val("");
    $("#txtDescription").val("");
    $("#txtQty").val("");
    $("#txtUnitPrice").val("");
    $("#txtGrandTotal").val("");

    $("#txtCustomerId").focus();
}

$("#txtCode").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#txtItemName").focus();
    }
});
$("#txtItemName").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#txtDescription").focus();
    }
});
$("#txtDescription").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#txtQty").focus();
    }
});
$("#txtQty").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#txtUnitPrice").focus();
    }
});

$("#txtUnitPrice").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#txtGrandTotal").focus();
    }
});
$("#txtGrandTotal").on('keydown',function (event) {
    if (event.key=="Enter"){
        saveItem();
    }
});

//
// $("#cmbBrandName,#txtCode,#txtItemName,#txtDescription,#txtNumber,#txtUnitPrice,#txtGrandTotal").on('keydown',function (event){
//     if (event.key=Tab){
//         event.preventDefault();
//     }
// });

/*--------------------------Order-------------------------------------*/

function setCurrentDate(){
    let orderDate = $('#orderDate');
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    orderDate.val(today);
}

function setOrderId(){
    if (orders.length == 0){
        $('#orderId').val(1);
    }else{
        let orderNo = orders.length;
        $('#orderId').val(orderNo);
    }
}

function addItemToDropDown(){
    for(var i = 0; i<items.length;i++){
        $('<option/>').val(items[i].code).html(items[i].code).appendTo('#cmbItem');
    }
}

$('#cmbItem').change(function (){
    let itemCode = $("#cmbItem option:selected").text();
    let itemName;
    for(let i = 0; i<items.length;i++){
        if (itemCode === items[i].code){
            itemName = items[i].name;
        }
    }
    $('#orderItemName').val(itemName);
});


function addCustomerToDropDown(){
    console.log("Customer drop down");
    for(let i = 0; i<customers.length;i++){
        console.log("Customer ID : "+customers[i].cusId);
        $('<option/>').val(customers[i].cusId).html(customers[i].cusId).appendTo('#cmbCustomer');
    }
}


$('#cmbCustomer').change(function (){
    console.log("combo customer state change");
    let cusId = $("#cmbCustomer option:selected").text();
    console.log("State change Id : "+cusId);
    for(let i = 0; i<customers.length;i++){
        if (cusId === customers[i].cusId){
            $('#orderCustomerName').val(customers[i].cusName);
        }
    }
});