import { useRef } from 'react';
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
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const crimeRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const reportRef = useRef<HTMLDivElement | null>(null);

  const scrollToCrime = (): void =>
    crimeRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });

  const scrollToContact = (): void =>
    contactRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });

  const scrollToReport = (): void =>
    reportRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });

  const scrollToAbout = (): void =>
    aboutRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <Box>
      <Box bg={overlayBg} bgSize={'cover'} h={{ base: '500px', sm: '600px' }}>
        <Navbar
          scrollToCrime={scrollToCrime}
          scrollToContact={scrollToContact}
          scrollToAbout={scrollToAbout}
        />
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
            onClick={scrollToReport}
          >
            Report crime
          </Button>
          <Button variant={'outline'} size={'sm'} colorScheme="facebook">
            Committed to safety
          </Button>
        </HStack>
      </Box>

      <Box ref={aboutRef}>
        <MiddleSection />
      </Box>

      <Box mb={8} ref={crimeRef}>
        <CrimeSection />
      </Box>

      <Box textAlign={'center'} my={'4rem'} ref={reportRef}>
        <Text fontWeight={'medium'} fontSize={'lg'}>
          Fill up to get a Quote
        </Text>
        <Heading fontWeight={'extrabold'}>
          World's Leading Law Consultency Agency!
        </Heading>
        <ContactSection />
      </Box>

      <Box ref={contactRef}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
