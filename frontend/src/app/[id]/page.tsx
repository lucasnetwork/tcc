"use client"
import styles from './styles.module.css'
import useSWR from 'swr'
import api from '../../../config/api'
import { useMemo } from 'react'
import { format, parseISO } from 'date-fns'
import { useParams, useRouter } from 'next/navigation'
import { IoIosArrowDropleftCircle } from "react-icons/io";

const fetcher = ([url,id]:string[]) => {
  console.log("Oio")
  console.log(process.env.NEXT_PUBLIC_URL)
  return api.get(`logs/${id}`)
}
export default function Home() {
    const route = useParams()
    const router = useRouter()
  const {data,error} = useSWR<{
    data:any[]
  }>(["log",route.id],fetcher)
  const logsFormated = useMemo(()=>{
    if(!data){
      return ""
    }
    const date = format(parseISO(data.data.isodate),"dd/MM/yyyy HH:mm:ss")
    return date
  },[data])

  return (
    <main className={styles.main}>
      <div className={styles.goBack}>
        <button type="button" onClick={()=>router.back()}>
        <IoIosArrowDropleftCircle  size={32}/>
        </button>
        <p>Voltar</p>
      </div>
      <h1 className={styles.titleH1}>Log</h1>
      <div className={styles.container}>
        <div>
            <h2>Programa</h2>
        <p
          style={{
            flex: 1,
          }}
        >
          {data?.data?.program}
        </p>
        </div>
        <div>
            <h2>

        Prioridade
            </h2>

        <p
          style={{
            flex: 1,
          }}
        >
          {data?.data?.priority}
        </p>
        </div>
       
      
       <div>
        <h2>Data</h2>
        <p
          style={{
            flex: 0.8,
          }}
        >
          {logsFormated}
        </p>
       </div>
        <div>
            <h2>Host</h2>
            <p
          style={{
            flex: 0.8,
          }}
        >
          {data?.data?.host}
        </p>
        </div>
       <div>
            <h2>Processo</h2>
            <p
          style={{
            flex: 0.8,
          }}
        >
          {data?.data?.facility}
        </p>
       </div>
       
      </div>
      <div>
        <h2>Mensagem</h2>
        <p
        style={{
          fontSize:"1.25rem"
        }}
        >
          {data?.data?.message}
        </p>
       </div>
       <div>
        <button type="button" className={styles.button}>
          Remover log
        </button>
       </div>
    </main>
  )
}
