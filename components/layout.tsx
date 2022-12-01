import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Nick Pellegrino'
export const siteTitle = 'Next.js Blog Project'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className="container max-w-full bg-indigo-800">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="an experienced front-end developer armed with an autodidact mentality. i'm very passionate about continued self growth and finding ways to overcome challenges when faced with adversity."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="text-white text-xl w-full grid container mx-auto center-content justify-center justify-items-center align-middle">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={275}
              width={325}
              alt={name}
              className="rounded-full mx-auto border-8 my-8 border-indigo-200"
            />
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2>
              <Link href="/">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <footer>
      
      </footer>
    </div>
  )
}