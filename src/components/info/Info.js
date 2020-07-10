import React from 'react';

import styles from './Info.module.scss';

class Info extends React.Component {
	render () {
		return (
			<div className={styles.info}>
				<ul>
					<li><span className={styles.property}>Класс:</span><span className={styles.value}><button
						className={styles.classButton}>Standard</button></span></li>
					<li><span className={styles.property}>Потребляемая мощность:</span><span className={styles.value}>59 Вт.</span>
					</li>
					<li><span className={styles.property}>Сила света:</span><span className={styles.value}>3459 Люмен = 7,5 ламп накаливания по 40 Вт.</span>
					</li>
					<li><span className={styles.property}>Гарантия:</span><span className={styles.value}>3 года</span>
					</li>
					<li><span className={styles.property}>Монтаж:</span><span className={styles.value}>Да</span></li>
					<li><span className={styles.property}>Итого сумма:</span><span
						className={styles.value}>2594 рублей</span></li>
				</ul>
			</div>
		);
	}
}

export default Info;
