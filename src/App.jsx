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
    <>
      <Hotel_Rooms />
      <Hotel_Rooms_Standard />
      <Hotel_Rooms_Deluxe />
      <Hotel_Rooms_Premier />
      <Hotel_Rooms_Grand  />
      <Hotel_Dining />
      <Hotel_Facilities />
      <Hotel_Booking />
      <Job_Openings />
      <Contact_Us /> 
    </>
  );
}

export default App
