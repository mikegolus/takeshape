import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy;{new Date().getFullYear()} TAKE SHAPE LLC.
    </footer>
  )
}
