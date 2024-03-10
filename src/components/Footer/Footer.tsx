import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<p className={styles.text}>Created by Aleksey Vakht &copy;2024</p>
		</div>
	);
};

export default Footer;
