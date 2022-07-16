import { Box, Text } from '@chakra-ui/react';

import { CrimeCardProps } from 'src/interfaces';

const CrimeCard: React.FC<CrimeCardProps> = ({ crimeData }) => {
  return (
    <Box
      p={6}
      borderRadius={'10px'}
      bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('${crimeData?.crimeImage}') no-repeat center`}
      bgSize={'cover'}
    >
      <Text fontSize={'xl'} fontWeight={'semibold'}>
        {crimeData?.crimeTitle}
      </Text>
      <Text>{crimeData?.crimeText}</Text>
    </Box>
  );
};

export default CrimeCard;
