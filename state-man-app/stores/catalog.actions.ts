import { createAction } from '@reduxjs/toolkit'

export const buyItem = createAction('catalog/buyItem', (itemId: string) => ({
	payload: itemId,
}))
