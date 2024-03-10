import { FC } from 'react';
import styles from './Error.module.scss';

const Error: FC = () => {
	return (
		<section className={styles.container}>
			<p className={styles.text}>Что-то пошло не так:&#40;</p>
		</section>
	);
};

export default Error;
