import {useState} from 'react'
import Imput from './Components/Input'
import display from './Components/Display';


function App() {
  const [user, setUser] = useState(null)
  const display = user && <display user={user} />
  return (
    <div>
      <Imput setUser={setUser}/>
      <display />
    </div>
  );
}

export default App;
