import { Box, Container, Heading, Text } from '@chakra-ui/react';

import NewsLetter from '@components/NewsLetter/NewsLetter';

import FooterBg from '@assets/images/footer-bg.jpg';

const Footer = () => {
  return (
    <Box
      py={'4rem'}
      bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url('${FooterBg}') no-repeat center`}
      bgSize={'cover'}
    >
      <Container maxW={'conatiner.lg'}>
        <Box color={'white'} textAlign={'center'}>
          <Text fontSize={'xl'} fontWeight={'semibold'}>
            Receive updates and latest news.
          </Text>
          <Heading size={'lg'} mt={'1rem'}>
            +234 812 723 6137
          </Heading>
          <Heading size={'lg'}>youremail@gmail.com</Heading>
        </Box>
      </Container>

      <Container maxWidth={'container.md'}>
        <NewsLetter />
      </Container>
    </Box>
  );
};

export default Footer;
