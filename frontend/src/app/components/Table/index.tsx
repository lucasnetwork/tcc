"use client";
import Log from "./components/Log";
import styles from "./styles.module.css";
const Table = ({ logs }) => (
  <div className={styles.table}>
    <div className={styles.headTable}>
      <div
        style={{
          flex: 1,
        }}
      >
        Programa
      </div>
      <div
        style={{
          flex: 1,
        }}
      >
        Prioridade
      </div>
      <div
        style={{
          flex: 2,
        }}
      >
        Mensagem
      </div>
      <div
        style={{
          flex: 0.8,
        }}
      >
        Data
      </div>
      <div
        style={{
          flex: 0.8,
        }}
      >
        Host
      </div>
      <div
        style={{
          flex: 0.5,
        }}
      >
        Processo
      </div>
    </div>
    <ul className={styles.contentTable}>
      {logs?.map((log) => (
       <Log log={log} key={log.id} />
      ))}
    </ul>
  </div>
);

export default Table;
