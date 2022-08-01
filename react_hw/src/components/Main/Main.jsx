import styles from './main.module.css'
import First from "../Firts";
import Second from '../Second';

const Test = () => {

    const name = 'Roma'

    return (
        <div className={styles.main}>
                <First test={name}/>
                <Second test={name}/>
        </div>

    );
}

export default Test