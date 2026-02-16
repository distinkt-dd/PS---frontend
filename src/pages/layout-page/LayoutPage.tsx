import { MainPage } from '@pages/main-page/MainPage'
import { AppHeader } from '@widgets/app-header/AppHeader'
import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReviewsPage } from '@pages/reviews-page/ReviewsPage'
import { PortfolioPage } from '@pages/portfolio-page/PortfolioPage'

export const LayoutPage: FC = () => {
	return (
		<>
			<AppHeader />
			<main className='main'>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/portfolio' element={<PortfolioPage />} />
					<Route path='/reviews' element={<ReviewsPage />} />
				</Routes>
			</main>
		</>
	)
}
