import type { ReactNode } from 'react'
import styles from './button.module.css'

type ButtonProps = {
	square?: boolean
	children: ReactNode
	variant: 'button' | 'link'
	onClick?: () => void
	btnType?: 'submit' | 'button'
	classNames?: string[]
}

export const Button = ({
	square,
	children,
	variant,
	onClick,
	btnType,
	classNames,
}: ButtonProps): ReactNode => {
	return variant === 'button' ? (
		<button
			onClick={onClick}
			type={btnType}
			className={`${square ? styles.square : ''} ${classNames ? classNames.join(' ') : ''}`}
		>
			{children}
		</button>
	) : (
		<a className={`${square ? styles.square : ''}`}>{children}</a>
	)
}
