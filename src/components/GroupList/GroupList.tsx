import { FC } from 'react';
import styles from './GroupList.module.scss';
import GroupCard from '../GroupCard/GroupCard.tsx';
import { useGroups } from '../../stores/groupStore.ts';

const GroupList: FC = () => {
	const groups = useGroups();
	return (
		<section className={styles.container}>
			<ul className={styles.list}>
				{groups.map(card => (
					<li key={card.id} className={styles.list_item}>
						<GroupCard group={card} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default GroupList;
