import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: FC = () => {
	const navigate = useNavigate();
	return (
		<header className={styles.header}>
			<div className={styles.link} onClick={() => navigate(0)}>
				<div className={styles.icon} />
				<p className={styles.text}>сообщества</p>
			</div>
		</header>
	);
};

export default Header;
