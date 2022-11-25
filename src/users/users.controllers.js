const usersDB = []
let id= 1

// {
//     id: 1, 
//     author: 'Sahid',
//     quote: 'Dudas',
//     year: 2022
// }


const findAllUsers = () => {
    return usersDB
}
const findUserById = (id) =>{
    const filteredUsers = usersDB.find(user => user.id == id)
    return filteredUsers
}

const createNewUser = (obj) => {
    const newUser = {
        // id: id = id + 1, // este valor lo administramos nosotros 
        // author: obj.author || 'Anonymous',
        // quote: obj.quote,
        //  year: obj.year || 'year unknown'

         id: id = id + 1,
         first_name: obj.first_name,
         last_name: obj.last_name,
         email: obj.email,
         password: obj.password,
         birthday: obj.birthday
    }
    usersDB.push(newUser)
    return newUser
}

const findRandomUser = () =>{
    const randomIndex = Math.floor(Math.random()* usersDB.length)
    return usersDB[randomIndex]
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
    findRandomUser
}