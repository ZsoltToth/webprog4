var students = [
    {name : 'Alice', score : 23},
    {name : 'Bob', score : 57},
    {name : 'Charlie', score : 82}

];

console.log(
    students.reduce((total,current)=>{
        return total + current.score
    },0)
);

console.log(
    students.reduce((total,current)=>{
        return total >= current.score ? total : current.score;
    },0)
);
