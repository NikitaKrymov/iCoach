// import { devKeys } from './devKeys';
// import { prodKeys } from './prodKeys';

// const keys = () => {
//     // if (process.env.MODE_ENV !== "production") {
//     //     console.log('Returning dev keys');
//     //     return devKeys;
//     // } else {
//     //     console.log('Returning prod keys');
//     //     return prodKeys;
//     // }
//     return devKeys;
// }

// export default keys;

if (process.env.NODE_ENV === 'production') {
    console.log('Returning prod keys');
    module.exports = require('./prodKeys');
} else {
    console.log("Returning dev keys");
    module.exports = require('./devKeys');
}