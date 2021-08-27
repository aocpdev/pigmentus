
const order = {
    "id": String,
    "intent": String,
    "status": String,
    "userId": Number,
    "userName": String,
    "fullName": String,
    "createdDate": Date,
    "transactionType": String,
    "shippingAddress": {
        "addressLine1": String,
        "adminArea": String,
        "adminArea1": String,
        "postalCode": Number,
        "countryCode": String
    },
    "items": [],
    "paypalFee": Number,
    "employeeCommission": Number,

}


module.exports = {
    order
}