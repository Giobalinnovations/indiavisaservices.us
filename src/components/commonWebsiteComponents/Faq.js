
import React from "react";
import UnderlineTextCenter from "../australia/common/UnderlineTextCenter";
import TitleText from "../australia/common/TitleText";
const Faq = ({faqData}) => {

   
    

    return (
        <div className="bg-[#f3f5f7]">
        <div className="py-16">
            <div className="container">
                <div className="space-y-4">
                    <div className="w-fit md:mx-auto">
                        <UnderlineTextCenter title="FAQs" />
                    </div>
                    <div className="max-w-4xl mx-auto md:text-center">
                        <TitleText title="Frequently Asked Question" />
                    </div>
                </div>


                <div className="">
                    <div className="container md:pl-10 pl-0 pt-20">
                        <div

                        >
                            {" "}
                            <div className="space-y-8 -mt-8">
                                <div className="flex flex-col space-y-3">

                                    {faqData?.map((item, index) => {
                                        return (
                                            <div
                                                className=" rounded-sm  py-2 cursor-pointer" key={index}
                                            >
                                                <p className="text-lg font-semibold">{item.title}</p>
                                                <p className="pb-2">{item.des}</p>
                                            </div>
                                        );
                                    })}
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

export default Faq;
