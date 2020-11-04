import React, { ReactElement, useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App(props: AppProps): ReactElement {
  const { Component, pageProps } = props
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'pageview',
        pagePath: url,
        pageTitle: document.title,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
