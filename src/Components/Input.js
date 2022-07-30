import {userState} from 'react'

function input(props){
    const [username, setUsername] = ('')
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
   
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.jason()
        console.log(data)
    }
return(
    <div>
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="userName" />
        <button type="submit">submit</button>
        </form>
    </div>

)

}
export default input