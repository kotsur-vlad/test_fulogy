import React from 'react';

import styles from './Options.module.scss';
import info from '../../assets/images/info.svg';
import OptionItem from './OptionItem';

class Options extends React.Component {

	state = {
		isHidden: true,
	};

	onShowInfoClick = () => {
		this.setState({
			isHidden: !this.state.isHidden
		});
	};

	render () {

		const description = this.props.fullDescription.map(d => <p>{d}</p>);

		const optionItems = this.props.activeOption.options.properties.map(oi => <OptionItem key={oi.id}
																							 id={oi.id}
																							 isChecked={oi.isChecked}
																							 title={oi.title}
																							 style={this.props.activeOption.options.style}
																							 chooseActiveOptionItem={this.props.chooseActiveOptionItem}/>);

		return (
			<div className={styles.options}>
				{ !this.state.isHidden && <div className={styles.info}>
					<button onClick={this.onShowInfoClick}>
						&#60; Вернуться
					</button>
					{description}
				</div>}
				<div className={styles.header}>
					<button onClick={this.onShowInfoClick}>
						<img src={info} alt="Info"/>
					</button>
					<span>Выберите <span className={styles.optionTitle}>{this.props.activeOption.title}</span></span>
				</div>
				<div className={styles.optionItems}>
					{optionItems}
				</div>
			</div>
		);
	}
}

export default Options;
