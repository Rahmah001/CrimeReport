import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';
import { bgGradient, buttonGradient } from 'src/constants';

const ContactSection = () => {
  return (
    <Container maxWidth={'xl'} mt={'3rem'}>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing={5}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
          <Input id="phoneNumber" type="text" />
        </FormControl>
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing={5} my={4}>
        <FormControl>
          <FormLabel htmlFor="crime">Select crime</FormLabel>
          <Select id="crime" placeholder="Select crime">
            <option>Armed Robbery</option>
            <option>Murder</option>
            <option>Kidnapping</option>
            <option>Bugling</option>
            <option>Hijacking</option>
            <option>Accident</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
      </Stack>
      <Button
        mt={3}
        type={'submit'}
        bgGradient={bgGradient}
        _hover={buttonGradient}
        _focus={buttonGradient}
        color={'#000'}
        colorScheme="blue"
      >
        Submit now!
      </Button>
    </Container>
  );
};

export default ContactSection;
