import styles from '../styles/Home.module.css'
import useWindow from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export default function Home() {
  const { width, height } = useWindow();
  return (
    <div className={styles.container}>
      <Confetti
        width={width}
        height={height}
      />
      <div className={styles.comingText}>
        Coming Soon
      </div>
    </div>
  )
}
