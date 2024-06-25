//Return only the details of those who scored more than 80

let students = [
    { name: "Lisa", age: 26, mark: 100},
    { name: "Jiso", age: 30, mark: 70},
    { name: "Jennie", age: 27, mark: 90},
    { name: "Rose", age: 28, mark: 60},
];

let highMarks = students.filter((highMark) => highMark.mark > 80);
console.log(highMarks);