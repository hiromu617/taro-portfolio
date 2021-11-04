import { VFC } from 'react';
import { Article } from '../types/Article';
import { Box, Heading, Text } from '@chakra-ui/layout';
import Link from 'next/link';
import Image from 'next/image';
import { parseDate } from '../utils/parseDate';

export const Card: VFC<{ article: Article }> = ({ article }) => {
  return (
    <Link href={`/articles/${article.id}`} passHref>
      <Box
        bg="gray.800"
        maxW="400px"
        _hover={{
          bg: 'gray.700',
        }}
        shadow="xl"
      >
        <Image
          alt="サムネイル"
          src={article.thumbnail.url}
          width={article.thumbnail.width}
          height={article.thumbnail.height}
          objectFit="cover"
        />
        <Box p={3} textAlign="center">
          <Text mb="3">{article.title}</Text>
          <Text fontSize="xs">{parseDate(article.createdAt)}</Text>
        </Box>
      </Box>
    </Link>
  );
};
