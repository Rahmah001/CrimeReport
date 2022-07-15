import { Box } from '@chakra-ui/react';

import { overlayBg } from '@constants/index';

import Navbar from '@components/Navbar/Navbar';

const Home = () => {
  return (
    <Box h={'500px'} bg={overlayBg} bgSize={'cover'}>
      <Navbar />
      <h2>Home</h2>
    </Box>
  );
};

export default Home;
