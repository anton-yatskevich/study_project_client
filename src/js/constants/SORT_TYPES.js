const SORT_TYPES = [
	{
		name: 'A-Z',
		sortField: 'name',
		number: false,
	},
	{
		name: 'Z-A',
		sortField: '-name',
		number: false,
	},
	{
		name: 'BalanceFee amount',
		sortField: 'repayments.balanceFee.amount',
		number: true,
	},
	{
		name: 'BalanceFee month',
		sortField: 'repayments.balanceFee.month',
		number: true,
	},
	{
		name: 'Cost To You amount',
		sortField: 'repayments.costToYou.amount',
		number: true,
	},
	{
		name: 'Cost To You month',
		sortField: 'repayments.costToYou.month',
		number: true,
	},
];

export default SORT_TYPES;
