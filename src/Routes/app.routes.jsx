import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { AddFood } from '../pages/AddFood';
import { Details } from '../pages/Details';
import { EditFood } from '../pages/EditFood';
import { Profile } from '../pages/Profile';
import { Requests } from '../pages/Requests';

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addfood" element={<AddFood />} />
      <Route path="/details" element={<Details />} />
      <Route path="/editfood" element={<EditFood />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/requests" element={<Requests />} />     
    </Routes>
  )
}