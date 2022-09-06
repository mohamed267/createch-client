import React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider , extendTheme } from '@chakra-ui/react'
import configs from '../styles/theme'

import "../styles/global.scss"
const  theme = extendTheme(configs)

type ComponentWithLayout = AppProps & {
  Component : AppProps['Component'] &
  {
    PageLayout?: React.ElementType
  }
}


function MyApp({ Component, pageProps }: ComponentWithLayout) {
  return (
  <ChakraProvider theme={theme}>
      {
          Component.PageLayout ? 
            <Component.PageLayout>
               <Component {...pageProps} />
            </Component.PageLayout>
            :  <Component {...pageProps} />
        }
  </ChakraProvider>
  )
}

export default MyApp



