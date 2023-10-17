import Head from 'next/head'
import { Inter } from 'next/font/google'
import App from "../App"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunny Residency</title>
        <meta name="description" content="Sunny Residency offers the finest lodging and dining experiences in Pune, ensuring a memorable stay in the cultural heart of Maharashtra." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <App />
    </>
  )
}
