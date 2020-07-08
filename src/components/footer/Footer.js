import React from 'react';

import styles from './Footer.module.scss'

class Footer extends React.Component {
	render () {
		return (
			<div className={styles.footer}>
				<div className={styles.option}>Вариант кухни</div>
				<div className={styles.option}>Размеры</div>
				<div className={styles.option}>Сенсор</div>
				<div className={styles.option}>Питающий кабель</div>
				<div className={styles.option}>Блок питания</div>
				<div className={styles.option}>Цвет сечения</div>
				<div className={styles.option}>Монтаж</div>
				<div className={styles.option}>Корзина</div>
			</div>
		)
	}
}

export default Footer;
