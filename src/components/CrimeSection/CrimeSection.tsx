import { Box, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';

import CrimeCard from '@components/CrimeCard/CrimeCard';

import { crimeDataArray } from 'src/constants';

const CrimeSection = () => {
  return (
    <Box textAlign={'center'}>
      <Heading fontWeight={'extrabold'} fontSize={'2xl'}>
        We are here for any form of
      </Heading>
      <Heading color={'#385898'} fontWeight={'extrabold'} size={'2xl'}>
        crime incidence.
      </Heading>

      <Container maxW={'container.lg'} mt={'4rem'}>
        <SimpleGrid spacing={4} columns={{ base: 1, sm: 2, md: 3 }}>
          {crimeDataArray.map((crimeData) => (
            <CrimeCard crimeData={crimeData} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CrimeSection;
