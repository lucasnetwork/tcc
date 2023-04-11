
import ButtonFilter from './components/ButtonFilter'
import Chart from './components/Chart'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container_bar}>
      <Chart />

      </div>
      <div>
      <p className={styles.title}>Filtros</p>
      <div className={styles.filterContainer}>
        <ButtonFilter label='Prioridade'/>
        <ButtonFilter label='Programa'/>
        <ButtonFilter label='Data'/>
        <ButtonFilter label='Processo'/>
        <ButtonFilter label='Host'/>
      </div>

      </div>
      <p className={styles.title}>Logs</p>
    </main>
  )
}
