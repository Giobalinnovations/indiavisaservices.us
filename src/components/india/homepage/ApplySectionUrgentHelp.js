import { BiMailSend } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';

const ApplySectionUrgentHelp = () => {
  const travelInfoData = [
    {
      id: 1,
      title: 'Contact Us',
    },
    {
      id: 2,
      title: 'Urgent Travel',
    },
    {
      id: 3,
      title: 'eTourist Travel',
    },
    {
      id: 1,
      title: 'Emergency Travel',
    },
    {
      id: 2,
      title: 'eBusiness Travel',
    },
    {
      id: 3,
      title: 'Travel to Delhi',
    },
    {
      id: 3,
      title: 'Indian Tourism',
    },
  ];
  const cardData = [
    {
      id: 1,
      imgSrc: '/assets/images/india/common/paypal.png',
    },
    {
      id: 2,
      imgSrc: '/assets/images/india/common/mastercard-secured.png',
    },
    {
      id: 3,
      imgSrc: '/assets/images/india/common/varified.png',
    },
    {
      id: 4,
      imgSrc: '/assets/images/india/common/mastercard.png',
    },
  ];
  return (
    <>
      {/* urgent help satrt  */}
      <div>
        <h2 className="py-2 text-[0.9rem] font-semibold text-center text-white rounded-t bg-secondary">
          TRAVEL INFORMATION
        </h2>
        <div className="divide-y-[1px]">
          {travelInfoData.map((e, i) => (
            <div key={i} className="flex items-center p-3 space-x-3">
              <span>
                <FaCheck className="font-bold text-green-700" />
              </span>
              <span>{e.title}</span>
            </div>
          ))}
        </div>
      </div>
      {/* urgent help end */}
      <div>
        <h2 className="py-3 text-[0.9rem] font-semibold text-center text-white rounded-t bg-secondary">
          TRAVEL INFORMATION
        </h2>
        <div className="flex items-center p-3 space-x-3 border-b-2">
          <span>
            <BiMailSend size={30} className="font-bold text-green-700" />
          </span>
          <span className="text-sm">info@traveltoindiaservices.com</span>
        </div>
        <div className="flex flex-col flex-wrap justify-center gap-4 py-4 space-y-4 text-center">
          {cardData.map((e, i) => (
            <div className="flex items-center justify-center" key={i}>
              <img src={e.imgSrc} className="w-40" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ApplySectionUrgentHelp;
