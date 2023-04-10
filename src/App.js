import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Schedule from './Schedule';
import Load from './Load';
import Title from './Component/Title';

function App() {
  return (
    <div>
      <Title/>
      <Schedule />
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4 p-2 heading'>
            <span>LOAD</span>
          </div>
        </div>
      </div>
      <Load />
    </div>
  );
}

export default App;
