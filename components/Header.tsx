import { VFC } from 'react';
import {
  Flex,
  IconButton,
  useDisclosure,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export const Header: VFC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      h="60px"
      px="2"
      color="white"
      bg="transparent"
      justifyContent="center"
      alignItems="center"
      borderBottom="2px"
      borderColor="gray.500"
      shadow="2xl"
      pos="fixed"
      top="0"
      right="0"
      left="0"
      zIndex="modal"
    >
      <IconButton
        onClick={onToggle}
        icon={
          isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={7} h={7} />
        }
        variant={'ghost'}
        aria-label={'Toggle Navigation'}
        bg="transparent"
        colorScheme="whiteAlpha"
      />
      <Spacer />
      <Link href="/">
        <Heading size="lg" textShadow=" 2px 2px 2px rgba(255,255,255,0.4)">
          Taro Portforio
        </Heading>
      </Link>
      <Spacer />
    </Flex>
  );
};
