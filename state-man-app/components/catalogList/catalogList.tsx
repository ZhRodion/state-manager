'use client'

import { FC, useEffect, useState } from 'react'
import getCatalogList from '../../api/requests'
import CatalogItem, { CatalogItemProps } from '../catalogItem/catalogItem'
import styles from './catalogList.module.scss'

const CatalogList: FC = () => {
	const [items, setItems] = useState<CatalogItemProps[]>([])

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const data = await getCatalogList()
				setItems(data)
			} catch (error) {
				console.error('Error fetching catalog list:', error)
			}
		}
		fetchItems()
	}, [])

	return (
		<div className={styles.catalogList}>
			{items.map(item => (
				<CatalogItem key={item.id} {...item} />
			))}
		</div>
	)
}

export default CatalogList
