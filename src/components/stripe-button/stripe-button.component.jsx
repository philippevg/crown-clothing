import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H5fUiD4IlNb7CvHLymTNxhEvsrS01gw7E0JiiufDNjSxPrrT9jjX2wpfOyEcALWoEDHvi3CuVWEanbfTXYupwg800TQzem6rY';

    const onToken = token => {
        console.log(token)
        alert('payment succesfull!')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    )
}

export default StripeCheckoutButton;