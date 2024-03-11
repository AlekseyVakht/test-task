import { FC, useState } from 'react';
import cn from 'classnames';
import FriendsPopup from '../FriendsPopup/FriendsPopup.tsx';
import styles from './GroupCard.module.scss';
import { Group, User } from '../../utils/interfaces.ts';

type RenderFriendsMessageProps = {
	friends: User[];
};

const RenderFriendsMessage: FC<RenderFriendsMessageProps> = ({ friends }) => {
	const [opened, setIsOpen] = useState(false);
	const messageHandler = (num: number, txt: string[]) => {
		const cases = [2, 0, 1, 1, 1, 2];
		return txt[num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]];
	};
	return (
		<>
			<p className={styles.text}>
				Подписан{friends.length > 1 && 'о'}{' '}
				<span className={styles.span} onClick={() => setIsOpen(true)}>
					{friends.length}
				</span>{' '}
				дру
				{messageHandler(friends.length, ['г', 'га', 'зей'])}
			</p>
			<button type="button" className={styles.button} onClick={() => setIsOpen(true)}>
				Посмотреть
			</button>
			<FriendsPopup friends={friends} isOpened={opened} click={() => setIsOpen(false)} />
		</>
	);
};

const RenderNoFriends: FC = () => {
	return (
		<p className={cn(styles.text, styles.text_width)}>На сообщество не подписан никто из друзей</p>
	);
};

const GroupCard: FC<Group> = ({ name, members_count, closed, avatar_color, friends }) => {
	const avatarClassName = cn(styles.avatar, { [styles.no_avatar]: !avatar_color });
	return (
		<div className={styles.container}>
			<div className={avatarClassName} style={{ backgroundColor: avatar_color }} />
			<div className={styles.info}>
				<p className={styles.name}>{name}</p>
				<p className={styles.text}>Количество участников: {members_count}</p>
				<p className={styles.text}>{closed ? 'Закрытая группа' : 'Открытая группа'}</p>
			</div>
			<div className={styles.friends}>
				{friends ? <RenderFriendsMessage friends={friends} /> : <RenderNoFriends />}
			</div>
		</div>
	);
};

export default GroupCard;
