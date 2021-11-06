import {
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import { client } from '../../libs/client';
import type { NextPage } from 'next';
import type { Article } from '../../types/Article';
import type { ResponseHeader } from '../../types/ResponseHeader';
import {
  Box,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { parseDate } from '../../utils/parseDate';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ArticleId: NextPage<Props> = ({ article }) => {
  return (
    <Box textAlign="center">
      <Box
        fontSize="3xl"
        fontWeight="semibold"
        as="h2"
        lineHeight="tight"
        isTruncated
      >
        {article.title}
      </Box>
      <Box mt="4">
        <Text fontSize="md" color="gray.400">
          {parseDate(article.createdAt)}
        </Text>
      </Box>
      <Box py={20}>
        <div
          dangerouslySetInnerHTML={{
            __html: `${article.body}`,
          }}
        />
      </Box>
    </Box>
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
