import { Box, Text } from '@chakra-ui/react';

import { CrimeCardProps } from 'src/interfaces';

const CrimeCard: React.FC<CrimeCardProps> = ({ crimeData }) => {
  return (
    <Box>
      <Text>{crimeData?.crimeTitle}</Text>
    </Box>
  );
};

export default CrimeCard;
