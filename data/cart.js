export const cart = [{
    productId: '3fdfe8d6-9a15-4979-b459-585b0d0545b9',
    quantity: 1
    },
    {
    productId: 'c2a82c5e-aff4-435f-9975-517cfaba2ece',
    quantity: 2
    },
    ];

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    })

    if(matchingItem) {
        matchingItem.quantity++;
    }
    else {
        cart.push({
            productId: productId,
            quantity:1
        })
    }
}