import { FC } from 'react';
import cn from 'classnames';
import styles from './FriendsPopup.module.scss';
import { User } from '../../utils/interfaces.ts';

interface Popup {
	friends: User[];
	isOpened: boolean;
	click: () => void;
}

const FriendsPopup: FC<Popup> = ({ isOpened, friends, click }) => {
	const popupClassName = cn(styles.popup_opened, { [styles.animated]: isOpened });

	return (
		<div className={popupClassName}>
			<div className={styles.container}>
				<button type="button" className={styles.button} onClick={click} />
				<ul className={styles.list}>
					{friends.map((friend, index) => (
						<li key={index} className={styles.list_item}>
							<p className={styles.text}>
								{friend.first_name} {friend.last_name}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default FriendsPopup;
