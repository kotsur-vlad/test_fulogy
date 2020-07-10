import React from 'react';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/menu.svg';
import close from '../../assets/images/close.svg';
import cart from '../../assets/images/cart.svg';

class Header extends React.Component {
	state = {
		isHidden: true,
	};

	onToggleClick = () => {
		this.setState({
			isHidden: !this.state.isHidden
		});
	};

	render () {

		// const classForMenu = this.state.isHidden ? `${styles.hidden} ${styles.menu}` : styles.menu;

		return (
			<div className={styles.header}>
				<a className={styles.logo} href="#">
					<img src={logo} alt="Fulogy"/>
				</a>
				<a className={styles.basket} href="#">
					<img src={cart} alt="ShopCart"/>
					<span>{this.props.lampCount}</span>
				</a>
				<button className={styles.toggle} onClick={this.onToggleClick}>
					{this.state.isHidden ? <img src={menu} alt="Menu"/> : <img src={close} alt="Close"/>}
				</button>
				{ !this.state.isHidden && <div className={styles.menu}>
					<ul>
						<li><a href="#">Обучающее видео</a></li>
						<li><a href="#">Оформление заказа</a></li>
						<li><a href="#">Оплата</a></li>
						<li><a href="#">Доставка</a></li>
						<li><a href="#">Гарантия</a></li>
						<li><a href="#">Возврат</a></li>
						<li><a href="#">Контакты</a></li>
						<li><a href="#">Партнёрам</a></li>
					</ul>
				</div>}
			</div>
		);
	}
}

export default Header;
