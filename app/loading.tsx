import styles from '@/styles/preloader.module.scss'

const Loading = () => {
    return ( 
    <div className={styles.loader}>
        <div className={styles.box}></div>
        <div className={styles.hill}></div>
    </div>
   );
}
 
export default Loading;