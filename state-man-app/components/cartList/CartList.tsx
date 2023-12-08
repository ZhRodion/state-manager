import { FC } from 'react'
import styles from '../CartList/CartList.module.scss'

interface CartListProps {
	children: React.ReactNode
}

const CartList: FC<CartListProps> = ({ children }) => {
	return <div className={styles.shoppingCartList}>{children}</div>
}

export default CartList
