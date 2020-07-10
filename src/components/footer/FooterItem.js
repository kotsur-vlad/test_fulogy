import React from 'react';

import styles from './FooterItem.module.scss';

class FooterItem extends React.Component {

	onItemClick = () => {
		if (this.props.isCompleted !== 'active') {
			this.props.chooseActiveFooterItem(this.props.id)
		}
	}

	render () {

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
