import { useState } from "react";
import styles from "./styles.module.css"
import { SlArrowDown } from "react-icons/sl";

const Log = ({log}:{
    log:{
        program:string
        priority:string
        message:string
        isodate:string
        host:string
        facility:string
    }
}) =>{
    const [open,setOpen] = useState(false)


    return (
        <li style={{width:"100%"}}>
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
        <div  style={{
            flex: 2,
            display:"flex"
          }}>
        <p
         style={{flex:1,maxWidth:"500px"}}
          className={open?"":styles.container_paragraph}
        >
          {log.message}
        </p>
        <button type="button" onClick={()=>{
            setOpen(!open)
        }} className={styles.container_button}>
        <SlArrowDown />
        </button>
        </div>
      
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
    )
}
export default Log