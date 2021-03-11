import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="font-black text-6xl">
          Formik Forms
        </h1>

        <p className={styles.description}>
          Welcome to Formik forms</p>
      <hr />
        
      </main>

      <footer>
 
      </footer>
    </div>
  )
}
