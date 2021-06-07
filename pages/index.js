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
        <h1 className={styles.title}>
          Welcome to SnoopDogeFarm
        </h1>

        <div className={styles.grid}>
          <a href="https://snoopdoge.finance.blog/" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Click here to learn more about SnoopDoge.</p>
          </a>

          <a href="https://fr.wikipedia.org/wiki/Snoop_Dogg" >
            <h3>Learn &rarr;</h3>
            <p>Learn about our super true best king!</p>
          </a>

          <a
            href="https://snoopdoge.finance.blog/"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>On va faire que des trucs supers cools parce qu on est des gens funs.</p>
          </a>

          <a
            href="https://snoopdoge.finance.blog/"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly love our project when you see it.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://snoopdoge.finance.blog/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  )
}
