import React from "react";
import UnderlineTextCenter from "../common/UnderlineTextCenter";
import TitleText from "../common/TitleText";
import { AiFillSafetyCertificate } from "react-icons/ai";


const Thinktoknow = () => {

  const thinktoknowData = [
    {
      head: "Period of stay with ETA Visa and validity period",
      para: "Once your ETA online application is approved, you will be able to travel to Australia numerous times within a one-year of its validity period. You may enter and re-enter Australia as many times as you wish, however, every stay in Australia can last maximum of 90 days.",
    },
    {
      head: "ETA Visa extensions and renewal",
      para: "If you need to stay in Australia longer, you will need to apply for a new ETA Visa.For a further short-term stay in Australia, you may consider applying for a Visitor visa (subclass 600). Please note that you must be outside Australia at the moment of applying fora new eVisa.",
    },
    {
      head: "Necessary documents",
      para: <div className="space-y-2">
        <p>All you need to apply for an ETA
          to Australia is:</p>
        <div><b>1- A valid Passport:</b> A digital copy of a bio
          -data page of a passport valid for at least 6
          months from the date of a planned trip to
          Australia.</div>
        <div><b>2- A valid means of online payment:</b>
          Access to a valid method of online payme
          -nt, e.g., PayPal, credit/debit card, etc.</div>
        <div><b>3- An active email address:</b>Make sure to provide the correct address
          to receive the approved eVisa</div>
      </div>
    },
  ]
  return (
    <div className="container py-12">
      <div className="md:text-center space-y-4">
        <UnderlineTextCenter title="Thinks To Know" />
        <TitleText title="Lorem Ipsum is simply dummy text of the printing and typesetting" />
      </div>
      <div className="grid md:grid-cols-3 gap-12 my-8">
        {
          thinktoknowData.map((e, i) => (
            <div key={i} className=" hover:shadow-primary/30 shadow-lg md:p-4 p-8 rounded-xl space-y-4">
              <h2 className="text-primary font-bold text-xl">{e.head}</h2>
              <div>
                {e.para}
              </div>
            </div>
          ))
        }
      </div>


      <div className="shadow-lg shadow-primary/30 md:px-28 rounded-xl md:py-12 p-4 flex flex-col md:gap-8">
        <h2 className="flex justify-center md:text-xl gap-4 text-primary items-center font-bold"><AiFillSafetyCertificate size={30} />Connection Secure & Data Encrypted (SSL)</h2>
        <div className="grid grid-cols-4 md:gap-8 gap-2 md:py-0 py-4">
          <img src="./assets/images/australia/connection1.png" />
          <img src="./assets/images/australia/connection2.png" />
          <img src="./assets/images/australia/connection3.png" />
          <img src="./assets/images/australia/connection4.png" />
          <img src="./assets/images/australia/connection5.png" />
          <img src="./assets/images/australia/connection6.png" />
          <img src="./assets/images/australia/connection7.png" />
          <img src="./assets/images/australia/connection8.png" />


        </div>
      </div>
    </div>
  );
};

export default Thinktoknow;
