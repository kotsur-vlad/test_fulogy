import React from 'react';

import styles from './FooterItem.module.scss';

class FooterItem extends React.Component {

	onOptionClick = () => {
		this.props.chooseActiveOption(this.props.id)
	}

	render () {

		const classForItem = this.props.isCompleted === 'active' ? `${styles.item} ${styles.active}` :
			this.props.isCompleted ? `${styles.item} ${styles.completed}` : styles.item;

		return (
			<div className={classForItem} onClick={this.onOptionClick}>
				{this.props.title}
			</div>
		);
	}
}

export default FooterItem;
