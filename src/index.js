
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    return matrix.flatMap((a, b) => (b % 2) ? a.reverse() : a); 
   }