import './App.css';
import Footer from './Component/Footer'
import FirstPage from './Component/FirstPage';

function Aza(x, y){
  if (x === 6980597546 && y === 'fidelity'){
      return 'Help Me'
  } 
  else {
      return 'DM'
  }
}

const ben = Aza(6980597546, 'fidelity')
console.log(ben)

function App() {
  return(
    <div className='container'>
      <FirstPage/>
      <Footer/>
    </div>
  )
}

export default App;