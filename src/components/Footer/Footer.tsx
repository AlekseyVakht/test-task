import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.text}>Created by Aleksey Vakht &copy;2024</p>
		</footer>
	);
};

export default Footer;
