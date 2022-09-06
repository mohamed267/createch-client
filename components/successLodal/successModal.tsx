import React  , {useState , useEffect , useRef} from 'react'

import {
  Flex ,
  Box,
  Stack  , 
  Heading , 
  Input , 
  Button,
  useColorModeValue,
  Text,
  FormControl,
  VStack,
  InputGroup,
  FormLabel,
  InputLeftElement,
  Textarea
} from '@chakra-ui/react'
import {  BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import {FaTimes} from "react-icons/fa"
const SuccessModal = ({   close  } :{ close : any}) => {



  
  





  return (
    <Flex
    mx={"auto"}
    w={"100%"}
    h={"100vh"}
    align={'center'}
    justify={'center'}
    my={6}
    mb={9}
    position={"fixed"}
    zIndex={500}
    top={0}
    >
    <Stack
      boxShadow={'2xl'}
      w={{base : "auto" , md : "700px" }}
      bg={useColorModeValue('gray.blur.100', 'gray.blur.100')}
      backdropFilter={"blur(120px)"}
      rounded={'xl'}
      position={"relative"}
      py={10}
      
      px={{base : 5 , md : 20}}
      spacing={8}
      align={'center'}>
      
      <Stack align={'center'} 
        
        borderRadius={"xl"}
      >
        <Heading
          textTransform={'uppercase'}
          fontSize={'2xl'}
          color={useColorModeValue('white', 'white')}>
         Thank you !
        </Heading>
        <Text
            color={useColorModeValue('gray.50', 'gray.50')}
            fontSize={"md"}
            py={5}

        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </Text>
      </Stack>
      <Box
                w={"100%"}
                color={useColorModeValue('gray.100', 'whiteAlpha.900')}
                >
                <VStack spacing={5}>

              

                  <Button
                  w={"100%"}
                    colorScheme="secondary.500"
                    bg="secondary.600"
                    color="white"
                    _hover={{
                      bg: 'secondary.500',
                    }}
                    onClick={close}
                    
          
                    >
                    Proceed
                  </Button>
                </VStack>
              </Box>

        

    </Stack>
  </Flex>
  )
}


export default SuccessModal