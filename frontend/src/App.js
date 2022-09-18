import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="flex bg-gray-700 min-h-screen justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {/* <h1 className="text-6xl">Bhai Itna he hua hai 😥</h1> */}
        <Navbar />
      </div>
    </>
  );
}

export default App;
