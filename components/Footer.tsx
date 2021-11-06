import { VFC, ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={'whiteAlpha.100'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer: VFC = () => {
  return (
    <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={'row'}
        spacing={4}
        justify={'space-between'}
        align={'center'}
      >
        <Text>© 2021 Taro. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://mobile.twitter.com/taro_ae1023'}>
            <FaTwitter />
          </SocialButton>
          {/* <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton> */}
          <SocialButton label={'Instagram'} href={'https://instagram.com/taro_aftereffects'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
