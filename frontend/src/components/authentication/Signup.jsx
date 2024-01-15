import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, StackDivider, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export const Signup = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();


    const handleToggle = () => {
        setShow(!show)
    }
    const postDetails = (pics) => {

    }
    const submitHandler=()=>{

    }

    return (
        <VStack
            spacing={2}
            align='stretch'
        >   
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input id='first-name' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
            </FormControl>
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
            <FormControl id='password'>
                    <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input type={show ? 'text' : 'password'} placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
                    <InputRightElement w={'4.5rem'}>
                        <Button h={'1.75rem'} size={'sm'} onClick={handleToggle}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='pic'>
                <FormLabel>Upload your Picture</FormLabel>
                <Input type='file' p={1.5} accept='image/*' onChange={(e) => postDetails(e.target.files[0])} />
            </FormControl>
            <Button colorScheme='blue' w={'100%'} style={{ marginTop: 10 }} onClick={submitHandler}>
                Sign Up
            </Button>
            <Button colorScheme='red' w={'100%'} style={{ marginTop: 10 }} onClick={() => { setEmail("guest@example.com"); setPassword("123456") }}>
                Get Guest User Credentials
            </Button>
        </VStack>
    )
}
