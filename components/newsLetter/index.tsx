import React  , {useState } from 'react'


import {
    Flex ,
    Stack  , 
    Heading , 
    Input , 
    Button,
    useColorModeValue,
    Text
} from '@chakra-ui/react'

import styles from './newsLetter.module.scss'

const NewsLetter = ({submited=()=>{} , id=""}) => {

  const [data , setData] = useState<any>({
    email :  "" , 
  })

  const reset = ()=>{
    setData({
      name : "",
      email :  "" , 
      number : "",
      description : ""
    })

  }

  function submitHandler() {
    fetch('/api/sheet', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    reset();
    submited()
  }

  return (
    <Flex
    id={id}
    mx={"auto"}
    align={'center'}    justify={'center'}
    my={6}
    mb={9}
    bg={useColorModeValue('gray.blur', 'gray.800')}>
    <Stack
      boxShadow={'2xl'}
      bg={useColorModeValue('white', 'gray.700')}
    w={{base : "auto" , md : "700px" }}
      rounded={'xl'}
      spacing={8}
      align={'center'}>
      <Stack align={'center'} spacing={2}
      w={"100%"}
      px={10}
      py={6}
        bg={useColorModeValue('primary.600', 'primary.600')}
        borderRadius={"xl"}
      >
        <Heading
        
    className={styles['italic']}
          textTransform={'uppercase'}
          fontSize={'3xl'}
          color={useColorModeValue('white', 'white')}>
          Subscribe !
        </Heading>
        <Text
        
    className={styles['italic']}
            maxW={"350px"}
            color={useColorModeValue('gray.100', 'gray.100')}
            textAlign={"center"}
            fontSize={"sm"}

        >
            Leave your email and we will send you the best trending technolgy solutions to grow your busines and be on top of your field
        </Text>
      </Stack>
      <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'} 
      px={5}
        py={6}
        pb={10}>
        <Input
        value={data.email}
        onChange={(e)=>setData({...data , email : e.target.value})}
 
          placeholder={'dzcreatech@gmail.com'}
          color={useColorModeValue('gray.800', 'gray.200')}
          bg={useColorModeValue('gray.100', 'gray.600')}
          rounded={'full'}
          border={"1px solid"}
          borderColor={"gray.200"}
          _focus={{
            bg: useColorModeValue('gray.200', 'gray.800'),
            border : "2px solid",
            borderColor: useColorModeValue('secondary.500', 'secondary.500'),
            outline: 'none',
            outtillne: "Opx",
            zIndex:500
          }}
          _focusVisible={{
            bg: useColorModeValue('gray.200', 'gray.800'),
            border : "2px solid",
            borderColor: useColorModeValue('secondary.500', 'secondary.500'),
            outline: 'none',
            outtillne: "Opx",
            zIndex:500
          }}
        />
        <Button
        onClick={submitHandler}
          bg={'secondary.600'}
          rounded={'full'}
          color={'white'}
          flex={'1 0 auto'}
          _hover={{ bg: 'econdary.500' }}
          _focus={{ bg: 'econdary.500' }}>
          Subscribe
        </Button>
      </Stack>
    </Stack>
  </Flex>
  )
}

NewsLetter.propTypes = {}

export default NewsLetter