import createCardTypeSelect from './CardTypeSelect/index';
import createSortTypeSelect from './SortTypeSelect/index';

export default (ngModule) => {
	createCardTypeSelect(ngModule);
	createSortTypeSelect(ngModule);
};
