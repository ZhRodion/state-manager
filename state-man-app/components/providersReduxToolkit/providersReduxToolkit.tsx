'use client'

import { store } from '@/stores/redux.store'
import { FC } from 'react'
import { Provider } from 'react-redux'

interface ProvidersProps {
	children: React.ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}
