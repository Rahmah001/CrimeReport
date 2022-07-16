import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import FooterBg from '@assets/images/footer-bg.jpg';

const Footer = () => {
  return (
    <Box
      py={'4rem'}
      bg={`linear-gradient(0deg, rgba(20, 15, 0, 0.6), rgba(0, 0, 0, 0.6)),url('${FooterBg}') no-repeat center`}
      bgSize={'cover'}
    >
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

        <SimpleGrid column={{ base: 2, sm: 3 }}>
          <Box></Box>
          <Box></Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
