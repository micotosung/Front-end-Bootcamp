let peopleSalary = [
    {
        id: "1001", fristname: "Luke", lastname: "Skywalker", company: "Walt Disney", salary: "40000"
    },
    {
        id: "1002", fristname: "Tony", lastname: "Stark", company: "Marvel", salary: "1000000"
    },
    {
        id: "1003", fristname: "Somchai", lastname: "Jaidee ", company: "Love2work", salary: "20000"
    },
    {
        id: "1004", fristname: "Monkey D", lastname: "Luffee", company: "One Piece", salary: "9000000"
    }
]

console.log("peopleSalary", peopleSalary)

let new_peopleSalary = [];
for (const item in peopleSalary) {
    let new_json = {
        id: peopleSalary[item].id, fristname: peopleSalary[item].fristname, lastname: peopleSalary[item].lastname, salary: peopleSalary[item].salary
    }
    new_peopleSalary.push(new_json)
}
console.log("new_peopleSalary", new_peopleSalary)