import {
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import { client } from '../../libs/client';
import type { NextPage } from 'next';
import type { Article } from '../../types/Article';
import type { ResponseHeader } from '../../types/ResponseHeader';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticleId: NextPage<Props> = ({ article }) => {
  return (
    <main>
      <h1>{article.title}</h1>
      <p>{article.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${article.body}`,
        }}
      />
    </main>
  );
};

export default ArticleId;

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data: ResponseHeader & { contents: Article[] } = await client.get({
    endpoint: 'articles',
  });

  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id as string;
  const data = await client.get({ endpoint: 'articles', contentId: id });

  return {
    props: {
      article: data,
    },
  };
};
