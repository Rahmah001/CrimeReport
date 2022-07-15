import { Box, Heading, Stack } from '@chakra-ui/react';

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

      <Stack spacing={4} direction={{ base: 'column', sm: 'row' }}>
        {crimeDataArray.map((crimeData) => (
          <CrimeCard crimeData={crimeData} />
        ))}
      </Stack>
    </Box>
  );
};

export default CrimeSection;
