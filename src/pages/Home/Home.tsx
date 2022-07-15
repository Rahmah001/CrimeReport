import { Box } from '@chakra-ui/react';

import CrimeBg from '../../assets/images/crime-bg.jpg';

import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <Box bg={`url('${CrimeBg}')`}>
      <Navbar />
      <h2>Home</h2>
    </Box>
  );
};

export default Home;
