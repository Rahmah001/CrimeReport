import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react';

import {
  bgGradient,
  buttonGradient,
  headingResSize,
  overlayBg,
} from 'src/constants';

import Navbar from '@components/Navbar/Navbar';
import MiddleSection from '@components/MiddleSection/MiddleSection';
import CrimeSection from '@components/CrimeSection/CrimeSection';
import ContactSection from '@components/ContactSection/ContactSection';
import Footer from '@components/Footer/Footer';

const Home = () => {
  return (
    <Box>
      <Box h={{ base: '500px', sm: '600px' }} bg={overlayBg} bgSize={'cover'}>
        <Navbar />
        <Box
          textAlign={'center'}
          mt={{ base: '8rem', sm: '12rem' }}
          color={'white'}
        >
          <Heading fontWeight={'extrabold'} size={headingResSize}>
            Dont Feel Helpless,
          </Heading>
          <Heading
            bgGradient={bgGradient}
            bgClip={'text'}
            fontWeight={'extrabold'}
            size={headingResSize}
            mt={{ base: 0, sm: 2 }}
          >
            we are here for you.
          </Heading>

          <Text mt={{ base: 0, sm: 4 }}>
            Is there any crime happening around you
          </Text>
          <Text>or your loved ones we're one call away.</Text>
        </Box>

        <HStack spacing={3} justify={'center'} mt={7}>
          <Button
            bgGradient={bgGradient}
            _hover={buttonGradient}
            _focus={buttonGradient}
            size={'sm'}
            color={'#000'}
            colorScheme="blue"
          >
            Report crime
          </Button>
          <Button variant={'outline'} size={'sm'} colorScheme="facebook">
            Committed to safety
          </Button>
        </HStack>
      </Box>
      <MiddleSection />
      <Box mb={8}>
        <CrimeSection />
      </Box>
      <Box textAlign={'center'} my={'4rem'}>
        <Text>Fill up to get a qote</Text>
        <Heading fontWeight={'extrabold'}>
          World's Leading Law Consultency Agency!
        </Heading>

        <ContactSection />
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
