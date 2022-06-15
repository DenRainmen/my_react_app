import logo from './logo.svg';
import './App.css';

//Основная родительская компонента App
const App = () =>
  <div>

    <Header />
    <Technologies />


  </div>

// ... компонента Technologies
const Technologies = () => {
  return (
    <div className="Technologies">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>REACT</li>
      </ul>
    </div>)
}

// ... компонента Header 
const Header = () => {
  return(
  <div className="Header">
    <a href='#'>Home</a>
    <a href='#'>News feed</a>
    <a href='#'>Messages</a>
  </div>
  );
}
export default App;
