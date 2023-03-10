import './App.css';
import { FuncProp } from './Components/FuncProp';
import { MapFunc } from './Components/MapFunc';
import { Memo } from './Components/Memo';
import { Parent } from './Components/Parent';
import { PropState } from './Components/PropState';
import { Ref } from './Components/Ref';
import { StudReg } from './Components/StudReg';
import { Link, Route, Routes} from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Navbar } from './Components/Navbar';
import { Page404 } from './Components/Page404';
import { Users } from './Components/Users';
import { Filter } from './Components/Filter';
import { Contacts } from './Components/Contacts';
import { Car } from './Components/Car';
import { Bike } from './Components/Bike';
import { Truck } from './Components/Truck';
import { Login } from './Components/Login';
import { UserApi } from './Components/Api/UserApi';
import { RegisterUser } from './Components/CRUD/RegisterUser';
import { ViewUser } from './Components/CRUD/ViewUser';
import { UpdateUser } from './Components/CRUD/UpdateUser';

function App() {
  
  
  return (
    <div className="App">
      
      {/* <PropState/> */}
      {/* <StudReg/> */}
      {/* <FuncProp/> */}
      {/* <MapFunc/> */}
      {/* <Parent/> */}
      {/* <Memo/> */}
      {/* <Ref/> */}

      
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Page404/>}/>
        <Route path='/users/:name' element={<Users/>}/>
        <Route path='/filter' element={<Filter/>}/>
        <Route path='/contacts/' element={<Contacts/>}>
          <Route path='car' element={<Car/>}/>
          <Route path='bike' element={<Bike/>}/>
          <Route path='truck' element={<Truck/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/api' element={<UserApi/>}/>
        <Route path='/reguser' element={<RegisterUser/>}/>
        <Route path='/viewuser' element={<ViewUser/>}/>
        <Route path='/updateuser/:id' element={<UpdateUser/>}/>
      </Routes>
    
      

    </div>
  );
}

export default App;
