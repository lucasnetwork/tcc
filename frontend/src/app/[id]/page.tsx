"use client";
import styles from "./styles.module.css";
import useSWR from "swr";
import api from "../../../config/api";
import { useMemo } from "react";
import { format, parseISO } from "date-fns";
import { useParams, useRouter } from "next/navigation";
import { IoIosArrowDropleftCircle } from "react-icons/io";

interface ILog {
  created_at: string;
  date: string;
  facility: string;
  host: string;
  id: string;
  isodate: string;
  message: string;
  priority: string;
  program: string;
  rule: {
    author: string;
    date: string;
    description: string;
    detection:any
    falsepositives: string[];
    id: string;
    level: string;
    logsource: {
      category: string;
      definition: string;
      product: string;
    };
    modified: string;
    references: string[];
    status: string;
    tags: string[];
    title: string;
  };
}

const fetcher = async ([url, id]: string[]) => {
  const response = await api.get<ILog>(`logs/${id}`);
  return response;
};
export default function Home() {
  const route = useParams();
  const router = useRouter();
  const { data, error } = useSWR(["log", route.id], fetcher);
  const logsFormated = useMemo(() => {
    if (!data) {
      return "";
    }
    const date = format(parseISO(data.data.isodate), "dd/MM/yyyy HH:mm:ss");
    return date;
  }, [data]);

  return (
    <main className={styles.main}>
      <div>
        <div className={styles.goBack}>
          <button type="button" onClick={() => router.back()}>
            <IoIosArrowDropleftCircle size={32} />
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
            <h2>Prioridade</h2>

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
              fontSize: "1.25rem",
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
      </div>
      <div className={styles.container_rule}>
        <p className={styles.title_rule}>Regra</p>
        <div className={styles.container_title}>
          <h3>Nome da Regra</h3>
          <p>{data?.data.rule.title}</p>
          <p className={styles.subtitle}>{data?.data.rule.description}</p>
        </div>
        <div>
          <div className={styles.container_title}>
            <h3>Categoria</h3>
            <p>{data?.data.rule.logsource.category}</p>
            <p className={styles.subtitle}>
              {data?.data.rule.logsource.definition}
            </p>
          </div>
        </div>
          <div className={styles.container_title}>
          <h2>Condições de Detecção: {data?.data?.rule?.detection.condition}</h2>
          <div>
            {JSON.stringify(data?.data?.rule?.detection[data?.data?.rule?.detection.condition] as any)}
          </div>
        </div>
        <div>
          <h2>Falsos positivos</h2>
          <div>
            {data?.data.rule?.falsepositives.map((falsepositive) => (
              <p key={falsepositive}>{falsepositive}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
