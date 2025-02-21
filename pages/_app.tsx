import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { MDXProvider } from '@mdx-js/react'
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <SpeedInsights/>
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
    <Analytics />
  </>
  )
}
export default MyApp
