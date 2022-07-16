import { Container, FormControl, FormLabel, Input } from "@chakra-ui/react"

 const ContactSection = () => {
  return (
    <Container maxWidth={'md'} mt={'3rem'}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
            <Input id="phoneNumber" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
        </Container>
  )
}

export default ContactSection
