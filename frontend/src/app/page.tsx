"use client"
import ButtonFilter from './components/ButtonFilter'
import Chart from './components/Chart'
import styles from './page.module.css'
import useSWR from 'swr'
import api from '../../config/api'
import Table from './components/Table'
import { useMemo } from 'react'
import { format, parseISO } from 'date-fns'

const fetcher = (url:string) => {
  return api.get(url)
}
export default function Home() {
  const {data,error} = useSWR<{
    data:any[]
  }>("logs",fetcher)
  const logsFormated = useMemo(()=>{
    if(!data?.data){
      return []
    }
    const logs = data?.data?.map(log =>{
      const date = format(parseISO(log.isodate),"dd/MM/yyyy HH:mm:ss")
      return {...log,isodate:date}
    })

    return logs
  },[data])

  return (
    <main className={styles.main}>
      <div>

      <h1 className={styles.titleH1}>Dashboard</h1>
      <p style={{
        fontSize:24
      }}>Total de logs:{logsFormated.length}</p>
      </div>
      <div className={styles.container_bar}>
      <Chart logs={data?.data||[]} />

      </div>
      <div>
      </div>
      <div>
      <p className={styles.title}>Logs</p>
    <Table logs={logsFormated}/>
      </div>
    </main>
  )
}
