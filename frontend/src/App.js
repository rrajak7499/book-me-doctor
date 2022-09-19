import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="flex bg-gray-700  justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {/* <div className="h-16 bg-red-400">
          Categories
        </div> */}
        <Navbar />
      </div>
      <div className="flex justify-center items-center mt-16 h-20 bg-red-400">
          <h1 className='text-2xl text-white'>Categories</h1>
        </div>
        <div className="flex justify-center items-center mt-1 h-36 p-4 bg-blue-600">
          <h1 className='text-2xl text-white'>Carosal</h1>
        </div>
        <div className="flex min-h-screen justify-center items-center mt-1 h-32 bg-red-400">
          <h1 className='text-2xl text-white'>All Data</h1>
        </div>
    </>
  );
}

export default App;
