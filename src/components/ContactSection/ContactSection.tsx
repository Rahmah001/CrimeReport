import {
  Button,
  Container,
  FormControl,
  HStack,
  Input,
  Select,
} from '@chakra-ui/react';

import { bgGradient, buttonGradient } from 'src/constants';

const ContactSection = () => {
  return (
    <Container maxWidth={'xl'} mt={'3rem'}>
      <HStack spacing={5}>
        <FormControl>
          <Input id="name" type="text" placeholder="Name" />
        </FormControl>
        <FormControl>
          <Input id="phoneNumber" type="text" placeholder="Phone number" />
        </FormControl>
      </HStack>
      <HStack spacing={5} my={7}>
        <FormControl>
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
          <Input id="email" type="email" placeholder={'Email Address'} />
        </FormControl>
      </HStack>
      <Button
        mt={3}
        type={'submit'}
        bgGradient={bgGradient}
        _hover={buttonGradient}
        _focus={buttonGradient}
        color={'#000'}
      >
        Submit now!
      </Button>
    </Container>
  );
};

export default ContactSection;
