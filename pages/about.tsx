import {
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import { client } from '../libs/client';
import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const AboutPage: NextPage<Props> = ({ body }) => {
  return (
    <Box textAlign="center">
      <Box
        fontSize="3xl"
        fontWeight="semibold"
        as="h2"
        lineHeight="tight"
        isTruncated
      >
        About
      </Box>
      <Box py={10}>
        <Text as="p">{body}</Text>
      </Box>
    </Box>
  );
};

export default AboutPage;

export const getStaticProps = async () => {
  const data: { body: string } = await client.get({
    endpoint: 'about',
  });

  return {
    props: {
      body: data.body,
    },
  };
};
