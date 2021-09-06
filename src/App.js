import Navbar from './Navbar';
import Home from './Home'
function App() {
  const title = 'Hi Nice to meet you';
  const likes = 50;
  const link ='http://www.google.com';

  return (
    <div className="App">
      <div className="content">
        <Navbar/>
        <h1>{title}</h1>
        {/* //just some examples */}
        {/* <p>liked {likes} times</p>
        <p>{"hello HELLO bonjour"}</p>
        <p>{1,2,3,4,5}</p>
        <p>{Math.random()*100}</p>
        <a href={link}>GOOGLE :D </a> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
