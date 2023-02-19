import World from "./World";
import styles from "./Hello.module.css";

export default function Hello(){
  return (
    <div className={styles.box}>
    <h1>Hello</h1>
    <World />
    <World />
    </div>
  ) 
}