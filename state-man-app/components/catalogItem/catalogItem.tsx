import Image from 'next/image'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { buyItem } from '../../stores/catalog.actions'
import styles from '../catalogItem/catalogItem.module.scss'

export interface CatalogItemProps {
	id: string
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
	const dispatch = useDispatch()

	const handleBuyClick = () => {
		dispatch(buyItem(id))
	}

	return (
		<div className={styles.catalogItem}>
			<Image
				className={styles.catalogItemImg}
				src={image}
				width={300}
				height={300}
				loading='lazy'
				priority={false}
				quality='100'
				alt='.Product card Image'
			></Image>
			<div className={styles.catalogText}>
				<b className={styles.catalogTitle}>{title}</b>
				<p className={styles.cataogDescription}>{description}</p>
				<span className={styles.catalogCategory}>{category}</span>
				<p className={styles.catalogPrice}>Стоимость вещи {price} $</p>
			</div>
			<button
				className={styles.productCardBtn}
				type='button'
				onClick={handleBuyClick}
			>
				Купить
			</button>
		</div>
	)
}

export default CatalogItem
