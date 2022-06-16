import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import LeftSideBar from "./Components/LeftSideBar";
import Main from "./Components/Main";


//Основная родительская компонента App
const App = () =>{
  return(
  <div className='app-wrapper'>
    <Header/>
    <LeftSideBar/>
    <Main/>
  </div>
)
};
  


//делаем компоненту App экспортируемой (открытой для применения в других местах приложения)
export default App;
