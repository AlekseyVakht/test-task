import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useGroupStore, { setGroups } from '../../stores/groupStore.ts';
import { GetGroupsResponse } from '../../utils/interfaces.ts';

// API
import fetchGroups from '../../utils/Api.ts';

// Components
import Header from '../Header/Header.tsx';
import Main from '../Main/Main.tsx';
import Footer from '../Footer/Footer.tsx';
import Filters from '../Filters/Filters.tsx';
import Preloader from '../Preloader/Preloader.tsx';
import { Error } from '../Error/Error.tsx';
import styles from './App.module.scss';

const App = () => {
	const putGroups = setGroups();
	const query = useGroupStore(state => state.queryParams);

	const { data, isLoading, isSuccess, isError } = useQuery<GetGroupsResponse>({
		queryKey: ['data', query],
		queryFn: () => fetchGroups(query),
		refetchOnWindowFocus: false,
		gcTime: 0,
	});

	useEffect(() => {
		if (isSuccess && data.result === 1) {
			putGroups(data.data || []);
		}
	}, [data, putGroups, isSuccess]);

	return (
		<div className={styles.root}>
			<Header />
			<Filters />
			{isLoading ? <Preloader /> : !isError ? <Main /> : <Error />}
			<Footer />
		</div>
	);
};

export default App;
