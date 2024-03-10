import { FC } from 'react';
import styles from './Main.module.scss';
import GroupList from '../GroupList/GroupList.tsx';
import Filters from '../Filters/Filters.tsx';

const Main: FC = () => {
	return (
		<main className={styles.main}>
			<Filters />
			<GroupList />
		</main>
	);
};

export default Main;
