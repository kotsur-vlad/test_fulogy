import React from 'react';

import styles from './Footer.module.scss';
import FooterItem from './FooterItem';

class Footer extends React.Component {

	render () {

		const footerItems = this.props.footerItems.map(fi => <FooterItem key={fi.id} id={fi.id} title={fi.title}
																		 chooseActive={this.props.chooseActiveFooterItem}
																		 isCompleted={fi.isCompleted}/>);

		return (
			<div className={styles.footer}>
				{footerItems}
			</div>
		);
	}
}

export default Footer;
