let peopleSalary = [
    {
        id: "1001", fristname: "Luke", lastname: "Skywalker", company: "Walt Disney", salary: 40000
    },
    {
        id: "1002", fristname: "Tony", lastname: "Stark", company: "Marvel", salary: 1000000
    },
    {
        id: "1003", fristname: "Somchai", lastname: "Jaidee ", company: "Love2work", salary: 20000
    },
    {
        id: "1004", fristname: "Monkey D", lastname: "Luffee", company: "One Piece", salary: 9000000
    }
]

// console.log("peopleSalary", peopleSalary)

let new_peopleSalary = [];
for (const item in peopleSalary) {
    let increase_salary_1 = peopleSalary[item].salary + (peopleSalary[item].salary * 0.1);
    let increase_salary_2 = increase_salary_1 + (increase_salary_1 * 0.1);
    // console.log(peopleSalary[item].salary)
    // console.log(increase_salary_1)
    // console.log(increase_salary_2)
    let new_sarary = [peopleSalary[item].salary,increase_salary_1,increase_salary_2];
    console.log(new_sarary)
    let new_json = {
        id: peopleSalary[item].id, fristname: peopleSalary[item].fristname, lastname: peopleSalary[item].lastname, salary: new_sarary
    }
    new_peopleSalary.push(new_json)
}
console.log("new_peopleSalary", new_peopleSalary)