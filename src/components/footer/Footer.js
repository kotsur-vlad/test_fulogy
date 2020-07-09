import React from 'react';

import styles from './Footer.module.scss';
import FooterItem from './FooterItem';

class Footer extends React.Component {

	state = {
		footerItems: [
			{id: 1, title: 'Вариант кухни', isCompleted: true},
			{id: 2, title: 'Размеры', isCompleted: true},
			{id: 3, title: 'Сенсор', isCompleted: true},
			{id: 4, title: 'Питающий кабель', isCompleted: true},
			{id: 5, title: 'Блок питания', isCompleted: true},
			{id: 6, title: 'Цвет сечения', isCompleted: 'active'},
			{id: 7, title: 'Монтаж', isCompleted: false},
			{id: 8, title: 'Корзина', isCompleted: false},
		]
	};

	chooseActiveOption = (id) => {
		let newFooterItems = this.state.footerItems.map(fi => {
			if (fi.isCompleted === 'active') {
				return {
					...fi, isCompleted: true
				};
			} else if (fi.id === id) {
				return {
					...fi, isCompleted: 'active'
				};
			} else {
				return fi;
			}
		});
		this.setState({
			footerItems: newFooterItems
		});
	};

	render () {

		const footerItems = this.state.footerItems.map(fi => <FooterItem key={fi.id} id={fi.id} title={fi.title}
																		 chooseActiveOption={this.chooseActiveOption}
																		 isCompleted={fi.isCompleted}/>);

		return (
			<div className={styles.footer}>
				{footerItems}
			</div>
		);
	}
}

export default Footer;
