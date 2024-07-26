import Link from 'next/link';

export const Banner = ({ name, type, validity, entries, price, link }) => {
  return (
    <div className="pt-16 ">
      <div className="bg-[#f3f5f7] flex justify-center items-center">
        <p className="py-8">
          <span className="font-semibold">Home</span> &gt; {name}
        </p>
      </div>
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 md:justify-between">
          <div className="flex flex-col items-center justify-center w-full h-full space-y-5 ">
            <h2 className="text-xl italic font-semibold text-gray-500 md:text-4xl ">
              Welcome to {name}
            </h2>
            <div className="">
              <Link href={link}>
                <button className="w-full px-16 py-3 text-xl font-semibold text-white duration-150 ease-in-out rounded-full bg-primary hover:scale-105">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="p-4 text-lg font-semibold text-black border-t border-b border-l-8 border-r rounded-lg border-primaryMain ">
              <div className="grid md:grid-cols-3 md:space-x-5">
                <div>
                  <p className="text-lg text-primary">Visa</p>
                  <p className="text-sm text-gray-500">REQUIRED FOR TRAVEL</p>
                </div>
                <div className="p-3 md:col-span-2">
                  <div className="border rounded-md  border-primary">
                    <div className="flex justify-center py-3 text-xl text-white bg-primary">
                      {type}
                    </div>
                    <div className="flex flex-col items-center py-3 space-y-2">
                      <p className="text-xl">{validity}</p>
                      <p className="text-xl">{entries}</p>
                      <p className="text-sm">Fee</p>
                      <p className="text-2xl">{price}</p>
                      <p className="text-sm">/applicant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
