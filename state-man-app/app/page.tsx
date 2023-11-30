import Link from 'next/link'
import styles from '../app/page.module.scss'

export default function Home() {
	return (
		<div className={styles.mainPage}>
			<h1 className={styles.mainPageTitle}>Main Page</h1>
			<Link className={styles.catalogLink} href='/catalog'>
				<button className={styles.catalogBtn}>Switch to catalog</button>
			</Link>
		</div>
	)
}
