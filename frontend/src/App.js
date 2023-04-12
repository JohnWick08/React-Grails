import './App.css';
import PostForm from "./components/PostForm";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.exponet.ca/exponet_logo.png"></img>
        <h3>Add an employee's information into the database</h3>
        <PostForm/>
      </header>
    </div>
  );
}

export default App;
