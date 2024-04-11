function even(number) {
	return  number %  2===0;
}
console.log(even(6));
console.log(even(13));

function mart(a ,b){
    return a * b;
}
console.log(mart(7,5)
)
console.log(mart(2,9)
)
function square(gverdze) {
	return mart(gverdze,gverdze,)
}
console.log(square(7));

function numberRandome() {
	return Math.random() * 101;
}
console.log(numberRandome)

// ver mivxvdi amas

console.log(characters)

// let name = characters.filter(function (e) {
//     return e.alternate_names.length === 0;
//   });
//   console.log(name);
const students = characters.filter(
	(el) => el.alternate_names.length === 0
);
console.log(students)