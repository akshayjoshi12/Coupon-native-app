import Brand from '../models/Brand';
import Coupon from '../models/Coupon';

export const BRANDS = [
    new Brand('b1', 'Pepsi', '#156FAA', '80', 
    'Pepsi is a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893.', 
    'https://i.pinimg.com/originals/5a/a0/34/5aa034e51ca691d29ace8c2556140edc.jpg'),
    new Brand('b2', 'RedBull', '#DB1A4B', '115',
    'RedBull is a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893.', 
    'https://i.pinimg.com/originals/5a/a0/34/5aa034e51ca691d29ace8c2556140edc.jpg'),
    new Brand('b3', 'Fanta', '#F76826', '50',
    'Fanta is a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893.', 
    'https://i.pinimg.com/originals/5a/a0/34/5aa034e51ca691d29ace8c2556140edc.jpg'),
    new Brand('b4', 'Mountain Dew', '#93C234', '55',
    'Mountain Dew is a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893.', 
    'https://i.pinimg.com/originals/5a/a0/34/5aa034e51ca691d29ace8c2556140edc.jpg'),
    new Brand('b5', 'Frooti', '#A7B012', '25', 
    'Frooti is a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893.', 
    'https://i.pinimg.com/originals/5a/a0/34/5aa034e51ca691d29ace8c2556140edc.jpg'),
];

export const COUPONS = [
    new Coupon('c1', 
    ['b2', 'b3'], 
    '1234', 
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    'You won ear phones.',
    'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'),
    new Coupon('c2', 
    ['b4'], 
    '2222', 
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    'You won mobile.',
    'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'),
    new Coupon('c2', 
    ['b4', 'b5'], 
    '3333', 
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    'You won Rs.500 cashback.',
    'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'),
]

