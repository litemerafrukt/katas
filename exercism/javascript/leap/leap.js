const Year = function(year) {
    return {
        isLeap: () => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
    };
};

// class Year {
//     constructor(year) {
//         this.year = year;
//     }

//     isLeap() {
//         return (
//             this.year % 4   === 0 &&
//             this.year % 100 !== 0 ||
//             this.year % 400 === 0
//         );
//     }
// }

module.exports = Year
