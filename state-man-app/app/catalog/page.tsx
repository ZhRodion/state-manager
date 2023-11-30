import CatalogItem from '@/components/catalogItem/catalogItem'
import CatalogList from '@/components/catalogList/catalogList'
import styles from '../catalog/catalogPage.module.scss'

const CatalogPage = () => {
	return (
		<div className={styles.catalogPage}>
			<div className='container'>
				<h1 className={styles.catalogPageTitle}> Catalog page</h1>
				<CatalogList>
					<CatalogItem
						id={0}
						title={''}
						price={0}
						description={''}
						category={''}
						image={''}
					/>
				</CatalogList>
			</div>
		</div>
	)
}

export default CatalogPage
