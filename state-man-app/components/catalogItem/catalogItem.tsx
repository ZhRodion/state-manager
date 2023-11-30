import Image from 'next/image'
import { FC } from 'react'
import styles from '../catalogItem/catalogItem.module.scss'

export interface CatalogItemProps {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
}

const CatalogItem: FC<CatalogItemProps> = ({
	id,
	title,
	price,
	description,
	category,
	image,
}) => {
	return (
		<div className={styles.catalogItem}>
			<Image
				className={styles.catalogItemImg}
				src={image}
				width={300}
				height={300}
				loading='lazy'
				alt='.Product card Image'
			></Image>
			<div className={styles.catalogText}>
				<b className={styles.catalogTitle}>{title}</b>
				<p className={styles.cataogDescription}>{description}</p>
				<span className={styles.catalogCategory}>{category}</span>
				<p className={styles.catalogPrice}>Стоимость вещи {price} $</p>
			</div>
		</div>
	)
}

export default CatalogItem
