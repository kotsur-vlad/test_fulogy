import React from 'react';

import styles from './OptionItem.module.scss';
import checked from '../../assets/images/checked.svg';

class OptionItem extends React.Component {

	onItemClick = () => {
		this.props.chooseActive(this.props.id)
	}

	render () {

		const classForChecked = this.props.isChecked ? `${styles.item} ${styles.checked}` : styles.item;

		return (
			<div style={this.props.style} className={classForChecked} onClick={this.onItemClick}>
				{this.props.isChecked && <div className={styles.checkIcon}>
					<img src={checked} alt="checked"/>
				</div>}
				<div className={styles.itemTitle}>{this.props.title}</div>
			</div>
		);
	}
}

export default OptionItem;
