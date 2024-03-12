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
						<GroupCard
							name={card.name}
							id={card.id}
							closed={card.closed}
							avatar_color={card.avatar_color}
							members_count={card.members_count}
							friends={card.friends}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default GroupList;
