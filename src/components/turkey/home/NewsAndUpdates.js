import React from 'react';
import UnderlineTextCenter from '../common/UnderlineTextCenter';
import TitleText from '../common/TitleText';

const NewsAndUpdates = () => {
  const data = [
    {
      id: 1,
      imglink: '/assets/images/turkey/nuOne.png',
      alt: '',
      trainingname: 'Turkey Visa For Afghanistan – How To Obtain It?',
      desc: 'Jobs with a free visa in Turkey refers to work prospects in Turkey. The term free visa makes it more attractive for international candidates interested in working in Turkey.',
      link: '#',
    },
    {
      id: 2,
      imglink: '/assets/images/turkey/nuTwo.png',
      alt: '',
      trainingname:
        'Student Visa For Turkey From Pakistan – Future Turning Point!',
      desc: 'The Turkey investment visa offers Pakistani citizens the chance to invest in Turkey with the possibility of obtaining Turkish citizenship.',
      link: '#',
    },
    {
      id: 3,
      imglink: '/assets/images/turkey/nuThree.png',
      alt: '',
      trainingname: 'What is a student visa for Turkey from Pakistan?',
      desc: 'Pakistani applicants would have to go through the standard visa application procedure to obtain an investment visa for Turkey.',
      link: '#',
    },
    {
      id: 4,
      imglink: '/assets/images/turkey/nuFour.png',
      alt: '',
      trainingname: 'What are “jobs with a free visa in Turkey”?',
      desc: 'Jobs with a free visa in Turkey refers to work prospects in Turkey. The term free visa makes it more attractive for international candidates interested in working in Turkey.',
      link: '#',
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container space-y-4">
        <div className="space-y-4">
          <div className="w-fit md:mx-auto">
            <UnderlineTextCenter title="Latest News Updates & Blogs" />
          </div>
          <div className="max-w-4xl mx-auto md:text-center">
            <TitleText title="Lorem Ipsum is simply dummy text" />
          </div>
        </div>
        <div className="container grid w-full gap-2 md:grid-cols-4 ">
          {data.map((e, i) => (
            <div key={i} className="p-2">
              <div class="bg-white rounded-lg">
                <img class="rounded-t-lg" src={e.imglink} alt={e.alt} />

                <div class=" pt-6 flex flex-col justify-between items-start h-64">
                  <h5 class="text-gray-900 font-semibold tracking-tight mb-2 ">
                    {e.trainingname}
                  </h5>

                  <p class="font-normal text-gray-700 mb-3 text-sm tracking-tighter text-justify ">
                    {e.desc}
                  </p>
                  <a
                    href={e.link}
                    className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-gradient-btn focus:ring-4 bg-primary"
                  >
                    Know more
                    <svg
                      class="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
