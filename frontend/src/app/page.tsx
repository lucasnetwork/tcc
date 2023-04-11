"use client"
import ButtonFilter from './components/ButtonFilter'
import Chart from './components/Chart'
import styles from './page.module.css'
import useSWR from 'swr'
import api from '../../config/api'

const fetcher = (url:string) => {
  console.log("Oio")
  return api.get(url)
}
export default function Home() {
  const {data} = useSWR("logs",fetcher)
  console.log(data)
  console.log(process.env.NEXT_PUBLIC_URL)
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
      <div>
      <p className={styles.title}>Logs</p>
    <table className={styles.table}>
      <thead>
      <tr>
      <th>Programa</th>
      <th>Prioridade</th>
      <th>Mensagem</th>
      <th>Data</th>
      <th>Host</th>
      <th>Processo</th>
    </tr>
      </thead>
      <tbody>
        {data?.data?.map(log =>(
          <tr key={log._id}>

      <td>{log.program}</td>
      <td>{log.priority}</td>
      <td>{log.message}</td>
      <td>{log.isodate}</td>
      <td>{log.host}</td>
      <td>{log.facility}</td>
          </tr>
        ))}

      </tbody>
    </table>
      </div>
    </main>
  )
}
