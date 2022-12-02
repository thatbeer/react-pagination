import logo from './logo.svg';
import './App.css';
import Infos from './components/info';
import Pagination from './components/pagination';
import PostPage from './components/PostPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Infos/> */}
        {/* <Pagination/> */}
        <PostPage/>
      </header>
    </div>
  );
}

export default App;
