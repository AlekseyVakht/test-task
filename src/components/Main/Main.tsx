import { FC } from 'react';
import { data } from '../../stores/groupStore.ts';
import { NotFound } from '../Error/Error.tsx';
import styles from './Main.module.scss';
import GroupList from '../GroupList/GroupList.tsx';

const Main: FC = () => {
	const isData = data();
	return <main className={styles.main}>{isData.length !== 0 ? <GroupList /> : <NotFound />}</main>;
};

export default Main;
