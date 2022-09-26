import axios from "axios";
import {useEffect,useState} from 'react';
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";


function App() {
  const [product, setProduct] = useState('')

    const getApicall = async ()=>{
        try{
            const response= await axios.get('https://devapi.2gathers.com/api/events/view-event_new/?eventId=257&eventUniqueNo=1662391471')
           console.log (response.data.eventDetails)
            setProduct(response.data.eventDetails[0])
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
       getApicall()
    }, [])
  return (
    <div>
      <Navbar
       name={product.eventName}
       date={product.eventStartDate}
       active={product.eventStatus}/>

       <Body
        type={product.eventType}
        Category={product.eventCategory}
        Capacity={product.eventCapacity}
        boxs={product.totalBox}
        event={product.publicEvent}
        location={product.location}
        allowusers={product.allowUsersToReserveBox}
        guest={product.isGuestAllowed}
        Description={product.eventDescription}
       />
       <Footer />
       
     
    </div>
  )
 
}

export default App;
