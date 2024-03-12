import { FC } from 'react';
import cn from 'classnames';
import { selectedFilters, setColorFilter } from '../../../stores/groupStore.ts';
import { IFilter } from '../../../utils/interfaces.ts';

import styles from './FilterColorButton.module.scss';

const FilterColorButton: FC<IFilter> = ({ text, value }) => {
	const selected = selectedFilters();
	const setColors = setColorFilter();
	const isActive = selected.avatar_color?.some(i => i === value);
	const handleClick = () => {
		setColors(value!);
	};
	const buttonClassName = cn(styles.button, { [styles.active]: isActive });
	return (
		<button type="button" className={buttonClassName} onClick={handleClick}>
			{text}
		</button>
	);
};

export default FilterColorButton;
