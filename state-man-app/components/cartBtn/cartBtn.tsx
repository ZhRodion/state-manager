import Image from 'next/image'
import Link from 'next/link'
import styles from '../cartBtn/cartBtn.module.scss'

const ShoppingCartButton = () => {
	return (
		<Link href='/shopping-cart'>
			<button className={styles.shoppingCartBtn}>
				<Image
					className={styles.cartImage}
					src='/cart.svg'
					width={35}
					height={35}
					loading='eager'
					priority={true}
					alt='.Cart Image'
				></Image>
			</button>
		</Link>
	)
}

export default ShoppingCartButton
