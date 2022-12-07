import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';
import Printers from '../pages/Printers';

const AppRouter = () => {
  return (
    <Routes>
        <Route index element={ <Home /> }/>
        <Route path='printers' element={ <Printers /> }/>
        <Route path='*' element={ <NoMatch /> }/>
    </Routes>
  )
}
export default AppRouter
