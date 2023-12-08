import { createSlice } from '@reduxjs/toolkit'
import { buyItem } from '../stores/catalog.actions'

interface CatalogState {
	selectedItemId: string | null
}

const initialState: CatalogState = {
	selectedItemId: null,
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(buyItem, (state, action) => {
			state.selectedItemId = action.payload
		})
	},
})

export const { reducer } = catalogSlice
