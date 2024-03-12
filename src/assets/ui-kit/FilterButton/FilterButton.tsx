import { FC } from 'react';
import cn from 'classnames';
import { IFilter, Filter } from '../../../utils/interfaces.ts';
import { selectedFilters, setFilters } from '../../../stores/groupStore.ts';

import styles from './FilterButton.module.scss';

const FilterButton: FC<IFilter> = ({ text, value, group }) => {
	const selected = selectedFilters();
	const pushFilter = setFilters();
	const isActive = selected[group as keyof Filter] === value;
	const handleClick = () => {
		pushFilter(value!, group!);
	};

	const buttonClassName = cn(styles.button, { [styles.active]: isActive });
	return (
		<button type="button" className={buttonClassName} onClick={handleClick}>
			{text}
		</button>
	);
};

export default FilterButton;
