import React from 'react';

import styles from './Info.module.scss';

class Info extends React.Component {
	render () {
		return (
			<div className={styles.info}>
				<ul>
					<li><span className={styles.property}>Класс:</span><span className={styles.value}>Класс:</span></li>
					<li><span className={styles.property}>Потребляемая мощность:</span><span className={styles.value}>Класс:</span></li>
					<li><span className={styles.property}>Сила света:</span><span className={styles.value}>Класс:</span></li>
					<li><span className={styles.property}>Гарантия:</span><span className={styles.value}>Класс:</span></li>
					<li><span className={styles.property}>Монтаж:</span><span className={styles.value}>Класс:</span></li>
					<li><span className={styles.property}>Итого сумма:</span><span className={styles.value}>Класс:</span></li>
				</ul>
			</div>
		);
	}
}

export default Info;
