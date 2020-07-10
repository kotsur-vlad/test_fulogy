import React from 'react';

import styles from './FooterItem.module.scss';

class FooterItem extends React.Component {

	onItemClick = () => {
		if (this.props.isCompleted !== 'active') {
			this.props.chooseActive(this.props.id);
		}
	};

	render () {
		//Выделение элементов футера
		const classForItem = this.props.isCompleted === 'active' ? `${styles.item} ${styles.active}` :
			this.props.isCompleted ? `${styles.item} ${styles.completed}` : styles.item;

		return (
			<div className={classForItem} onClick={this.onItemClick}>
				{this.props.title}
			</div>
		);
	}
}

export default FooterItem;
