import {useEffect , useState} from "react"

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  
  import Logo from '../../assets/icons/logo';
  import { useRouter } from 'next/router';


  import styles from "./navbar.module.scss"
  
  
  
  export default function Navbar() {
    const  [position , setPosition] = useState<number>(0)
    const [isScrollDow , setIsScrollDown] = useState<boolean>(false)
    const { isOpen, onToggle } = useDisclosure();



    const handlePosition = (newPos :  number)=>{

      if(newPos>position) {
        setIsScrollDown(true)
      }else{
        setIsScrollDown(false)
      }

      setPosition(newPos)


    }


    useEffect(()=>{
      window.addEventListener('scroll', (e)=>{
        handlePosition(window.pageYOffset);
      })
    })

    useEffect(()=>{
      console.log(isScrollDow ?  "scrool down" :  "dcrool up")
    } , [isScrollDow])

    
  
  
    return (
      <Box 
      bg={useColorModeValue('primary.600', 'primary.600')}
      w={"100vw"} position={"fixed"} className={isScrollDow?styles["nav--hidden"] :styles["nav--shown"]  }>
        <Flex
          bg={useColorModeValue('primary.600', 'primary.600')}
          justify={{base : "space-between"}}
          color={useColorModeValue('white', 'white')}
          minH={'60px'}
          px={{ base: 4 }}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex 
            flex={{ base: 1 }} 
            justify={{ base: 'center', md: 'space-between' }}
            borderColor={"gray.100"}
            borderBottom={".5px solid"}
            >
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('white', 'white')}>
                <Logo />
            </Text>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const router = useRouter()
    const linkColor = useColorModeValue('white', 'gray.200');
    const linkHoverColor = useColorModeValue('secondary.600', 'secondary.600');
    const visitedColor = useColorModeValue('secondary.600', 'secondary.600');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const [asPath ,  setAsPath] = useState<string>("")

    useEffect(()=>{
      setAsPath(router.asPath)
    } , [router])

  
    return (
      <Stack direction={'row'} spacing={4}>
        {
          NAV_ITEMS.map((navItem) => {
            let visited = (asPath == navItem.href);
            let styleVisited =visited ?  {
              borderBottom:"3px solid",
              borderColor:visitedColor
            }  :{}
            return(
              <Box key={navItem.label}>
                <Popover trigger={'hover'} placement={'bottom-start'}>
                  <Flex
                    display={{base : "flex"}}
                    alignItems={{base : "center"}}
                    justify={{md: "center"}}
                    height={{base : "100%"}}
                    minWidth={"100px"}
                    {...styleVisited}
                  >
                    <PopoverTrigger 
                      >
                          <Link
                          onClick={()=>setAsPath(navItem.href ?? '#')}
                            p={2}
                            href={navItem.href ?? '#'}
                            fontSize={'sm'}
                            fontWeight={500}
                            color={linkColor}
                            textTransform="capitalize"
                            _hover={{
                              textDecoration: 'none',
                              color: linkHoverColor,
                            }}>
                            {navItem.label}
                          </Link>
  
                    </PopoverTrigger>
                      
                    </Flex>
  
                  {navItem.children && (
                    <PopoverContent
                      border={0}
                      boxShadow={'xl'}
                      bg={popoverContentBgColor}
                      p={4}
                      rounded={'xl'}
                      minW={'sm'}>
                      <Stack>
                        {navItem.children.map((child) => (
                          <DesktopSubNav key={child.label} {...child} />
                        ))}
                      </Stack>
                    </PopoverContent>
                  )}
                </Popover>
              </Box>
            )
          })
        }
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'home',
      href : "/#",
    },
    {
      label: 'clients',
      href : "/#clients"
    },
    {
      label: 'services',
      href : "/#services"
    },
    {
      label: 'subscription',
      href : "/#subscription"
    },{
      label: 'contact',
      href : "/#contact"
    }
  ];