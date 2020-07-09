import React from 'react';

import styles from './Preview.module.scss';

class Preview extends React.Component {
	state = {
		isChecked: true
	}

	render () {


		let style = {
			backgroundImage: `url(${this.props.images[0]})`,
		}

		return (
			<div style={style} className={styles.preview}>
				<div className={styles.test}>

				</div>
				{/*<img className={styles.test} src={this.props.images[0]} alt=""/>*/}
				<div >
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</div>
			</div>
		);
	}
}

export default Preview;
