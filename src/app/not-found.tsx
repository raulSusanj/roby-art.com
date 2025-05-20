import Head from 'next/head'
import Link from 'next/link'
import styles from './styles/not-found.module.css' // You'll need to create this CSS module

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Stranica nije pronađena</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Stranica nije pronađena</h2>

          <div className={styles.illustration}>
            {/* You can replace this with an SVG or image */}
            <div className={styles.planet}></div>
            <div className={styles.rocket}></div>
            <div className={styles.stars}>
              {[...Array(20)].map((_, i) => (
                <div key={i} className={styles.star}></div>
              ))}
            </div>
          </div>

          <p className={styles.description}>
            Nažalost stranica koju tražite ne postoji ili je premještena.
          </p>

          <Link href="/" className={styles.homeLink}>
            Vratite se na početnu stranicu
          </Link>
        </div>
      </div>
    </>
  )
}
