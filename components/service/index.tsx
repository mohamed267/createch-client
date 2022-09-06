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

import ServiceBack from "../../assets/images/service.png"




const Service = ({id=""}) => {
  return (

    <Flex
    id={id}
    bg={useColorModeValue('white', 'white')}
    justify={"space-between"}
    flexWrap={{base : "wrap"}}
    px={{base : 4}}
    py={{base : 4}}
    pb={{base : 10 }}
    m={{md : 10}}
    align={'center'}>
      <Box
      width={{md : "60%"}}
      >
        <Text 
          textTransform={"capitalize"}
          
          fontSize={"md"}
          fontWeight={700}
          color={useColorModeValue('secondary.600', 'secondary.600')}
        >
          discover our services
        </Text>

        <Text 
          textTransform={"capitalize"}
          my={{base : 4}}
          letterSpacing={"4px"}
          lineHeight={"1em"}
          fontSize={{base:"4xl" , md:"7xl"}}
          fontWeight={700}
          color={useColorModeValue('primary.600', 'primary.600')}
        >
          smart Tech Solutions
        </Text>
        <Text
          fontSize={"sm"}
          color={useColorModeValue('primary.300', 'primary.300')}
          fontWeight={700}
          >
        Createch is a well-known custom software development company. We have been delivering functional business-focused solutions that fulfill user needs. Our custom software development solutions are backed by creative ideas and the right methods. This allows us to provide custom software solutions that exceed expectations. The custom Software development process we follow is as per industrial standards and the best quality is maintained throughout. This is why we are the top Algerian software development company that delivers consistent results and business values.
 

        </Text>


      </Box>

      <Box
        px={{base : 10}}
      >
        <Image 
          src={ServiceBack} 
          alt="banner"
          width={300}
          height={300}
        />
      </Box>
      
  </Flex>
  )
}


export default Service