import UnderlineTextCenter from '../common/UnderlineTextCenter';
import ApplySectionContentSection from './ApplySectionContentSection';
import ApplySectionUrgentHelp from './ApplySectionUrgentHelp';

const ApplySection = () => {
  const stepData = [
    {
      id: 1,
      title: 'Apply Online',
      imgSrc: '/assets/images/india/common/apply-online.jpg',
      description:
        'Secure online application saves time and check status online.',
      arrow: true,
    },
    {
      id: 2,
      title: 'Submit documents',
      imgSrc: '/assets/images/india/common/doc.jpg',
      description:
        'Submit your application with required documents at Indian Mission/Visa collection centre.',
      arrow: true,
    },
    {
      id: 3,
      title: 'Receive passport, visa',
      imgSrc: '/assets/images/india/common/visaImg.jpg',
      description:
        'Collect your passport/visa from Indian Mission/Collection Centre or by post.',
      arrow: false,
    },
  ];

  return (
    <div className="container pb-16 md:pb-24">
      <div className="grid-cols-12 gap-6 p-4 mx-auto md:grid">
        <div className="col-span-3 mb-6 md:mb-0">
          <div className="h-full p-6 transition-all duration-300 bg-white border rounded-lg shadow-md hover:shadow-lg border-gray-100">
            <ApplySectionUrgentHelp />
          </div>
        </div>
        <div className="col-span-9">
          <div className="h-full p-6 transition-all duration-300 bg-white border rounded-lg shadow-md hover:shadow-lg border-gray-100">
            <ApplySectionContentSection />
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="pt-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-secondary">
            Visa Application Process
          </h2>
          <div className="w-24 h-1 mx-auto bg-orange"></div>
        </div>

        <div className="container grid gap-8 md:grid-cols-3">
          {stepData.map((step, index) => (
            <div key={index} className="relative flex items-center">
              <div className="relative w-full transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="absolute left-1/2 -top-12 -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 rotate-45 bg-orange/20 w-24 h-24 -z-10 rounded-xl"></div>
                      <img
                        className="object-cover w-20 h-20 mx-auto rounded-lg shadow-lg"
                        src={step.imgSrc}
                        alt={step.title}
                      />
                    </div>
                  </div>

                  <div className="pt-10 text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 mb-4 text-white rounded-full bg-orange">
                      {step.id}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-secondary">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
              {step.arrow && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <img
                    src="/assets/images/india/common/curved-arrow.png"
                    className="w-8 h-8 text-orange"
                    alt="Next step"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Section */}
      <div className="px-4 py-12 mt-20 text-center bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-secondary">Advisory</h2>
        <p className="max-w-4xl mx-auto text-sm leading-relaxed text-gray-600 md:text-base">
          Government of India has not authorized any agent or intermediary to
          charge any fee for facilitation of emergency / express Visa/eVisa. For
          travel to India a regular/eVisa along with passport is mandatory. Only
          categories exempted under bilateral arrangements may not need a visa.
          For persons of Indian origin (all categories), OCI card is mandatory.
        </p>
      </div>
    </div>
  );
};

export default ApplySection;
