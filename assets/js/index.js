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
})

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

$("#txtCustomerId,#txtCustomerName,#txtAddress,#txtPhoneNo,#txtEmail").on('keydown',function (event){
    if (event.key=Tab){
        event.preventDefault();
    }
});


/*---------------------------Item-------------------------------*/

$('#btnSaveItem').click(function () {
    saveItem();
});

function saveItem() {
    $('#tblItem>tr').off('click');

    let itemBrand = $('#cmbBrandName').val();
    let itemCode = $("#txtCode").val();
    let itemName = $("#txtItemName").val();
    let itemDescription = $("#txtDescription").val();
    let itemNumber = $("#txtNumber").val();
    let itemUnit = $("#txtUnitPrice").val();
    let itemGrand = $("#txtGrandTotal").val();

    let row = `<tr><td>${itemBrand}</td><td>${itemCode}</td><td>${itemName}</td><td>${itemDescription}</td><td>${itemNumber}</td><td>${itemUnit}</td><td>${itemGrand}</td></tr>`;

    $('#tblItem').append(row);

    clearItemTextFields();

    $('#tblItem>tr').click(function () {
        let brand = $(this).children('td:eq(0)').text();
        let code = $(this).children('td:eq(1)').text();
        let iName = $(this).children('td:eq(2)').text();
        let description = $(this).children('td:eq(3)').text();
        let number = $(this).children('td:eq(4)').text();
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
    $("#txtNumber").val("");
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
        $("#txtNumber").focus();
    }
});
$("#txtNumber").on('keydown',function (event) {
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

$("#cmbBrandName,#txtCode,#txtItemName,#txtDescription,#txtNumber,#txtUnitPrice,#txtGrandTotal").on('keydown',function (event){
    if (event.key=Tab){
        event.preventDefault();
    }
});

/*--------------------------Order-------------------------------------*/