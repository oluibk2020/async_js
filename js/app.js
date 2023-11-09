/** 
function calc(num1,num2,callback) {
    //simulating API call
    setTimeout(() => {
        
        const result= num1 + num2
        callback(result)
        console.log(result);
    },10000)
}

//callback
function displayResult(x) {
    document.querySelector('#screen').textContent = x
}

console.log('block 1');
calc(50, 140, displayResult)
console.log('block 2');

//ANODA EXAMPLE

const allStudents = [
    {id: 1, firstName: 'Nelson'},
    {id: 2, firstName: 'Olugbenga'}
]

function addStudent(student, callback) {
    setTimeout(() => {
        const result = allStudents.push(student)
        callback(result)
    }, 5000);
}

//this is the callback funcction
function displayStudents() {
    setTimeout(() => {
        let output = ''
        allStudents.forEach(student => {
            output += `
            <li>${student.firstName}</li>
            `
        });
        document.querySelector('ul').innerHTML = output
    }, 3000);
}

addStudent({id:3, firstName: 'james'}, displayStudents)
*/

//using .then promise
/** 
const allStudents = [
    {id: 1, firstName: 'Nelson'},
    {id: 2, firstName: 'Olugbenga'}
]

function addStudent(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false
            const result = allStudents.push(student)
            if (success) {
                
                resolve(result)
            } else{
                reject(`Sorry, something went wrong`)
            }
        }, 5000);
    })
}

//this is the callback funcction
function displayStudents() {
    setTimeout(() => {
        let output = ''
        allStudents.forEach(student => {
            output += `
            <li>${student.firstName}</li>
            `
        });
        document.querySelector('ul').innerHTML = output
    }, 3000);
}

addStudent({id:3, firstName: 'james'})
.then(displayStudents)
.catch((err) => {
    document.querySelector('h2').innerHTML = err
    document.querySelector('h2').style.color = 'red'
})
*/

//classwork

//using callback
/** 
function addArray(arr,callback) {
    setTimeout(() => {
        const sum = arr.reduce((acc , curr) => 
            acc + curr , 0
        )
        callback(sum)
    }, 7000);
}


addArray([4,79,98,10],displaySum)
*/

//using .then promise

/** 
function displaySum(result) {
    setTimeout(() => { 
        document.querySelector('#result').textContent = result
    }, 4000);
}

//using .then promise
async function addArray(arr) {
    const res = new Promise((resolve, reject) => {
            setTimeout(() => {
                const sum = arr.reduce((acc , curr) => 
                    acc + curr , 0
                )
                resolve(sum)
            }, 7000);
        
    })

    const result = await res
    return result
}

addArray([2,3,4,89])
.then(displaySum)
*/

//working with text file
/** function getTXT() {
    fetch('/json/sample.txt')
    .then((res) => {
       return res.text()
    })
    .then((data) => {
        console.log(data);
    })
}

getTXT() */

//working with local JSON

/** function getLocalJSON() {
    fetch('/json/students.json')
    .then((res) => {
       return res.json()
    })
    .then((data) => {
        let li = ''
        for (const item of data) {
            li += `<li>${item.name}</li>`
        }
        document.querySelector('ul').innerHTML = li
    })
}

getLocalJSON() */


//working with API with .then
/** 
function getJSON() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
       return res.json()
    })
    .then((data) => {
        let li = ''
        for (const item of data) {
            li += `<li> <b>${item.id}</b> - ${item.title}</li>`
        }
        document.querySelector('ul').innerHTML = li
    })
}

getJSON()*/

// converting to async await
async function getJSONasync() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    
   const output = await response.json()

   let li = ''
        for (const item of output) {
            li += `<li> <b>${item.id}</b> - ${item.title}</li>`
        }
        document.querySelector('ul').innerHTML = li

}

getJSONasync()
