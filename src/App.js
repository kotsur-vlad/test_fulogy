import React from 'react';

import styles from './App.module.scss'
import Header from './components/header/Header';
import Info from './components/info/Info';
import Options from './components/options/Options';
import Preview from './components/preview/Preview';
import Footer from './components/footer/Footer';

class App extends React.Component {
	render () {
		return (
			<div className={styles.wrapper}>
				<Header/>

				<div className={styles.content}>
					<Preview/>

					<div>
						<Info/>
						<Options/>
					</div>
				</div>

				<Footer/>
			</div>
		);
	}
}

export default App;
