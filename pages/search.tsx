import axios from 'axios';
import { Layout } from 'components';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';

const products = [
  {
    id: 1,
    name: 'Basic Tee 8-Pack',
    href: '#',
    price: '$256',
    description:
      'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
    imageAlt:
      'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  // More products...
];

interface Item {
  data: {
    title: string;
    description: string;
  }[];
  href: string;
  links: {
    href: string;
    rel: 'preview' | 'captions';
    render?: string;
  }[];
}

interface SearchItemProps {
  src: string;
  title: string;
  description: string;
}

const SearchItem: FunctionComponent<SearchItemProps> = ({
  src,
  title,
  description,
}) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
        <img
          src={src}
          //   alt={product.imageAlt}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <span aria-hidden="true" className="absolute inset-0" />
          {title}
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
        {/* <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{product.options}</p>
          <p className="text-base font-medium text-gray-900">{product.price}</p>
        </div> */}
      </div>
    </div>
  );
};

interface SearchProps {
  items: Item[];
}

const Search: FunctionComponent<SearchProps> = ({ items }) => {
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {items
              .filter((item) => item.links && item.links.length > 0)
              .slice(0, 100)
              .map((item, index) => (
                <SearchItem
                  key={index}
                  src={item.links[0].href}
                  title={item.data[0].title}
                  description={item.data[0].description}
                />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<SearchProps> = async (
  context
) => {
  const param = context.query.query;
  const query = param && !Array.isArray(param) ? param : '';

  try {
    const response = await axios.get(
      `https://images-api.nasa.gov/search?q=${query}`
    );

    return {
      props: {
        items: response.data.collection.items as Item[],
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        items: [] as Item[],
      },
    };
  }
};

export default Search;
