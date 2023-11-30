import { FC } from 'react'
import styles from './catalogList.module.scss'

interface CatalogListProps {
	children: React.ReactNode
}

const CatalogList: FC<CatalogListProps> = ({ children }) => {
	return <div className={styles.catalogList}>{children}</div>
}

export default CatalogList
