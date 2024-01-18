import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';

import CrimeCard from '@components/CrimeCard/CrimeCard';

import { buttonGradient, crimeDataArray } from 'src/constants';

const CrimeSection = () => {
  return (
    <Box bgGradient={buttonGradient.bgGradient} py={14}>
      <Heading textAlign={'center'} fontWeight={'extrabold'} fontSize={'2xl'}>
        We are here for any form of
      </Heading>
      <Heading
        textAlign={'center'}
        color={'#385898'}
        fontWeight={'extrabold'}
        size={'2xl'}
      >
        crime incidence.
      </Heading>

      <Container maxW={'container.lg'} marginTop={'3rem'}>
        <SimpleGrid spacing={5} columns={{ base: 1, sm: 2, md: 3 }}>
          {crimeDataArray.map((crimeData) => (
            <CrimeCard key={crimeData.id} crimeData={crimeData} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CrimeSection;
