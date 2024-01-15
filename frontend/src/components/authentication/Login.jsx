import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export const Login = () => {
  const [show, setShow] = useState(false)
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleToggle = () => {
    setShow(!show)
  }
  const submitHandler = () => {

  }
  return (
    <VStack
      spacing={2}
      align='stretch'
    >
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input id='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id='password'>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input type={show ? 'text' : 'password'} placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
          <InputRightElement w={'4.5rem'}>
            <Button h={'1.75rem'} size={'sm'} onClick={handleToggle}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      
      <Button colorScheme='blue' w={'100%'} style={{ marginTop: 10 }} onClick={submitHandler}>
        Login Up
      </Button>
      <Button variant={'solid'} colorScheme='red' w={'100%'} style={{ marginTop: 10 }} onClick={()=>{setEmail("guest@example.com");setPassword("123456")}}>
        Get Guest User Credentials
      </Button>
    </VStack>
  )
}
