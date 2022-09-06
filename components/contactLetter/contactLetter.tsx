import React  , {useState ,useEffect,  useRef} from 'react'

import PerfectScrollbar from 'react-perfect-scrollbar'
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
const ContactLetter = ({outside = ()=>{} ,  close = ()=>{} , submited = ()=>{} , opened = false }:{outside : any ,  opened:any ,submited : any ,close : any   }) => {
  const [data , setData] = useState<any>({
    name : "",
    email :  "" , 
    number : "",
    description : ""
  })

  
  
  const contactRef = useRef<any>(null)


  useEffect( ()=>{
    console.log("our ref is  " , contactRef)
    window.addEventListener("click" , (e)=>{
      console.log("target ", e.target)
      console.log("ref ", contactRef.current)
      const target:any = e && e.target

      if(contactRef && contactRef.current && !contactRef.current.contains(e.target)){
        outside(e)
      }


    })
  } ,  [contactRef])

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
    close();
    submited()
  }


  return (
    
      <Flex
      opacity={0}
      className={`${opened ?  "opened" : "closed"}`}
      mx={"auto"}
      w={"100vw"}
      h={"100wh"}
      align={'center'}
      justify={'center'}
      my={6}
      mb={9}
      position={"fixed"}
      zIndex={500}
      top={0}
      >
        <PerfectScrollbar style={{maxHeight : "100vh" , overflow:"hidden"}}>
      <Stack
        boxShadow={'2xl'}
        h={"100%"}
        w={{base : "auto" , md : "700px" }}
        bg={useColorModeValue('gray.blur.100', 'gray.blur.100')}
        backdropFilter={"blur(120px)"}
        rounded={'xl'}
        position={"relative"}
        py={10}
        ref={contactRef}
        
        px={{base : 5 , md : 20}}
        spacing={8}
        align={'center'}>
            <Box 
              position={"absolute"}
              right={"3"}
              top={"3"}
              margin={"2"}
              fontSize={"2xl"}
              color={useColorModeValue('white', 'white')}
              cursor={"pointer"}
              onClick={close}
            >
              <FaTimes  />

            </Box>
        
        <Stack align={'center'} spacing={2}
          
          borderRadius={"xl"}
        >
          <Heading
            textTransform={'uppercase'}
            fontSize={'2xl'}
            color={useColorModeValue('white', 'white')}>
            You have a Business Idea to launch , Don’t worry you are at the perfect place !
          </Heading>
          <Text
              color={useColorModeValue('gray.50', 'gray.50')}
              fontSize={"md"}

          >
              Please Fill these infos and we will contact you as soon as possible 
          </Text>
        </Stack>
        <Box
                  w={"100%"}
                  color={useColorModeValue('gray.100', 'whiteAlpha.900')}
                  >
                  <VStack spacing={5}>
                    <FormControl isRequired>

                      <InputGroup>
                        <Input 
                        value={data.name}  
                        onChange={(e)=>setData({...data , name : e.target.value })} 
                        color={useColorModeValue('gray.100', 'whiteAlpha.900')} 
                        variant='flushed' type="text" name="name" placeholder="Your Full name" 
                        _placeholder={{ color: useColorModeValue('gray.100', 'whiteAlpha.900') }}
                        
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>

                      <InputGroup>
                        <Input
                        value={data.email}  
                        onChange={(e)=>setData({...data , email : e.target.value })} 
                        variant='flushed'
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          _placeholder={{ color: useColorModeValue('gray.100', 'whiteAlpha.900') }}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>

                      <InputGroup>
                        <Input
                        value={data.number}  
                        onChange={(e)=>setData({...data , number : e.target.value })} 
                        variant='flushed'
                          type="phone"
                          name="phone"
                          placeholder="Your Phone Number"
                          _placeholder={{ color: useColorModeValue('gray.100', 'whiteAlpha.900') }}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>

                      <Textarea
                        value={data.description} 
                        onChange={(e)=>setData({...data , description : e.target.value })} 
                      variant='flushed'
                        name="message"
                        placeholder="Describe your service"
                        rows={6}
                        resize="none"
                        _placeholder={{ color: useColorModeValue('gray.100', 'whiteAlpha.900') }}
                      />
                    </FormControl>

                    <Button
                    w={"100%"}
                      colorScheme="secondary.500"
                      bg="secondary.600"
                      color="white"
                      _hover={{
                        bg: 'secondary.500',
                      }}
                      onClick={submitHandler}
                      
            
                      >
                      Send Message
                    </Button>
                  </VStack>
                </Box>

          

      </Stack>
      </PerfectScrollbar>
    </Flex>
  )
}

ContactLetter.propTypes = {}

export default ContactLetter