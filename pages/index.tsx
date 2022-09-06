import React ,{useState , useRef , useEffect} from 'react'
import { Box , useTheme  } from '@chakra-ui/react'
import Link from 'next/link'

// import BannerIcon from '../../assets/icons/banner';
import IndexLayout from '../layouts'
import Banner from '../components/banner/banner'
import Projects from '../components/projects'
import Service from '../components/service'
import NewsLetter from '../components/newsLetter'
import Button from '../components/button/button'
import SuccessModal from '../components/successLodal/successModal'
import Head  from "next/head"

import { FaPhone, FaHandshake } from 'react-icons/fa';
import ContactLetter from '../components/contactLetter/contactLetter'
import Logo from "../assets/images/logo.png"


const Home = () => {
  const [toPartner , setToPartner] = useState<boolean>(false)
  const [showSuccess , setShowSuccess] = useState<boolean>(false)
  const ButtonsRef = useRef<any>(null)
  const theme = useTheme ()

  const handleClickOutside = (e : MouseEvent) =>{
    if(ButtonsRef && ButtonsRef.current && !ButtonsRef.current.contains(e.target)){
      setToPartner(false)
    }
  }



  return (
    <>
    <Head>
      <title>
        Createch
      </title>
      <meta property="og:title" content="Createch" key="title" />
      <meta property="og:image" content={"https://scontent.forn3-1.fna.fbcdn.net/v/t1.15752-9/265570304_276781437845055_7274765224832999875_n.png?stp=dst-png_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=4de414&_nc_eui2=AeH4yDyjzJjxm03s4Tv-GSUrBm8ri9cU8ckGbyuL1xTxydJZ3Q7E8OtkkAMInKxteq0Fmfnu5VAjJHJaJmknMLik&_nc_ohc=CRC1sQw8Gm4AX92_PXE&_nc_ht=scontent.forn3-1.fna&oh=03_AVKAhpLG_RZvmAN1vNXITHM9_aLfayimKp85_3Y2D4FGEQ&oe=633AB122"} key="title" />
    </Head>
    <div className="client">
      <Banner />
      <Projects  id={"clients"}/>
      <Service id={"services"}/>
      {
        (showSuccess  ) ? 
        <SuccessModal close={()=>{setShowSuccess(false)}} /> :
        null

      }
      <NewsLetter    id="subscription"  submited = {()=>setShowSuccess(true)}/>
        <Box
        ref={ButtonsRef}
      
        zIndex={"300"}
        position={"fixed"}
        bottom={"15vh"}
        px={{base : 4}}
        >
        <Button   id="letter"  onClick={()=>setToPartner(true)} color={"gray.600"} bg={"white"} Icon={FaHandshake} label="Be a partner" />
        <Link href={"tel:+213556765919"}>
          <Button color={"gray.600"} Icon={FaPhone}  label="Contact us" />
        </Link>
      </Box>  
      
        {/* {
          toPartner ?  */}
          <ContactLetter 
          opened={toPartner}
          outside={handleClickOutside}
          
          
          close={()=>{setToPartner(false)}}
          submited = {()=>setShowSuccess(true)}
          
          />
        {/* : null
        } */}
     
    </div>
    </>
  )
}

Home.PageLayout = IndexLayout

Home.propTypes = {}

export default Home