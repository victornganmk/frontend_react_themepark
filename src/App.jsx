import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import Contact_Us from './pages/contact_us/Contact_Us';
import Hotel_Booking from './pages/hotel_booking/Hotel_Booking';
import Hotel_Dining from './pages/hotel_dinning/Hotel_Dining';
import Hotel_Facilities from './pages/hotel_facilities/Hotel_Facilities';
import Hotel_Rooms from './pages/hotel_rooms/Hotel_Rooms';
import Hotel_Rooms_Deluxe from './pages/hotel_rooms_deluxe/Hotel_Rooms_Deluxe';
import Hotel_Rooms_Grand from './pages/hotel_rooms_grand/Hotel_Rooms_Grand';
import Hotel_Rooms_Premier from './pages/hotel_rooms_premier/Hotel_Rooms_Premier';
import Hotel_Rooms_Standard from './pages/hotel_rooms_standard/Hotel_Rooms_Standard';
import Job_Openings from './pages/job_openings/Job_Openings';

function App() {

  return (
      
      <Routes>
        <Route path = "/hotel_rooms" element = {<Hotel_Rooms />} />
        <Route path = "/hotel_rooms_deluxe" element = {<Hotel_Rooms_Deluxe />} />
        <Route path = "/hotel_rooms_grand" element = {<Hotel_Rooms_Grand />} />
        <Route path = "/hotel_rooms_premier" element = {<Hotel_Rooms_Premier />} />
        <Route path = "/hotel_rooms_standard" element = {<Hotel_Rooms_Standard />} />
        <Route path = "/hotel_dining" element = {<Hotel_Dining />} />
        <Route path = "/hotel_facilities" element = {<Hotel_Facilities />} />
        <Route path = "/hotel_booking" element = {<Hotel_Booking />} />
        <Route path = "/job_openings" element = {<Job_Openings />} />
        <Route path = "/contact_us" element = {<Contact_Us />} />
      </Routes>
      {/* <Hotel_Rooms />
      <Hotel_Rooms_Standard />
      <Hotel_Rooms_Deluxe />
      <Hotel_Rooms_Premier />
      <Hotel_Rooms_Grand  />
      <Hotel_Dining />
      <Hotel_Facilities />
      <Hotel_Booking />
      <Job_Openings />
      <Contact_Us />  */}
    </BrowserRouter>
  );
}

export default App
