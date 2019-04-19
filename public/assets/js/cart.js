//creates items to be purchased array to pass to paypal.
function createItemsArray() {
    var items = [];
    if (sessionStorage.getItem("wristbands-youth")) {
        items.push({ name: "wristband", description: "Youth Wristband", quantity: sessionStorage.getItem("wristbands-youth"), price: "3", currency: "USD" });
    }
    if (sessionStorage.getItem("wristbands-adult")) {
        items.push({ name: "wristband", description: "Adult Wristband", quantity: sessionStorage.getItem("wristbands-adult"), price: "3", currency: "USD" });
    }
    if (sessionStorage.getItem("keychains")) {
        items.push({ name: "keychain", description: "Keychain", quantity: sessionStorage.getItem("keychains"), price: "4", currency: "USD" });
    }
    if (sessionStorage.getItem("patches")) {
        items.push({ name: "patch", description: "Patch", quantity: sessionStorage.getItem("patches"), price: "4", currency: "USD" });
    }
    if (sessionStorage.getItem("tshirts-youth-small")) {
        items.push({ name: "tshirts", description: "Youth Small Tshirt", quantity: sessionStorage.getItem("tshirts-youth-small"), price: "15", currency: "USD" });
    }
    if (sessionStorage.getItem("tshirts-youth-medium")) {
        items.push({ name: "tshirts", description: "Youth Medium Tshirt", quantity: sessionStorage.getItem("tshirts-youth-medium"), price: "15", currency: "USD" });
    }
    if (sessionStorage.getItem("tshirts-youth-large")) {
        items.push({ name: "tshirts", description: "Youth Large Tshirt", quantity: sessionStorage.getItem("tshirts-youth-large"), price: "15", currency: "USD" });
    }
    if (sessionStorage.getItem("tshirts-youth-xtra")) {
        items.push({ name: "tshirts", description: "Youth Xtra-Large Tshirt", quantity: sessionStorage.getItem("tshirts-youth-xtra"), price: "15", currency: "USD" });
    }
    if (sessionStorage.getItem("tshirts-adult-small")) {
        items.push({ name: "tshirts", description: "Adult Small Tshirt", quantity: sessionStorage.getItem("tshirts-adult-small"), price: "20", currency: "USD" });
    }
    return items;
}

//creates shipping charge to pass to paypal.
function shippingCharge() {
    var shippingCharge = 5;
    var cartTotal = sessionStorage.getItem("total");
    shippingCharge += Math.floor(cartTotal / 50) * 5;
    return shippingCharge;
}

//creates subtotal to pass to paypal.
function finalTotal() {
    var cartTotal = parseInt(sessionStorage.getItem("total"));
    var finalTotal = 0;
    finalTotal = cartTotal + shippingCharge();
    return finalTotal;
}

//Paypal shopping cart
paypal.Button.render({
    // Configure environment
    env: 'production',
    client: {
        production: 'AY6rmAV-0iZlEYq11BJWlyLUCOJJor_Au0CRz_aAhJ8vVl6CTPNWup13O0fBMGKXBSSv147yogBH-Buq'
    },
    // Customize button (optional)
    locale: 'en_US',
    style: {
        size: 'small',
        color: 'gold',
        shape: 'pill',
    },

    // Enable Pay Now checkout flow (optional)
    commit: true,

    // Set up a payment
    payment: function (data, actions) {
        return actions.payment.create({
            redirect_urls: {
                cancel_url: "https://youthrally.org/cart"
            },
            transactions: [{
                amount: {
                    total: finalTotal().toString(),
                    currency: 'USD',
                    details: {
                        subtotal: cartTotal.toString(),
                        tax: '0.00',
                        shipping: shippingCharge().toString(),
                        handling_fee: '0.00',
                        shipping_discount: '0.00',
                        insurance: '0.00'
                    }
                },
                description: 'Youth Rally Store Order.',
                payment_options: {
                    allowed_payment_method: 'INSTANT_FUNDING_SOURCE'
                },
                item_list: {
                    items: createItemsArray(),
                }
            }],
            note_to_payer: 'Contact info@youthrally.org for any questions on your order.'
        });
    },

    // Execute the payment
    onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function () {
            return actions.payment.get().then(function (data) {
                // You should now have `data` and not get an error
                $("#myModal").modal("show");
                sessionStorage.clear();
                setTimeout(function () { window.location = "https://www.youthrally.org"; }, 4000);
            });
        });
    }
}, '#paypal-button');
