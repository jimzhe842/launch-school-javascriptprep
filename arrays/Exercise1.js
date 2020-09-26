let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

// array1 length: 4
// array2 length: 5
// array3 length: 1 // 0 the first one is empty and assigning a key value pair does not count towards the length
// array4 length: 3
// array5 length: 101