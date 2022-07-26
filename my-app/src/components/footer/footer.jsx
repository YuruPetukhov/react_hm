import styles from './footer.module.css'

export const Footer = (props) => {
   console.log(props.massage)
   return (
      <div>
         <div className={styles.footer}>FOOTER</div>
         <div>{props.massage}</div>
      </div>
   )
}