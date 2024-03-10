import { FC } from 'react';
import queryString from 'query-string';
import cn from 'classnames';
import FILTERS from '../../utils/filters.ts';
import styles from './Filters.module.scss';

import useGroupStore, {
	setFilters,
	clearFilters,
	setQueryParams,
} from '../../stores/groupStore.ts';

const ControlButton: FC = ({ text, type }) => {
	const reset = clearFilters();
	const selected = useGroupStore(state => state.selectedFilters);
	const setParams = setQueryParams();
	const handleClick = () => {
		setParams(queryString.stringify(selected));
	};

	return (
		<button
			type={type}
			className={styles.button}
			onClick={() => (type === 'button' ? reset() : handleClick())}
		>
			{text}
		</button>
	);
};

const FilterButton: FC = ({ filter, filterGroup, value }) => {
	const selected = useGroupStore(state => state.selectedFilters);
	const pushFilter = setFilters();
	const isActive = selected[filterGroup].some(i => i === value);
	const buttonClassName = cn(styles.button, { [styles.active]: isActive });
	const handleClick = () => {
		pushFilter(value, filterGroup);
	};

	return (
		<button type="button" className={buttonClassName} onClick={handleClick}>
			{filter}
		</button>
	);
};

const FilterButtons: FC = ({ filters, filtersLabel }) => {
	const { filterGroup, filterOptions } = filters;
	return (
		<div className={styles.aligner}>
			<p className={styles.filter_text}>{filtersLabel}</p>
			{filterOptions.map((filter, index) => (
				<FilterButton
					key={index}
					filter={filter.text}
					value={filter.value}
					filterGroup={filterGroup}
				/>
			))}
		</div>
	);
};

const Filters: FC = () => {
	return (
		<section className={styles.filters}>
			<div className={styles.container}>
				<p className={styles.text}>Фильтры</p>
				<FilterButtons filters={FILTERS.privacyFilters} filtersLabel="По приватности: " />
				<FilterButtons filters={FILTERS.friendsFilters} filtersLabel="По наличию друзей: " />
				<FilterButtons filters={FILTERS.colorsFilters} filtersLabel="По цвету аватарки: " />
				<div className={styles.control_btns}>
					<ControlButton text="сбросить все" type="button" />
					<ControlButton text="применить" type="submit" />
				</div>
			</div>
		</section>
	);
};

export default Filters;
