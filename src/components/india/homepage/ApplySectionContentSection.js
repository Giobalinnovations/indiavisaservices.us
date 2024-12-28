const ApplySectionContentSection = () => {
  const eligibleCountries = [
    'Albania',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua & Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Barbados',
    'Belgium',
    'Belize',
    'Brazil',
    'Bulgaria',
    'Cambodia',
    'Canada',
    'Chile',
    'Colombia',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Indonesia',
    'Ireland',
    'Israel',
    'Italy',
    'Japan',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Malaysia',
    'Malta',
    'Mexico',
    'Monaco',
    'Mongolia',
    'Netherlands',
    'New Zealand',
    'Norway',
    'Oman',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Korea',
    'Spain',
    'Sweden',
    'Switzerland',
    'Thailand',
    'UAE',
    'United Kingdom',
    'USA',
    'Vietnam',
  ];

  const popularDestinations = [
    { city: 'Delhi', description: 'Capital city, rich in history and culture' },
    { city: 'Mumbai', description: 'Financial capital and entertainment hub' },
    { city: 'Bangalore', description: 'Technology capital of India' },
    { city: 'Agra', description: 'Home to the iconic Taj Mahal' },
    { city: 'Jaipur', description: 'The Pink City of royal heritage' },
    { city: 'Goa', description: 'Tropical paradise with beautiful beaches' },
    { city: 'Varanasi', description: 'Spiritual capital of India' },
    {
      city: 'Kerala',
      description: 'God&apos;s own country with scenic backwaters',
    },
  ];

  return (
    <div className="text-sm">
      {/* Header */}
      <div className="relative overflow-hidden rounded-t-xl bg-gradient-to-r from-secondary via-secondary to-primary">
        <div className="absolute inset-0 bg-[url('/assets/images/india/common/pattern.png')] opacity-10"></div>
        <h2 className="relative flex items-center justify-center py-4 text-base font-semibold text-center text-white md:text-lg">
          Welcome to Indian e-Visa Services
        </h2>
      </div>

      {/* Introduction Section */}
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-secondary">
            Your Gateway to Incredible India
          </h2>
          <p className="leading-relaxed text-gray-600">
            India, a land of diverse cultures, rich heritage, and technological
            advancement, welcomes millions of visitors annually. From ancient
            temples to modern tech hubs, from the majestic Himalayas to serene
            coastal beaches, India offers an unparalleled travel experience. Our
            e-Visa service simplifies your journey to explore this magnificent
            country.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Quick Processing',
              description:
                'Fast and efficient visa processing with digital verification',
            },
            {
              title: 'Secure Platform',
              description:
                'State-of-the-art security for your personal information',
            },
            {
              title: '24/7 Support',
              description:
                'Round-the-clock assistance for your visa applications',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md"
            >
              <h3 className="mb-2 text-base font-semibold text-secondary">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Eligible Countries Section */}
        <div className="p-6 space-y-4 bg-gray-50 rounded-xl">
          <h2 className="text-lg font-semibold text-secondary">
            Eligible Countries for e-Visa
          </h2>
          <p className="text-gray-600">
            Citizens of the following countries can apply for an Indian e-Visa.
            The process is completely online and user-friendly.
          </p>
          <div className="flex flex-wrap gap-2">
            {eligibleCountries.map((country, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs text-gray-600 transition-all duration-300 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-secondary">
            Popular Destinations
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {popularDestinations.map((dest, index) => (
              <div
                key={index}
                className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                <h3 className="mb-1 font-semibold text-primary">{dest.city}</h3>
                <p className="text-sm text-gray-600">{dest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="p-6 space-y-4 bg-gradient-to-r from-orange/5 to-primary/5 rounded-xl">
          <h2 className="text-lg font-semibold text-secondary">
            Why Choose Indian e-Visa?
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              The Indian e-Visa system represents a significant advancement in
              facilitating international travel to India. This digital platform
              offers a streamlined, efficient process for obtaining travel
              authorization, eliminating the need for physical visa
              applications.
            </p>
            <p>
              With multiple categories including tourist, business, and medical
              visas, the system caters to diverse travel needs. The platform
              ensures secure, swift processing while maintaining the highest
              standards of security and verification.
            </p>
            <p>
              Whether you&apos;re exploring India&apos;s rich cultural heritage,
              pursuing business opportunities, or seeking medical treatment, our
              e-Visa service provides a convenient gateway to your Indian
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySectionContentSection;
