import './App.css';
import Dashboard from './components/dashboard';
import Sidebar from './components/side-bar';

function App() {
  return (
    <>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='h-full overflow-y-scroll'>
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
