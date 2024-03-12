import { FC } from 'react';
import styles from './Error.module.scss';

const NotFound: FC = () => {
	return (
		<section className={styles.container}>
			<p className={styles.text}>Ничего не найдено:&#40;</p>
		</section>
	);
};

const Error: FC = () => {
	return (
		<section className={styles.container}>
			<p className={styles.text}>Что-то пошло не так:&#40;</p>
		</section>
	);
};

export { Error, NotFound };
