import { VFC } from 'react';
import {
  Flex,
  IconButton,
  useDisclosure,
  Heading,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export const Header: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800">
          <DrawerCloseButton />

          <DrawerBody>
            <VStack
              direction="column"
              justifyContent="center"
              alignItems="center"
              h="full"
              spacing="6"
            >
              <Link href="/">
                <Button colorScheme="white" variant="link" size="lg">
                  Home
                </Button>
              </Link>
              <Link href="/">
                <Button colorScheme="white" variant="link" size="lg">
                  About
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="link"
                  aria-label={'Toggle Navigation'}
                  colorScheme="twitter"
                  size="lg"
                  alignItems="center"
                >
                  <ExternalLinkIcon w={5} h={5} mr="2" />
                  Twitter
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="link"
                  aria-label={'Toggle Navigation'}
                  color="#CF2E92"
                  size="lg"
                  alignItems="center"
                >
                  <ExternalLinkIcon w={5} h={5} mr="2" />
                  Instagram
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        h="60px"
        px="2"
        color="white"
        bg="transparent"
        justifyContent="center"
        alignItems="center"
        borderBottom="1px"
        borderColor="white"
        pos="fixed"
        top="0"
        right="0"
        left="0"
        zIndex="modal"
      >
        <IconButton
          onClick={onOpen}
          icon={<HamburgerIcon w={7} h={7} />}
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
          bg="transparent"
          colorScheme="white"
          pos="absolute"
          left="5"
        />
        <Link href="/">
          <Heading
            size="lg"
            textShadow=" 2px 2px 2px rgba(255,255,255,0.4)"
            style={{ fontFamily: 'din-2014' }}
          >
            Taro Portfolio
          </Heading>
        </Link>
      </Flex>
    </>
  );
};
