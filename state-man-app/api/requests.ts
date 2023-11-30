import axios from 'axios'

// Базовый url
const CATALOG_API_URL = 'https://fakestoreapi.com'

const getCatalogLIst = async () => {
	try {
		const res = await axios.get(`${CATALOG_API_URL}/catalog`, {
			params: { offset: 0, limit: 10 },
		})

		return res
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(error.response?.data.errText, 'error')
		} else if (error instanceof Error) {
			console.log(error.message)
		}
	}
}

export default getCatalogLIst
