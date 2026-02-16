import { LogoIcon } from '@/components/ui/icons/logo-icon/LogoIcon'
import type { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './app-header.module.css'
import { TelegramIcon } from '@components/ui/icons/telegram-icon/TelegramIcon'
import { VkIcon } from '@components/ui/icons/vk-icon/VkIcon'
import { GitHubIcon } from '@components/ui/icons/github-icon/GitHubIcon'
import clsx from 'clsx'
import { BurgerMenuIcon } from '@components/ui/icons/burger-menu-icon/BurgerMenuIcon'
import { Button } from '@components/ui/button/Button'

export const AppHeaderUi: FC = () => {
	return (
		<header className={`py-4 ${styles.header}`}>
			<div className='container flex items-center justify-between'>
				<LogoIcon />
				<Button
					square
					variant='button'
					btnType='button'
					classNames={['md:hidden']}
				>
					<BurgerMenuIcon />
				</Button>
				<nav className='hidden md:flex gap-16 items-center flex-col md:flex-row'>
					<ul className='flex items-center gap-4'>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									clsx(styles.link_hover, isActive && styles.active)
								}
							>
								Главная
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/portfolio'
								className={({ isActive }) =>
									clsx(styles.link_hover, isActive && styles.active)
								}
							>
								Портфолио
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/reviews'
								className={({ isActive }) =>
									clsx(styles.link_hover, isActive && styles.active)
								}
							>
								Оставить отзыв
							</NavLink>
						</li>
					</ul>
					<ul className='flex items-center gap-4'>
						<li>
							<a href='https://t.me/hhajimeone' target='_blank'>
								<TelegramIcon />
							</a>
						</li>
						<li>
							<a href='https://vk.com/id266275865' target='_blank'>
								<VkIcon />
							</a>
						</li>
						<li>
							<a href='https://github.com/distinkt-dd' target='_blank'>
								<GitHubIcon />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
