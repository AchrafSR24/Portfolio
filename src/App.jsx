import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifs from './components/Certifs';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/certifs' element={<Certifs />}/>
    </Route>)
  );

  return (
    <RouterProvider router={router} />
  );

}
const Root = () => {
  return (
  <>
     <Outlet/>
   </>

  );
};

export default App
