import React from 'react';

import styles from './ToggleItem.module.scss';

class ToggleItem extends React.Component {

	onToggleItemClick = () => {
		this.props.chooseActive(this.props.id);
	};

	render () {

		const classForItem = this.props.isActive ? `${styles.item} ${styles.active}` : styles.item;

		return (
			<div className={classForItem} onClick={this.onToggleItemClick}/>
		);
	}
}

export default ToggleItem;
