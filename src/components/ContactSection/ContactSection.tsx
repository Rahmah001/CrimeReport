import {
  Button,
  Container,
  FormControl,
  HStack,
  Input,
  Select,
  useToast,
} from '@chakra-ui/react';
import { addDoc, collection, FirestoreError } from 'firebase/firestore';
import { SubmitHandler, useForm } from 'react-hook-form';

import { bgGradient, buttonGradient } from 'src/constants';
import { formValues } from 'src/interfaces';
import { firestoreDb } from 'src/libs';

const ContactSection = () => {
  const { register, handleSubmit, formState, reset } = useForm<formValues>();

  const toast = useToast();

  const handleCrimeSubmit: SubmitHandler<formValues> = async (data) => {
    const collectioRef = collection(firestoreDb, 'crimes');
    const newData = { ...data, attendedTo: false };
    await addDoc(collectioRef, newData)
      .then(() => {
        toast({
          status: 'success',
          containerStyle: {
            fontSize: '14px',
          },
          title: 'Crime submitted successfully!',
          description: 'Expect a response from us ASAP!',
          isClosable: true,
        });
        reset();
      })
      .catch((err: FirestoreError) => {
        toast({
          status: 'error',
          containerStyle: {
            fontSize: '14px',
          },
          title: 'An Error occurred, Please try again.',
          isClosable: true,
        });
      });
  };

  return (
    <Container maxWidth={'xl'} mt={'3rem'}>
      <form onSubmit={handleSubmit(handleCrimeSubmit)}>
        <HStack spacing={5}>
          <FormControl>
            <Input
              {...register('name', {
                required: true,
              })}
              type="text"
              placeholder="Name"
            />
          </FormControl>
          <FormControl>
            <Input
              {...register('phoneNumber', { required: true })}
              type="text"
              placeholder="Phone number"
            />
          </FormControl>
        </HStack>
        <HStack spacing={5} my={7}>
          <FormControl>
            <Select
              {...register('crime', { required: true })}
              placeholder="Select crime"
            >
              <option>Armed Robbery</option>
              <option>Murder</option>
              <option>Kidnapping</option>
              <option>Bugling</option>
              <option>Hijacking</option>
              <option>Accident</option>
            </Select>
          </FormControl>
          <FormControl>
            <Input
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              type="email"
              placeholder={'Email Address'}
            />
          </FormControl>
        </HStack>
        <Button
          mt={3}
          type={'submit'}
          bgGradient={bgGradient}
          _hover={buttonGradient}
          _focus={buttonGradient}
          color={'#000'}
          isLoading={formState.isSubmitting}
        >
          Submit now!
        </Button>
      </form>
    </Container>
  );
};

export default ContactSection;
