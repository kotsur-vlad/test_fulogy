import React from 'react';

import styles from './App.module.scss'
import Header from './components/header/Header';
import Info from './components/info/Info';
import Options from './components/options/Options';

class App extends React.Component {
	render () {
		return (
			<div className={styles.wrapper}>
				<Header/>

				<div className={styles.content}>
					<div className={styles.preview}>previewImage</div>
					<div>
						<Info/>
						<Options/>
					</div>

				</div>

				<div className={styles.footer}>Footer</div>
			</div>
		);
	}
}

export default App;
