import { FC } from 'react';
import styles from './Main.module.scss';
import GroupList from '../GroupList/GroupList.tsx';

const Main: FC = () => {
	return (
		<main className={styles.main}>
			<GroupList />
		</main>
	);
};

export default Main;
