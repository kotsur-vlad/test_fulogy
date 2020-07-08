import React from 'react';

import styles from './Header.module.scss'
import logo from '../../assets/images/logo.svg'

class Header extends React.Component {
	render () {
		return (
			<div className={styles.header}>

				<img className={styles.logo} src={logo} alt="Fulogy"/>

				<a className={styles.basket} href="#">shopIcon</a>

				<button className={styles.gamburgerMenu}>gamburger</button>

				<div>
					<ul>
						<li>Обучающее видео</li>
						<li>Оформление заказа</li>
						<li>Оплата</li>
						<li>Доставка</li>
						<li>Гарантия</li>
						<li>Возврат</li>
						<li>Контакты</li>
						<li>Партнёрам</li>
					</ul>
				</div>

			</div>
		)
	}
}

export default Header;
