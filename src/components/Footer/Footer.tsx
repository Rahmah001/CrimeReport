import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import FooterBg from '@assets/images/footer-bg.jpg';
import { Link } from 'react-router-dom';

import { bgGradient, buttonGradient } from 'src/constants';

const Footer = () => {
  return (
    <Box
      py={'4rem'}
      bg={`linear-gradient(0deg, rgba(20, 15, 0, 0.8), rgba(0, 0, 0, 0.8)),url('${FooterBg}') no-repeat center`}
      bgSize={'cover'}
    >
      <Container maxW={'conatiner.lg'}>
        <Box color={'white'} textAlign={'center'}>
          <Text fontSize={'xl'} fontWeight={'semibold'}>
            Receive updates and latest news direct from Simply enter.
          </Text>
          <Heading size={'lg'} mt={'1rem'}>
            +234 812 723 6137
          </Heading>
          <Heading size={'lg'}>youremail@gmail.com</Heading>
        </Box>
      </Container>

      <Container maxWidth={'container.md'}>
        <SimpleGrid
          px={{ base: 6, sm: 0 }}
          spacing={3}
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
          <Box color={'white'}>
            <Heading fontSize={'lg'}>Newslatter</Heading>
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
      </Container>
    </Box>
  );
};

export default Footer;
