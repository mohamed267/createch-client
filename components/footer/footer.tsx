import {
    Box,
    Flex,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import Image from "next/image"
  import { FaInstagram, FaFacebook, FaLinkedin } from  'react-icons/fa';
  import { ReactNode } from 'react';


  import BackFooterStart from "../../assets/images/backFooterStart.png"
  
 
  import LogoFooter from '../../assets/icons/logoFooter';
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer({id=""}) {
    return (

        <Flex
        id={id}
          bg={useColorModeValue('primary.600', 'primary.600')}
          color={useColorModeValue('white', 'white')}>
          
          
          <Box 
            transform={"translateX(-150px)"}
            display={{base : 'none' , md: "block"}}
          >
            <Image
              height={"600px"}
              src={BackFooterStart}
              alt='back-footer-start'
            />
          </Box>
          
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            spacing={4}
            justify={'center'}
            align={'center'}>
               <Stack fontSize={"md"} direction={'row'} spacing={6}>
                  <SocialButton   label={'Facebook'} href={'https://www.facebook.com/thecreatechdz'} >
                    <FaFacebook  />
                  </SocialButton>
                  <SocialButton label={'Instagram'} href={'https://www.instagram.com/thecreatechdz/'}>
                    <FaInstagram />
                  </SocialButton>
                  <SocialButton label={'LinkedIn'} href={''}>
                    <FaLinkedin />
                  </SocialButton>
          </Stack>
            <LogoFooter />
            <Text color={useColorModeValue('secondary.600', 'secondary.600')}>
            © 2021 All Rights Reserved
            </Text>
          </Container>

          <Box 
            transform={"translateX(150px)"}
            display={{base : 'none' , md: "block"}}
          >
            <Image
            height={"600px"}
              src={BackFooterStart}
              alt='back-footer-start'
            />
          </Box>
          
    
          
        </Flex>
    );
  }