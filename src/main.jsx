import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx'
import Whatwedo from './components/Whatwedo/Whatwedo.jsx';
import Ourplans from './components/Ourplans/Ourplans.jsx';
import FAQs from './components/FAQs/FAQs.jsx';
import Insights from './components/Insights/Insights.jsx';
import Contact from './components/Contact/Contact.jsx';
import Demo from './components/Demo/Demo.jsx';
import Login from './components/Login/Login.jsx';


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='whatwedo' element={<Whatwedo />} />
      <Route path='ourplans' element={<Ourplans />} />
      <Route path='faqs' element={<FAQs />} />
      <Route path='insights' element={<Insights />} />
      <Route path='contact' element={<Contact />} />
      <Route path='demo' element={<Demo />} />
      <Route path='login' element={<Login />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

