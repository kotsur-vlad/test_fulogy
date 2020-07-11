import React from 'react';

import styles from './App.module.scss';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Options from './components/options/Options';
import Preview from './components/preview/Preview';
import Footer from './components/footer/Footer';
import var1 from './assets/images/kitchen1/var1.jpg';
import var2 from './assets/images/kitchen1/var2.jpg';
import var3 from './assets/images/kitchen1/var3.jpg';
import sectionImage from './assets/images/item13.jpg';

class App extends React.Component {

	state = {
		//Виды кухонь
		kitchens: [
			{
				title: 'Угловая секция (вар. 2)',
				shortDescription: 'В комплекте два светильника с креплениями (4 шт.) и блоком питания. По желанию комплектуется умным бесконтактным сенсором.',
				fullDescription: ['Lorem ipsum dolor sit amet consectetur adipisicing elit Assumenda dolor eaque estred exercitationem impedit iure minus mollitia nostrum possimus quis reiciendis rem reprehenderit similique suscipit vero Amet iure nulla repellat',
					'Vorem ipsum dolor sit amet consectetur adipisicing elit Assumenda dolor eaque estred exercitationem impedit iure minus mollitia nostrum possimus quis reiciendis rem reprehenderit similique suscipit vero Amet iure nulla repellat',
					'Lorem ipsum dolor sit amet consectetur adipisicing elit Assumenda dolor eaque estred exercitationem impedit iure minus mollitia nostrum possimus quis reiciendis rem reprehenderit similique suscipit vero Amet iure nulla repellat',
				],
				lampClass: {
					standard: {
						powerCoeff: 59,
						lightPowerCoeff: 800,
						costCoeff: 2000,
						bodyColor: ['gray'],
						sectionColor: ['Дневной'],
					},
					standardPlus: {
						powerCoeff: 59,
						lightPowerCoeff: 800,
						costCoeff: 2000,
						bodyColor: ['gray'],
						sectionColor: ['Дневной'],
					},
					pro: {
						powerCoeff: 59,
						lightPowerCoeff: 800,
						costCoeff: 2000,
						bodyColor: ['gray'],
						sectionColor: ['Тёплый', 'Дневной', 'cold'],
					},
					proPlus: {
						powerCoeff: 59,
						lightPowerCoeff: 800,
						costCoeff: 2000,
						bodyColor: ['gray', 'black', 'white', 'gold'],
						sectionColor: ['Тёплый', 'Дневной'],
					},
				},
				preview: [var1, var2, var3],
				sizes: {firstMM: 250, secondMM: 250, cableToSecondMM: 100},
				warranty: 3,
			},

		],
		//Врменнный расчет, для сохранения данных
		tempCalculation: {
			kitchen: {
				title: 'Угловая секция (вар. 2)',
				shortDescription: 'В комплекте два светильника с креплениями (4 шт.) и блоком питания. По желанию комплектуется умным бесконтактным сенсором.',
				fullDescription: ['Lorem ipsum dolor sit amet consectetur adipisicing elit Assumenda dolor eaque estred exercitationem impedit iure minus mollitia nostrum possimus quis reiciendis rem reprehenderit similique suscipit vero Amet iure nulla repellat',
					'Vorem ipsum dolor sit amet consectetur adipisicing elit Assumenda dolor eaque estred exercitationem impedit iure minus mollitia nostrum possimus quis reiciendis rem reprehenderit similique suscipit vero Amet iure nulla repellat',
					'Lorem ipsum dolor sit amet consectetur adipisicing elit Assumenda dolor eaque estred exercitationem impedit iure minus mollitia nostrum possimus quis reiciendis rem reprehenderit similique suscipit vero Amet iure nulla repellat',
				],
				lampClass: {
					standard: {
						powerCoeff: 59,
						lightPowerCoeff: 800,
						costCoeff: 2000,
						bodyColor: ['gray'],
						sectionColor: ['Дневной'],
					},
					standardPlus: {
						powerCoeff: 59,
						lightPowerCoeff: 800,
						costCoeff: 2000,
						bodyColor: ['gray'],
						sectionColor: ['Дневной'],
					},
					pro: {
						powerCoeff: 59,
						lightPowerCoeff: 800,
						costCoeff: 2000,
						bodyColor: ['gray'],
						sectionColor: ['Тёплый', 'Дневной', 'Холодный'],
					},
					proPlus: {
						powerCoeff: 59,
						lightPowerCoeff: 800,
						costCoeff: 2000,
						bodyColor: ['gray', 'black', 'white', 'gold'],
						sectionColor: ['Тёплый', 'Дневной'],
					},
				},
				preview: [var1, var2, var3],
				sizes: {firstMM: 250, secondMM: 250, cableToSecondMM: 100},
				warranty: 3,
			},
			sizes: {properties: [{isChecked: null, title: null}]},
			sensor: null,
			powerCable: null,
			powerSupply: null,

			bodyColor: '',
			sectionColor: 'Дневной',
			mounting: null,

			class: '',
			power: null,
			lightPower: null,
			amount: null,

			lampCount: 1
		},
		//Массив опций для футера, которые динамически отображаются в компоненте 'Options'
		//Для каждой опции можно задать свои данные
		footerItems: [
			{id: 1, title: 'Вариант кухни', isCompleted: true, options: {properties: []}},
			{id: 2, title: 'Размеры', isCompleted: true, options: {properties: []}},
			{id: 3, title: 'Сенсор', isCompleted: true, options: {properties: []}},
			{id: 4, title: 'Питающий кабель', isCompleted: true, options: {properties: []}},
			{id: 5, title: 'Блок питания', isCompleted: true, options: {properties: []}},
			{
				id: 6, title: 'Цвет свечения', isCompleted: 'active', options: {
					properties: [
						{id: 1, title: 'Тёплый', isChecked: false},
						{id: 2, title: 'Дневной', isChecked: true},
						{id: 3, title: 'Холодный', isChecked: false},
					],
					style: {
						width: '9vw',
						height: '11vh',
						margin: '0 1vw',
						backgroundImage: `url(${sectionImage})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover'
					}
				}
			},
			{id: 7, title: 'Монтаж', isCompleted: false, options: {properties: []}},
			{id: 8, title: 'Корзина', isCompleted: false, options: {properties: []}},
		],
	};
	//Функция при нажатии на элемент опций
	chooseActiveOptionItem = (optionItemId) => {
		let newFooterItems = this.state.footerItems.map(fi => {
			if (fi.isCompleted === 'active') {
				return {
					...fi,
					options: {
						...fi.options,
						properties: fi.options.properties.map(pr => {
							if (pr.id === optionItemId) {
								return {
									...pr, isChecked: true
								};
							} else {
								return {
									...pr, isChecked: false
								};
							}
						})
					}
				};
			} else {
				return fi;
			}
		});
		this.setState({
			footerItems: newFooterItems
		}, () => {
			const newFilterColor = this.state.footerItems.find(fi => fi.title === 'Цвет сечения').options.properties.find(pr => pr.isChecked).title;
			this.setState({
				tempCalculation: {
					...this.state.tempCalculation,
					sectionColor: newFilterColor
				}
			});
		});
	};
	//Функция при нажатии на элемент футера (переключает опции)
	chooseActiveFooterItem = (footerItemId) => {
		let newFooterItems = this.state.footerItems.map(fi => {
			if (fi.isCompleted === 'active') {
				return {
					...fi, isCompleted: true
				};
			} else if (fi.id === footerItemId) {
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
		//Константа, в ней объект выбранной опции, которая отображается в 'Options'
		const activeOption = this.state.footerItems.find(fi => fi.isCompleted === 'active');

		return (
			<div className={styles.wrapper}>
				<Header lampCount={this.state.tempCalculation.lampCount}/>
				<div className={styles.content}>
					<Preview images={this.state.tempCalculation.kitchen.preview}
							 activeSectionColor={this.state.tempCalculation.sectionColor}/>
					<div className={styles.rightWrapper}>
						<Info/>
						<Options activeOption={activeOption} chooseActiveOptionItem={this.chooseActiveOptionItem}
								 fullKitchenDescription={this.state.tempCalculation.kitchen.fullDescription}/>
					</div>
				</div>
				<Footer footerItems={this.state.footerItems} chooseActiveFooterItem={this.chooseActiveFooterItem}/>
			</div>
		);
	}
}

export default App;
