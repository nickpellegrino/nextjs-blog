import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    excerpt: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="container max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-yellow-300 text-center mt-10 border-indigo-400 bg-indigo-900 border-l-8 p-8 m-0">{postData.title}</h1>
        <h4 className="text-md italic text-white border-indigo-400 bg-slate-800 border-l-8 p-8 m-0">{postData.excerpt}</h4>
        <div className="text-xl text-right bg-slate-900 border-l-8 border-indigo-400 shadow-md p-2 text-yellow-200">
          <Date dateString={postData.date} />
        </div>
        <div className="mx-auto text-xl text-white container max-w-lg mt-10" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData
    }
  }
}