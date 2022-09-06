import React from 'react'
import Navbar from '../components/navbar/navbar'
import  Footer from "../components/footer/footer"
import { Box } from '@chakra-ui/react'



type IndexProps = {children : JSX.Element}

const IndexLayout = ({children } : IndexProps) => {
  return (
    <Box
      maxW={"100vw"}
      overflow={"hidden"}
    >
        <Navbar />
        {
            children
        }
        <Footer  id="contact"/>
    </Box>
  )
}


export default IndexLayout