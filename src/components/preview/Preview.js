import React from 'react';

import styles from './Preview.module.scss';
import ToggleItem from './ToggleItem';

class Preview extends React.Component {
	constructor (props) {
		super(props);
		const initialImages = this.props.images.map((img, i) => {
			return {id: i, image: img, isActive: false};
		});
		initialImages[0].isActive = true;

		this.state = {
			images: initialImages
		};
	}

	state = {
		images: [],
	};

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
		const activeImage = this.state.images.find(img => img.isActive).image;
		const activeImageStyle = {
			backgroundImage: `url(${activeImage})`
		};

		return (
			<div style={activeImageStyle} className={styles.preview}>

				<div className={styles.filterLayer}>

				</div>

				<div className={styles.toggle}>
					{toggleItems}
				</div>
			</div>
		);
	}
}

export default Preview;
