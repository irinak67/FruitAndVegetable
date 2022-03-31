// const calculate = require('.cart'); 
// const PERCENT_FOR_CLUB = require('./consts')
import calculate from './cart';
import PERCENT_FOR_CLUB from '/consts';

it('this is test1 ',()=>{
    console.log('OK');
    let a=10;
    expect(a).toBe(11);
})

it('this is a  cart test',()=>{
    console.log(calculate(100));

    expect(calculate(100)).toBe(90);
})

it('this is a  cart test1',()=>{
    console.log(calculate(100));

    expect(calculate(100)).toBe(PERCENT_FOR_CLUB);
})