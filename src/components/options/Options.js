import React from 'react';

import styles from './Options.module.scss';
import info from '../../assets/images/info.svg';

class Options extends React.Component {

	state = {
		isHidden: true,
	};

	onInfoClick = () => {
		this.setState({
			isHidden: !this.state.isHidden
		});
	};

	render () {

		const description = this.props.fullDescription.map( d => <p>{d}</p> )

		return (
			<div className={styles.options}>
				{ !this.state.isHidden && <div className={styles.info}>
					<button onClick={this.onInfoClick}>
						&#60; Вернуться
					</button>
					{description}
				</div>}
				<div className={styles.header}>
					<button onClick={this.onInfoClick}>
						<img src={info} alt="Info"/>
					</button>

					<span>Выберите: {this.props.optionTitle}</span>
				</div>

				<div className={styles.variants}>
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</div>

			</div>
		);
	}
}

export default Options;
