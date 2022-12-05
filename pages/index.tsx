import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CardList from '../components/CardList'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <CardList />
    </div>
  )
}