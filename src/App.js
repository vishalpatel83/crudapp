import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch,Routes ,Router,BrowserRouter} from 'react-router-dom';
import { Layout } from './component/Layout/Layout';
import { Home } from './pages/Home';
import { Employeedata } from './pages/Employeedata';
import { Updateform } from './component/EmployeeData/updateform';


function App() {
  return (
    <div className="App">
    <Layout>
 
    {/* <Home/> */} 
    {/* <BrowserRouter> */}
    <Route exact path='/' component={Home}/>
    <Route exact path='/showemployee' component={Employeedata}/>
       
        {/* </BrowserRouter> */}
    
      <Route exact path='/updateemployee/:id' component={Updateform}/>
     
    </Layout>
     
    </div>
  );
}

export default App;
