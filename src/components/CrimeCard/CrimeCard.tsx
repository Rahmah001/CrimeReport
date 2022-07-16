import { Box, Text } from '@chakra-ui/react';

import { CrimeCardProps } from 'src/interfaces';

const CrimeCard: React.FC<CrimeCardProps> = ({ crimeData }) => {
  const { crimeImage, crimeText, crimeTitle } = crimeData;
  return (
    <Box
      p={8}
      borderRadius={'10px'}
      bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('${crimeImage}') no-repeat center`}
      bgSize={'cover'}
      color={'white'}
    >
      <Text fontSize={'xl'} fontWeight={'semibold'}>
        {crimeTitle}
      </Text>
      <Text mt={3}>{crimeText}</Text>
    </Box>
  );
};

export default CrimeCard;
