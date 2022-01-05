//1
let weight

//2
console.log(typeof weight)

//3
let name = "Luciana"
let age = 31
let stars = 60.2
let isSubscribed = true

//4
let student = {}
//objeto

//4.1
student = {
    name: "Luciana",
    age: 31,
    weight: 60.2,
    isSubscribed: true
}

//4.2
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

//5
let students = []

//6
students = [student]

//7
console.log(students[0])

//8
const joao = {
    name: "Joao",
    age: 25,
    weight: 50,
    isSubscribed: false
}

students = [student, joao]
//ou
students[1] = joao
console.log(students)

//9
console.log(a)
var a = 1
//undefined


