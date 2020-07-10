import React from 'react';

import styles from './Preview.module.scss';
import ToggleItem from '../../common/components/ToggleItem';

class Preview extends React.Component {
	//Загрузка в локальный стэйт массива фото ракурсов кухни для работы с ним
	constructor (props) {
		super(props);
		const initialImages = this.props.images.map((img, i) => {
			return {id: i, image: img, isActive: false};
		});
		initialImages[0].isActive = true;
		this.state = {
			images: initialImages,
			filters: [
				{title: 'Тёплый', style: {backgroundColor: 'rgba(245,130,130,0.1)'}},
				{title: 'Дневной', style: {backgroundColor: 'transparent'}},
				{title: 'Холодный', style: {backgroundColor: 'rgba(0,115,255,0.1)'}}
			]
		};
	}

	state = {
		images: []
	};
	//Выбор акивного изображения ракурса кухни
	chooseActiveToggleItem = (activeImageId) => {
		let newImages = this.state.images.map(img => {
			if (img.id === activeImageId) {
				return {
					...img, isActive: true
				};
			} else {
				return {
					...img, isActive: false
				};
			}
		});
		this.setState({
			images: newImages
		});
	};

	render () {
		const toggleItems = this.state.images.map(img => <ToggleItem key={img.id} id={img.id} isActive={img.isActive}
																	 chooseActive={this.chooseActiveToggleItem}/>);
		//Переменные для отрисовки активного изображения ракурса кухни
		const activeImage = this.state.images.find(img => img.isActive).image;
		const activeImageStyle = {
			backgroundImage: `url(${activeImage})`
		};
		//Установка нового цвета сечения
		const activeFilterStyle = this.state.filters.find(fi => fi.title === this.props.activeSectionColor).style;

		return (
			<div style={activeImageStyle} className={styles.preview}>
				<div style={activeFilterStyle} className={styles.filterLayer}/>
				<div className={styles.toggle}>
					{toggleItems}
				</div>
			</div>
		);
	}
}

export default Preview;
