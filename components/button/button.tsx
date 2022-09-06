import React, { Component } from 'react'
import { Button, ButtonProps, Flex , Box ,useColorModeValue } from '@chakra-ui/react';
import { NULL } from 'sass';

type CustomButtonProps = ButtonProps & {
    label?: string,
    Icon?: any,
    bg?:string,
    color?:string
}

const ButtonComponent = (props : CustomButtonProps) => {
    const Icon = props.Icon ? props.Icon : null
    const colorIcon =  useColorModeValue('white', 'white')
    const backgroundIcon =  useColorModeValue('secondary.600', 'secondary.600')
  return (
        <Button
        display={"flex"}
        {...props}
        px={3}
        my={2}
        fontSize={'sm'}
        rounded={'3xl'}
        bg={useColorModeValue(props.bg, props.bg)}
        color={useColorModeValue(props.color, props.color) }
        border={"1px solid"}
        borderColor={'gray.200'}
        _hover={{
            bg: useColorModeValue('gray.200', 'gray.200'),
        }}
        _focus={{
            bg: useColorModeValue('gray.200', 'gray.200'),
        }}>

        
        {Icon? 
        <Box color={colorIcon} bg={backgroundIcon} p={2} me={2} rounded="full">
            <Icon color/> 
        </Box>
        :  <></>}

       
            
        {props.label ?  props.label : ""}

        </Button>
    
  )
}


export default ButtonComponent