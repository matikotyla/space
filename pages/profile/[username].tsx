import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { FunctionComponent } from 'react';

export interface PorfileUsernameProps {
  id: string;
}

export interface PorfileUsernameParams extends ParsedUrlQuery {
  id: string;
}

const PorfileUsername: FunctionComponent<{ id: string }> = ({ id }) => {
  const router = useRouter();
  console.log(id);
  const { username } = router.query;
  return <h1>profile {username}</h1>;
};

export const getStaticPaths: GetStaticPaths<
  PorfileUsernameParams
> = async () => {
  const paths = Array.from({ length: 10 }, (_, index) => ({
    params: {
      id: '1',
      username: 'asd',
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PorfileUsernameProps,
  PorfileUsernameParams
> = async (context) => {
  const { id } = context.params!;

  return {
    props: { id },
  };
};

export default PorfileUsername;
