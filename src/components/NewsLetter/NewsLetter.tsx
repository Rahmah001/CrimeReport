import {
  SimpleGrid,
  UnorderedList,
  Box,
  ListItem,
  Heading,
  FormControl,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { bgGradient, buttonGradient } from 'src/constants';

import { Link } from 'react-router-dom';

const NewsLetter = () => {
  return (
    <SimpleGrid
      px={{ base: 6, sm: 0 }}
      spacing={5}
      mt={'4rem'}
      columns={{ base: 2, sm: 3 }}
    >
      <Box>
        <Text fontWeight={'medium'} fontSize={'xl'} color={'#C6F6D5'}>
          Our Support
        </Text>
        <UnorderedList mt={2} color={'white'}>
          <ListItem>
            <Link to={'#'}>Advanced</Link>
          </ListItem>
          <ListItem>
            <Link to={'#'}>Management</Link>
          </ListItem>
          <ListItem>
            <Link to={'#'}>Corporate</Link>
          </ListItem>
          <ListItem>
            <Link to={'#'}>Customer</Link>
          </ListItem>
          <ListItem>
            <Link to={'#'}>Information</Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <Text fontWeight={'medium'} fontSize={'xl'} color={'#C6F6D5'}>
          Quick Link
        </Text>
        <UnorderedList mt={2} color={'white'}>
          <ListItem>
            <Link to={'#'}>New Law</Link>
          </ListItem>
          <ListItem>
            <Link to={'#'}>About</Link>
          </ListItem>
          <ListItem>
            <Link to={'#'}>Privacy Policy</Link>
          </ListItem>
          <ListItem>
            <Link to={'#'}>Licenses</Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box color={'white'} width={{ base: '280px', sm: 'inherit' }}>
        <Heading fontSize={'lg'}>Newsletter</Heading>
        <Text fontSize={'14px'} mt={3}>
          Subscribe now to get daily updates
        </Text>
        <FormControl my={3}>
          <Input
            size={'sm'}
            bgColor={'white'}
            borderRadius={'md'}
            id="email"
            type="email"
            placeholder={'Email Address'}
          />
        </FormControl>
        <Button
          type={'submit'}
          bgGradient={bgGradient}
          _hover={buttonGradient}
          _focus={buttonGradient}
          color={'#000'}
          size={'sm'}
        >
          Subscribe
        </Button>
      </Box>
    </SimpleGrid>
  );
};

export default NewsLetter;
