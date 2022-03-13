import styles from '../styles/Home.module.css'
import useWindow from 'react-use/lib/useWindowSize';

export default function Home() {
  const { width, height } = useWindow();
  return (
    <div className={styles.container}>
      <div className={styles.comingText}>Coming Soon!</div>
    </div>
  )
}
