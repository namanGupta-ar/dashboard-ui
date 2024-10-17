import './App.css';
import Dashboard from './components/dashboard';
import Sidebar from './components/side-bar';

function App() {
  return (
    <>
      <div className='flex w-screen h-screen'>
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
