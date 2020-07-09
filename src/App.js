import React from 'react';

import styles from './App.module.scss';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Options from './components/options/Options';
import Preview from './components/preview/Preview';
import Footer from './components/footer/Footer';
import var1 from './assets/images/kitchen1/var1.jpg'
import var2 from './assets/images/kitchen1/var2.jpg'
import var3 from './assets/images/kitchen1/var3.jpg'

class App extends React.Component {

	state = {
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
						sectionColor: ['day'],
					},
					standardPlus: {
						powerCoeff: 59,
						lightPowerCoeff: 800,
						costCoeff: 2000,
						bodyColor: ['gray'],
						sectionColor: ['day'],
					},
					pro: {
						powerCoeff: 59,
						lightPowerCoeff: 800,
						costCoeff: 2000,
						bodyColor: ['gray'],
						sectionColor: ['warm', 'day', 'cold'],
					},
					proPlus: {
						powerCoeff: 59,
						lightPowerCoeff: 800,
						costCoeff: 2000,
						bodyColor: ['gray', 'black', 'white', 'gold'],
						sectionColor: ['warm', 'day'],
					},
				},
				preview: [var1, var2, var3],
				sizes: {firstMM: 250, secondMM: 250, cableToSecondMM: 100},
				warranty: 3,
			},

		],

		tempCalculation: {
			kitchen: {},
			sizes: {},
			sensor: null,
			powerCable: null,
			powerSupply: null,

			bodyColor: '',
			sectionColor: '',
			mounting: null,

			class: '',
			power: null,
			lightPower: null,
			amount: null,

			lampCount: 1
		},
	};

	render () {
		return (
			<div className={styles.wrapper}>
				<Header lampCount={this.state.tempCalculation.lampCount}/>
				<div className={styles.content}>
					<Preview images={this.state.kitchens[0].preview}/>
					<div className={styles.rightWrapper}>
						<Info/>
						<Options fullDescription={this.state.kitchens[0].fullDescription}/>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;
