import { FC } from 'react'
import styles from '../header/header.module.scss'

interface HeaderProps {
	children: React.ReactNode
}

const Header: FC<HeaderProps> = ({ children }) => {
	return (
		<header className={styles.header}>
			<div className={`${'container'} ${styles.headerContainer}`}>
				{children}
			</div>
		</header>
	)
}

export default Header
