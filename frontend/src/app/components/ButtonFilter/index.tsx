import styles from './styles.module.css'

const ButtonFilter = ({label}:{label:string}) =>(
    <button className={styles.container}>{label}</button>
)
export default ButtonFilter