import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Recetario Familiar';
export const siteTitle = 'Recetario Familiar';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
{/* DEV */}
        {/* <link rel="icon" href='/../public/images/logo.png' /> */}

{/* DEPLOY */}
        <link rel="icon" href="https://raw.githubusercontent.com/soyMoka/RecetarioFamiliar/main/public/images/logo.png" />
        <meta
          name="description"
          content="Recetario c:"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              /* DEV */
              // src="/../public/images/logo.png"
              /* DEPLOY */
              src="https://raw.githubusercontent.com/soyMoka/RecetarioFamiliar/main/public/images/logo.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                 /* DEV */
                // src="/../public/images/logo.png"
                /* DEPLOY */
                src="https://raw.githubusercontent.com/soyMoka/RecetarioFamiliar/main/public/images/logo.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <footer className={utilStyles.centerTextFooter}>
        <p>
          (Web hecha por Matias Cejas Schmoker con Next.js)
        </p>
      </footer>
    </div>
  );
}
