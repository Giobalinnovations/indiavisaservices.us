import apiEndpoint from '@/services/apiEndpoint';
import { PayPalButtons } from '@paypal/react-paypal-js';

export default function PaypalPayment() {
  // const serverUrl = 'http://localhost:8090';
  // const createOrder = data => {
  //   // Order is created on the server and the order id is returned
  //   return fetch('/my-server/create-paypal-order', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     // use the "body" param to optionally pass additional order information
  //     // like product skus and quantities
  //     body: JSON.stringify({
  //       product: {
  //         description: 'product',
  //         cost: '399.00',
  //       },
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(order => order.id);
  // };
  // const onApprove = data => {
  //   // Order is captured on the server and the response is returned to the browser
  //   return fetch('/my-server/capture-paypal-order', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       orderID: data.orderID,
  //     }),
  //   }).then(response => response.json());
  // };
  return (
    <PayPalButtons
      createOrder={async () => {
        const res = await fetch(
          `https://nqcfsdj9u6.us-east-1.awsapprunner.com${apiEndpoint.INDIA_VISA_PAYMENT}/13`,
          {
            method: 'PUT',
          }
        );
        const data = await res.json();
        return data.id;
      }}
      onApprove={(data, actions) => {
        console.log(data);
        actions.order.capture();
      }}
      onCancel={(data, actions) => {
        console.log(data);
      }}
    />
  );
}
