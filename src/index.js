/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(a = []) {
	// your implementation
	let count = 0;
	for (i = 0; i < a.length; i++) {
		if ((i === a[ a[ a[i] - 1] - 1] - 1) && (a[i] !== (i + 1)) ) { 
			console.log(a[a[ a[i] - 1] - 1] - 1, i);
			a[i]= 10000;
			count++;
		}
  }
return count;
};
