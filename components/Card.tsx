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
        rounded="lg"
        overflow="hidden"
        borderWidth="1px"
        borderColor="gray.700"
      >
        <Image
          alt="サムネイル"
          src={article.thumbnail.url}
          width={'400px'}
          height={'250px'}
          objectFit="cover"
        />
        {/* <Box p={4} textAlign="center">
          <Text mb="4">{article.title}</Text>
          <Text fontSize="xs">{parseDate(article.createdAt)}</Text>
        </Box> */}
        <Box p="6">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {article.title}
          </Box>
          <Box mt="2">
            <Text fontSize="sm" color="gray.400">{parseDate(article.createdAt)}</Text>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
