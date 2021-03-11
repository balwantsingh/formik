import Head from 'next/head'
import styles from '../styles/Home.module.css'
import YoutubeForm from '../components/YoutubeForm'

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
      <hr />
        <YoutubeForm />
      </main>

      <footer>
 
      </footer>
    </div>
  )
}
