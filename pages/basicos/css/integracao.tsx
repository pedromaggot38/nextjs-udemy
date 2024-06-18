import styles from './integracao.module.css';
function integracao() {
    return (
        <>
            <div id={styles.flex}>
                <h1 className={styles.red}>CSS - Integração</h1>
                <h1 className={styles.blue}>CSS - Integração</h1>
                <h1 className={styles.green}>CSS - Integração</h1>
            </div>
        </>
    );
}

export default integracao;