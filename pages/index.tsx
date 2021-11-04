import type { NextPage, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { client } from '../libs/client';
import type { Article } from '../types/Article';
import type { ResponseHeader } from '../types/ResponseHeader';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
