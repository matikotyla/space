import React, { FunctionComponent } from 'react';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { AcademicCapIcon, BugAntIcon } from '@heroicons/react/24/outline';
import RocketImage from 'assets/images/rocket.svg';
import styles from './Content.module.scss';
import Link from 'next/link';

const ContentLabel: FunctionComponent = () => {
  return (
    <div className={styles.label}>
      <div className={styles.labelContainer}>
        <span className={styles.labelText}>
          Announcing our next round of funding.{' '}
          <a href="#" className={styles.labelLink}>
            <span className="absolute inset-0" aria-hidden="true"></span>
            Read more <span aria-hidden="true">→</span>
          </a>
        </span>
      </div>
    </div>
  );
};

const ContentTitle: FunctionComponent = () => {
  return <h1 className={styles.title}>Enrich your journey through space</h1>;
};

const ContentText: FunctionComponent = () => {
  return (
    <p className={styles.text}>
      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
      cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
    </p>
  );
};

const ContentImage: FunctionComponent = () => {
  return (
    <div className="flex items-center justify-center">
      <RocketImage />
    </div>
  );
};

const Content: FunctionComponent = () => {
  return (
    <main className={styles.root}>
      <div>
        <ContentLabel />

        <ContentImage />
        <ContentTitle />
        <ContentText />
        <div className="mt-8 flex gap-x-4 sm:justify-center">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            Get started
            <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            {/* <BugAntIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" /> */}
          </button>
          <Link
            href="/about"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            Learn more
            <AcademicCapIcon
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Content;
