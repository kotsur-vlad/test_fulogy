import React from 'react';

import styles from './Options.module.scss'

class Options extends React.Component {
	render () {
		return (
			<div className={styles.options}>
				<div className={styles.header}>
					<button>
						i
					</button>
					<span>Выберите: {this.props.optionTitle}</span>
				</div>
				<div className={styles.variants}>
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</div>
			</div>
		)
	}
}

export default Options;
