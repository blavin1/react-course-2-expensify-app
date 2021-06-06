import moment from 'moment';

export default [{
    id: '0',
    description: 'Gum',
    amount: 195,
    note: '',
    createdAt: 0
}, {
    id: '1',
    description: 'Rent',
    amount: 109500,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '2',
    description: 'Credit Card',
    amount: 4500,
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf()
}];