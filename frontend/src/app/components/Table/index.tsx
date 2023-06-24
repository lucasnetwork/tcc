"use client";
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
        <li key={log.id}>
          <p
            style={{
              flex: 1,
            }}
          >
            {log.program}
          </p>
          <p
            style={{
              flex: 1,
            }}
          >
            {log.priority}
          </p>
          <p
            style={{
              flex: 2,
            }}
          >
            {log.message}
          </p>
          <p
            style={{
              flex: 0.8,
            }}
          >
            {log.isodate}
          </p>
          <p
            style={{
              flex: 0.8,
            }}
          >
            {log.host}
          </p>
          <p
            style={{
              flex: 0.5,
            }}
          >
            {log.facility}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default Table;
