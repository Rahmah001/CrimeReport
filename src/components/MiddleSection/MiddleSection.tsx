import {
  Container,
  Stack,
  Heading,
  Button,
  Box,
  Text,
  Image,
} from '@chakra-ui/react';

import crimeImageOne from '@assets/images/crime-image-1.jpg';

const MiddleSection = () => {
  return (
    <Box my={{ base: '3rem', sm: '6rem' }}>
      <Container maxWidth={'container.lg'}>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={6}>
          <Box>
            <Heading fontWeight={'extrabold'} color={'#385898'}>
              Dont Feel Helpless...
            </Heading>
            <Heading fontWeight={'extrabold'}>We Fight for safety.</Heading>
            <Text fontWeight={'semibold'} my={4}>
              Your Safety is priority.
            </Text>
            <Button size={'sm'} colorScheme={'facebook'}>
              Learn more
            </Button>
          </Box>
          <Box>
            <Image
              src={crimeImageOne}
              objectFit={'cover'}
              width={'800px'}
              borderTopLeftRadius={'40px'}
              borderBottomRightRadius={'40px'}
              alt={'crime'}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MiddleSection;
