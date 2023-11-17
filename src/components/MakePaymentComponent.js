"use client";
import React from "react";

const MakePaymentComponent = () => {
  const makePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taxAmt: 100,
      }),
    });
    // console.log("data:", data);
    // const data2 = data.json();
    // console.log("data2:", data2);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "india-travelservices.com",
      currency: data.currency,
      amount: 100,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image:
        "https://www.india-travelservices.com/_next/image?url=%2Fimages%2Fcommon%2Flogo.png&w=1080&q=75",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert("Razorpay Response: " + response.razorpay_payment_id);
        //alert(response.razorpay_order_id);
        //alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gagan Vashishth",
        email: "vashishthgagan@gmail.com",
        contact: "8058078478",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  return (
    <div className="space-x-4 text-center">
      <button
        className="formbtnBorder"
        type="button"
        onClick={() => makePayment()}
      >
        Pay Now
      </button>
      <button
        type="submit"
        className="formbtn cursor-pointer inline-flex items-center gap-3 "
      >
        Pay Later
      </button>
    </div>
  );
};

export default MakePaymentComponent;