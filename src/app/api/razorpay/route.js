//razorpay.js
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import shortid from 'shortid';

export async function POST(req, res) {
  const { taxAmt } = req.body;

  if (req.method === 'POST') {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: 'rzp_live_gZyZxmhtbN2hIk',
      key_secret: 'eQgunonx3faQmlxEM8doPPZ0',
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    // Also, check the amount and currency on the backend (Security measure)
    const payment_capture = 1;
    const amount = taxAmt;
    const currency = 'INR';
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      return NextResponse.json(
        {
          message: 'message ok',
          id: response.id,
          currency: response.currency,
          amount: response.amount,
          data: {
            id: response.id,
            currency: response.currency,
            amount: response.amount,
          },
        },
        { status: 201 }
      );
    } catch (err) {
      return NextResponse.json({ message: 'message ok' }, { status: 400 });
    }
  } else {
    // Handle any other HTTP method
  }
}
