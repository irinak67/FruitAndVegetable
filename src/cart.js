const PERCENT_FOR_CLUB = require('./consts');
// import PERCENT_FOR_CLUB from './consts';

export const calculate=(sum)=>{

    let a=sum * PERCENT_FOR_CLUB;
    a = parseInt(a);
    return a;
}
// export default calculate;
module.exports = calculate;