import Head from 'next/head';
import axios from 'axios';
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { FunctionComponent } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { Layout } from 'components';
import Link from 'next/link';
import AstronautImage from 'assets/images/astronaut.svg';
import LaunchImage from 'assets/images/launch.svg';

import { CheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Invite team members',
    description:
      'Quam a velit animi fuga ad. Accusamus consectetur nulla perferendis quam. Aperiam error iusto id eos.',
  },
  {
    name: 'Notifications',
    description:
      'Ut excepturi sequi et corrupti. Quidem est non ipsam sunt voluptatem. Velit dicta iusto. Molestiae.',
  },
  {
    name: 'List view',
    description:
      'Quis ratione necessitatibus ullam id animi iure accusamus debitis voluptas. Cumque debitis exercitationem.',
  },
  {
    name: 'Boards',
    description:
      'Quae et accusantium quo molestiae sed sit ut quo. Quidem omnis iure et maiores porro. Eligendi deserunt.',
  },
  {
    name: 'Keyboard shortcuts',
    description:
      'Optio assumenda eos neque. Quaerat temporibus dicta provident. Quia unde quo aut aut molestiae sit..',
  },
  {
    name: 'Reporting',
    description:
      'Excepturi sed quo mollitia voluptatibus. Qui quo ut nihil quo. Dolor at dignissimos ea voluptatem.',
  },
  {
    name: 'Calendars',
    description:
      'Illum nesciunt odio. Dolorem nobis labore eveniet consequatur quas aut delectus molestias. Qui recusandae.',
  },
  {
    name: 'Mobile app',
    description:
      'Aut velit est eius dolore repudiandae. Vitae temporibus amet possimus mollitia. Quia molestiae rerum.',
  },
];

export interface AboutProps {
  data: number[];
}

const About: NextPage<AboutProps> = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Head>
        <title>Something</title>
      </Head>
      <div className="pt-12 bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center"></div>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-lg font-semibold text-indigo-600">About</h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Take control of your team.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>
            <div className="mt-2 mb-4  flex items-center justify-center">
              <AstronautImage />
            </div>
            <Link
              href="/"
              className="text-base font-medium text-indigo-600 hover:text-indigo-700"
            >
              Back<span aria-hidden="true"> →</span>
            </Link>
          </div>
          <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute mt-1 h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<AboutProps> = async (
  context
) => {
  console.log('getServerSideProps');

  return {
    props: {
      data: [1, 2, 3],
    },
  };
};

// export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
//   //   const { data } = await axios.get('http://localhost:3000/asd');

//   console.log('getStaticProps');

//   return {
//     props: {
//       data: [1, 2, 3],
//     },
//   };
// };

// export const getServerSideProps = async () => {
//   console.log('getServerSideProps');
// };

export default About;
