
const order = {
    "id": String,
    "intent": String,
    "status": String,
    "userId": Number,
    "payerName": String,
    "payerEmail": String,
    "createdDate": Date,
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
    "billingAddress": {
        "addressLine1": String,
        "adminArea": String,
        "adminArea1": String,
        "postalCode": Number,
        "countryCode": String
    }
}

module.exports = {
    order
}