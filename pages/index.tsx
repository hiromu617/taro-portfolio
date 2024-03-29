import type { NextPage, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { client } from '../libs/client';
import type { Article } from '../types/Article';
import type { ResponseHeader } from '../types/ResponseHeader';
import { Card } from '../components/Card';
import { VStack } from '@chakra-ui/react';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <VStack spacing="14">
      {articles.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </VStack>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data: ResponseHeader & { contents: Article[] } = await client.get({
    endpoint: 'articles',
  });

  return {
    props: {
      articles: data.contents,
    },
  };
};
