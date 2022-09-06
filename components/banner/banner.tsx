import React from 'react'
import Image from 'next/image';
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  
} from '@chakra-ui/react';


// import Banner from "../../assets/images/banner.png"

import Banner from "../../assets/images/banner.png"



const BannerComponent = () => {
  return (
    <Flex
    bg={useColorModeValue('primary.600', 'primary.600')}
    justify={"space-between"}
    minH={"80vh"}
    flexWrap={{base : "wrap"}}
    px={{base : 4}}
    py={{base : 4}}
    pb={{base : 20}}
    paddingTop={"120px"}
    align={'center'}>
      <Box
      width={{md : "60%" , sm:"100%"}}
      my={{base : 8}}
      >
        <Text 
          textTransform={"capitalize"}
          
          fontSize={"md"}
          fontWeight={700}
          color={useColorModeValue('secondary.600', 'secondary.600')}
        >
          technology Solutions Company
        </Text>

        <Text 
          textTransform={"capitalize"}
          fontSize={{base:"4xl" , md:"8xl"}}
          my={{base : 4}}
          fontWeight={700}
          color={useColorModeValue('white', 'white')}
        >
          createch
        </Text>
        <Text
          textTransform={"capitalize"}
          fontSize={"lg"}
          color={useColorModeValue('gray.50', 'gray.50')}
          fontWeight={700}
          >
        we are a technology solutions company formed by an  algerian team with extensive  experience in innovation and digital Growth.
We work, mainly in the creation of digital solution and products based on new technologies to move your Business ideas to the professional level . 

        </Text>


      </Box>
      <Box
        px={{base : 10}}
      >
        <Image 
          src={Banner} 
          alt="banner"
          width={300}
          height={300}
        />
      </Box>
  </Flex>
  )
}


export default BannerComponent