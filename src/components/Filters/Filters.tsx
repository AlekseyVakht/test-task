import { FC } from 'react';
import BASE_FILTERS from '../../utils/base_filters.ts';
import styles from './Filters.module.scss';
import { IFilter } from '../../utils/interfaces.ts';

import FilterButton from '../../assets/ui-kit/FilterButton/FilterButton.tsx';
import FilterColorButton from '../../assets/ui-kit/FilterColorButton/FilterColorButton.tsx';
import ControlButton from '../../assets/ui-kit/ControlButton/ControlButton.tsx';

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
				<FilterButtons
					filters={BASE_FILTERS.closed}
					group="closed"
					filtersLabel="По приватности: "
				/>
				<FilterButtons
					filters={BASE_FILTERS.friends}
					group="friends"
					filtersLabel="По наличию друзей: "
				/>
				{BASE_FILTERS.avatar_color && (
					<FilterButtons
						filters={BASE_FILTERS.avatar_color}
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
