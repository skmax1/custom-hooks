import './App.css'
import {useIsOnline} from './hooks/IsOnline'
import { useMousePointer } from './hooks/MousePointer';


function App() {

const isOnline = useIsOnline();
const mousePointer = useMousePointer();

  return (
    <>
     {isOnline?"Yay you're online":"Check your connection"}
     <br/>
     Your mouse position is {mousePointer.x} {mousePointer.y}
    </>
  )
}
export default App
