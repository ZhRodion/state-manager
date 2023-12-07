import axios from 'axios'

// Базовый url
const CATALOG_API_URL = 'https://fakestoreapi.com'

const getCatalogList = async () => {
	try {
		const res = await axios.get(`${CATALOG_API_URL}/products`, {
			params: { offset: 0, limit: 10 },
		})

		return res.data
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(error.response?.data.errText, 'error')
		} else if (error instanceof Error) {
			console.log(error.message)
		}
	}
}

export default getCatalogList
