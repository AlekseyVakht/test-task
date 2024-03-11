import { FC } from 'react';
import queryString from 'query-string';
import cn from 'classnames';
import FILTERS from '../../utils/filters.ts';
import styles from './Filters.module.scss';
import { IFilter, Filter } from '../../utils/interfaces.ts';

import useGroupStore, {
	setFilters,
	clearFilters,
	setQueryParams,
	selectedFilters,
	setColorFilter,
} from '../../stores/groupStore.ts';

const ControlButton: FC<IFilter> = ({ text, action }) => {
	const reset = clearFilters();
	const selected = useGroupStore(state => state.selectedFilters);
	const setParams = setQueryParams();
	const handleClick = () => {
		setParams(queryString.stringify(selected));
	};
	return (
		<button
			type="button"
			className={styles.button}
			onClick={() => (action === 'reset' ? reset() : handleClick())}
		>
			{text}
		</button>
	);
};

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

const FiltersToRender: FC<IFilter> = ({ group, filter }) => {
	return (
		<div>
			{group === 'avatar_color' ? (
				<FilterColorButton text={filter?.text} value={filter?.value} />
			) : (
				<FilterButton text={filter?.text} value={filter?.value} group={group} />
			)}
		</div>
	);
};

const FilterButtons: FC<IFilter> = ({ filters, group, filtersLabel }) => {
	return (
		<div className={styles.aligner}>
			<p className={styles.filter_text}>{filtersLabel}</p>
			{filters?.map((filter, index) => (
				<FiltersToRender key={index} group={group} filter={filter} />
			))}
		</div>
	);
};

const Filters: FC = () => {
	return (
		<section className={styles.filters}>
			<div className={styles.container}>
				<p className={styles.text}>Фильтры</p>
				<FilterButtons filters={FILTERS.closed} group="closed" filtersLabel="По приватности: " />
				<FilterButtons
					filters={FILTERS.friends}
					group="friends"
					filtersLabel="По наличию друзей: "
				/>
				{FILTERS.avatar_color && (
					<FilterButtons
						filters={FILTERS.avatar_color}
						group="avatar_color"
						filtersLabel="По цвету аватарки: "
					/>
				)}
				<div className={styles.control_btns}>
					<ControlButton text="сбросить все" action="reset" />
					<ControlButton text="применить" action="aceept" />
				</div>
			</div>
		</section>
	);
};

export default Filters;
