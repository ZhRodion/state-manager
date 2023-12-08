import CartList from '@/components/cartList/CartList'
import styles from '../shopping-cart/shopping-cart.module.scss'

const ShoppingCartPage = () => {
	return (
		<div className={styles.shoppingCartPageWrapper}>
			<div className={'container'}>
				<h1 className={styles.shoppingCartTitle}>Корзина</h1>
				<CartList>
					<div></div>
				</CartList>
			</div>
		</div>
	)
}

export default ShoppingCartPage
