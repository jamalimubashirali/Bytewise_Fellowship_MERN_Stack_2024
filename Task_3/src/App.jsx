import {Router , createBrowserRouter, createRoutesFromElements , RouterProvider, Route} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobsPage from './pages/AddJobsPage';
import PageNotFound from './pages/PageNotFound';


const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element = {<MainLayout />}>
    <Route index element = {<HomePage />}/>
    <Route path='/jobs' element = {<JobsPage />}/>
    <Route path='/add-jobs' element = {<AddJobsPage />}/>
    <Route path='*' element = {<PageNotFound />}/>
  </Route>
  )
) 

const App = () => {
  return <RouterProvider router = {router}/>
}

export default App;