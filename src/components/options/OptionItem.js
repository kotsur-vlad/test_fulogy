import React from 'react';

import styles from './OptionItem.module.scss';
import checked from '../../assets/images/checked.svg';

class OptionItem extends React.Component {

	// onOptionClick = () => {
	// 	this.props.(this.props.id)
	// }

	render () {
		return (
			<div style={this.props.style} className={styles.item} onClick={this.onOptionClick}>
				{this.props.isChecked && <div className={styles.checked}>
					<img src={checked} alt="checked"/>
				</div>}
				<div className={styles.itemTitle}>{this.props.title}</div>
			</div>
		);
	}
}

export default OptionItem;
