import { Container, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Container
      display={'flex'}
      justifyContent={'space-between'}
      height="7vh"
      py={4}
      color="#fff"
      maxWidth={'container.xl'}
    >
      <Heading size={'md'} fontWeight={'black'}>
        CrimeReport.
      </Heading>
    </Container>
  );
};

export default Navbar;
