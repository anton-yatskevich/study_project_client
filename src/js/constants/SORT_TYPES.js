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
		name: 'Balance fee amount',
		sortField: 'repayments.balanceFee.amount',
		number: true,
	},
	{
		name: 'Balance fee month',
		sortField: 'repayments.balanceFee.month',
		number: true,
	},
	{
		name: 'Cost To You amount',
		altName: 'Potential savings amount',
		sortField: '-repayments.costToYou.amount',
		number: true,
	},
	{
		name: 'Cost To You month',
		altName: 'Potential savings month',
		sortField: 'repayments.costToYou.month',
		number: true,
	},
	{
		name: 'Actual fee percent',
		sortField: 'repayments.actualFee.periodPercent',
		number: true,
	},
];

export default SORT_TYPES;
