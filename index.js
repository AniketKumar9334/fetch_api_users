const URL = 'https://jsonplaceholder.typicode.com/users'
const userContainer = document.querySelector('.users')
const fetchData = document.getElementById('fetch')


const displayUsers = (users) => {
    users.map(item =>{

        userContainer.innerHTML += `
        <div class="user" key=${item.id}>
            <div>
                <div>
                    <p>Name:</p>
                    <p>Email:</p>
                    <p>username:</p>
                </div>
                <div >
                    <p>${item.name}</p>
                    <p>${item.email}</p>
                    <p>${item.username}</p>
                </div>
            </div>        
        </div>
        `
    
    })
    
}
fetchData.addEventListener('click', ()=>{
    fetchUsers()
})

const fetchUsers = async() =>{
    try {
        const response = await fetch(URL)
        const data = await response.json()
        displayUsers(data)
    } catch (error) {
        console.log(error)
    }
}




