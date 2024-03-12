import { FC } from 'react';
import cn from 'classnames';
import queryString from 'query-string';
import { IFilter } from '../../../utils/interfaces.ts';
import {
	clearFilters,
	selectedFilters,
	isLoading,
	setQueryParams,
} from '../../../stores/groupStore.ts';
import styles from './ControlButton.module.scss';

const ControlButton: FC<IFilter> = ({ text, action }) => {
	const reset = clearFilters();
	const selected = selectedFilters();
	const loading = isLoading();
	const setParams = setQueryParams();
	const handleClick = () => {
		setParams(queryString.stringify(selected));
	};
	const buttonClassName = cn(styles.button, { [styles.button_disabled]: loading });
	return (
		<button
			type="button"
			className={buttonClassName}
			disabled={loading}
			onClick={() => (action === 'reset' ? reset() : handleClick())}
		>
			{text}
		</button>
	);
};

export default ControlButton;
