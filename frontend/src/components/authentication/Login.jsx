import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

export const Login = () => {
  const [show, setShow] = useState(false)
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()

  const handleToggle = () => {
    setShow(!show)
  }
  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: 'Please Fill all the Feilds',
        description: "We've created your account for you.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      setLoading(false)
      return;
    }
    
    try {
      const data = await fetch(`http://localhost:5000/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password}),
      })
      const jsonData = await data.json()
      // const config = {
      //     headers: {
      //         "Content-Type": "application/json",
      //     },
      // };

      // const data = await axios.post(`/api/user`, { name, email, password, pic },
      //     config
      // );

      // console.log(data, "data")
      // console.log(jsonData)

      toast({
        title: 'Registration Successful',
        description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      localStorage.setItem('user-Info', JSON.stringify(jsonData));

      setLoading(false)
      navigate('/chats')
    } catch (error) {
      setLoading(false)
      toast({
        title: 'Registration Successful',
        description: "We've created your account for you.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const guestHandler = async () => {
    setLoading(true);
    try {
      const data = await fetch(`http://localhost:5000/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: 'guest@example.com', password: '123456' }),
      })
      const jsonData = await data.json()

      toast({
        title: 'Registration Successful',
        description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      localStorage.setItem('user-Info', JSON.stringify(jsonData));

      setLoading(false)
      navigate('/chats')
    } catch (error) {
      setLoading(false)
      toast({
        title: 'Registration Successful',
        description: "We've created your account for you.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    }
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
          <Input type={show ? 'text' : 'password'} placeholder='Enter Your Password'  onChange={(e) => setPassword(e.target.value)} />
          <InputRightElement w={'4.5rem'}>
            <Button h={'1.75rem'} size={'sm'} onClick={handleToggle}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      
      <Button colorScheme='blue' w={'100%'} style={{ marginTop: 10 }} onClick={submitHandler} isLoading={loading}>
        Login Up
      </Button>
      <Button variant={'solid'} colorScheme='red' w={'100%'} style={{ marginTop: 10 }} onClick={guestHandler}>
        Get Guest User Credentials
      </Button>
    </VStack>
  )
}
