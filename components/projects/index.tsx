import React from 'react'
import Image from 'next/image';
import {
    Box,
    Flex,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import Proj1 from "../../assets/images/proj1.png"
import Proj2 from "../../assets/images/proj2.png"
import Proj3 from "../../assets/images/proj3.png"
import Proj4 from "../../assets/images/proj4.png"
import Proj5 from "../../assets/images/proj5.png"
import Proj6 from "../../assets/images/proj6.png"
import Link from 'next/link';

let projects = [
  {image : Proj1 , url : "#"},
  {image : Proj2 , url : "#"},
  {image : Proj3 , url : "#"},
  {image : Proj4 , url : "#"},
  {image : Proj5 , url : "#"},
  {image : Proj6 , url : "#"},
]


const Projects = ({id=""}) => {
  return (

    <Flex
    id={id}
        maxWidth={"A00vw"}
        overflowX={"hidden"}
        height={"150px"}
        px={{base : 4}}

        bg={useColorModeValue('gray.300', 'gray.300')}
        justify={"space-between"}
        mt={{base :5}}
        align={'center'}
    >
      {
        projects.map((project,  key)=>{
          return(
            <Image
              key={key}
              src={project.image}
              alt="proj1"
              objectFit={"scale-down"}
              height={"100px"}               
              width={"150px"}
              // width={150}
            />
          )

        })
      }
      
      
  </Flex>
  )
}

export default Projects