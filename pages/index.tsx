import Head from 'next/head'
import Footer from '../components/footer'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className= "container max-w-full mx-auto content-center justify-center grid place-content-center text-center pb-10">
        <p className="text-7xl text-gray-300 my-5 font-bold">Nick Pellegrino</p>
        <p className="text-slate-300 text-xl italic">This is a learning project to better understand nextjs and typescript.</p>
      </section>
      <section className="grid container max-w-full mx-auto justify-center items-center content-center justify-items-center items-center">
        <ul className="grid content-center items-center justify-center place-content-center mb-10">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="text-2xl text-white pb-10 bg-indigo-900 border-indigo-400 shadow-md border-l-8 p-10 mt-5">
              <Link href={`/posts/${id}`} className="text-yellow-300">{title}</Link>
              <br />
              <small className="text-indigo-500 font-bold text-md">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}