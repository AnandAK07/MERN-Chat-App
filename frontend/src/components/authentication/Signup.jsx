import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, StackDivider, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()

    const handleToggle = () => {
        setShow(!show)
    }
    const postDetails = async (pics) => {
        setLoading(true);
        if (pics === undefined) {
            toast({
                title: 'Please Select an Image',
                description: "We've created your account for you.",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            // https://api.cloudinary.com/v1_1/ddoccbpq7
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "ddoccbpq7");
            await fetch(`https://api.cloudinary.com/v1_1/ddoccbpq7/image/upload`, {
                method: 'POST',
                body: data,
            }).then((res) => res.json())
                .then(data => {
                    setPic(data.url.toString());
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err, "clud");
                    setLoading(false);
                })
        } else {
            toast({
                title: 'Please Select an Image',
                description: "We've created your account for you.",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false)
            return;
        }
    }
    // const postDetails = async (pics) => {
    //     setLoading(true);

    //     if (pics === undefined) {
    //         toast({
    //             title: 'Please Select an Image',
    //             description: "We've created your account for you.",
    //             status: 'warning',
    //             duration: 5000,
    //             isClosable: true,
    //         });
    //         setLoading(false);
    //         return;
    //     }

    //     if (pics.type === "image/jpeg" || pics.type === "image/png") {
    //         const data = new FormData();
    //         data.append("file", pics);
    //         data.append("upload_preset", "chat-app");
    //         data.append("cloud_name", "ddoccbpq7");

    //         try {
    //             const response = await fetch('https://api.cloudinary.com/v1_1/ddoccbpq7/image/upload', {
    //                 method: "POST",
    //                 body: data,
    //             });

    //             const responseData = await response.json();

    //             setPic(responseData.url.toString());
    //             setLoading(false);
    //         } catch (error) {
    //             console.log(error);
    //             setLoading(false);
    //             toast({
    //                 title: 'Image Upload Failed',
    //                 description: "There was an error uploading your image.",
    //                 status: 'error',
    //                 duration: 5000,
    //                 isClosable: true,
    //             });
    //         }
    //     } else {
    //         toast({
    //             title: 'Please Select a Valid Image',
    //             description: "We've created your account for you.",
    //             status: 'warning',
    //             duration: 5000,
    //             isClosable: true,
    //         });
    //         setLoading(false);
    //         return;
    //     }
    // };



    const submitHandler = async () => {
        setLoading(true);
        if (!name || !email || !password || !confirmPassword) {
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
        if (password !== confirmPassword) {
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
            const data = await fetch(`http://localhost:5000/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password, pic }),
            })
            // const config = {
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // };

            // const data = await axios.post(`/api/user`, { name, email, password, pic },
            //     config
            // );
            console.log(data, "data")

            toast({
                title: 'Registration Successful',
                description: "We've created your account for you.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })

            localStorage.setItem('user-Info', JSON.stringify(data));

            setLoading(false)
            navigate('/chats')
        } catch (error) {
            setLoading(false)
            toast({
                title: 'Registration Successful',
                description: "We've created your account for you.",
                status: 'success',
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
            <Button colorScheme='blue' w={'100%'} style={{ marginTop: 10 }} onClick={submitHandler} isLoading={loading}>
                Sign Up
            </Button>
            <Button colorScheme='red' w={'100%'} style={{ marginTop: 10 }} onClick={() => { setEmail("guest@example.com"); setPassword("123456") }}>
                Get Guest User Credentials
            </Button>
        </VStack>
    )
}
