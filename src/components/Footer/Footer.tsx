import { Box, Container, Heading, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box py={'4rem'} bgColor={'#386896'}>
      <Container maxW={'conatiner.lg'}>
        <Box color={'white'} textAlign={'center'}>
          <Text fontSize={'xl'} fontWeight={'semibold'}>
            Receive updates and latest news direct from Simply enter.
          </Text>
          <Heading size={'lg'} mt={'1rem'}>
            +234 812 723 6137
          </Heading>
          <Heading size={'lg'}>youremail@gmail.com</Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
