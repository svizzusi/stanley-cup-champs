document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const teamName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${teamName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.year
    }catch(error){
        console.log(error)
    }
}