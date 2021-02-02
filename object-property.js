// const student = [
// { id: 21, name: 'omar' },
// { id: 22, name: 'Aishowriya' },
// { id: 23, name: 'Ema watson' },
// ];
// 
// const result = student.map(s => s.name);
// console.log(result);

const student = [
    { id: 21, name: 'omar' },
    { id: 22, name: 'Aishowriya' },
    { id: 23, name: 'Ema Watson' },
];

const result = student.find(s => s.id > 20);
console.log(result);