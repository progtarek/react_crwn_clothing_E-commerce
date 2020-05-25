import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function Stripe({ price }) {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_jGLpfNa81MlKd75XF7IS4XLk00RSVuHIbC';

  const onToken = (token) => {
    console.log('token', token);
    alert('Payment successful');
  };
  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='CRWN clothing ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publicKey}
      />
    </div>
  );
}
