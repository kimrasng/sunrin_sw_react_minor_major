// function init(){
//     console.log(color)
//     var color = "black"
//     console.log(color)
//     console.log('색상 : ${color}')
// }

// init()



// const arr = [1,2,3,4]
// const obj = {

// 	a: 'apple',
// 	b: 'banana'
// }

// for (let index in arr){
// 	console.log(index)
// }

// for (let key in obj){
// 	console.log(key)
// }


// const arr = [1,2,3,4]
// const obj = {
//     a: 'apple',
//     b: 'banana'
// }

// for (let index of arr){
//     console.log(index)
// }

// for (let value of Object.values(obj)){
//     console.log(value)
// }




// async function getUserInfo(){
//     return {name : "홍길동"}

// }
// const user = getUserInfo()
// console.log(user)



const getUserId = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("1234"), 2000)
    })
}

async function getUserInfo(){
    const userId = await getUserId()
    console.log(userId)
}

getUserInfo()
