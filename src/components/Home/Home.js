import React, { useState } from 'react'
import './Home.css'
import { Alert, Button, Card, CardMedia, TextField } from '@mui/material';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { API } from '../../global';

const Home = () => {
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("")

  const sendLink = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API}/sendemail`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name, phno, area, message })
    });

    const data = await res.json();
    console.log(data)
    if (data.status === 200) {
      setName("")
      setPhno("")
      setArea("")
      setMessage("")
      setAlert(true)
    }
  }
    return (
      <div>
        <div className='img-container'>
          <div className='home-images'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Tata_Motors_Logo.svg/2560px-Tata_Motors_Logo.svg.png' alt='motor-logo' className='tata-logo' />
            <img src='https://www.tatamotors.com/wp-content/uploads/2019/05/22061115/press-22may19-logo.jpg' alt='intra-log' className='intra-img' />
          </div>
          <div>
            <img src='https://i.pinimg.com/originals/0b/c1/94/0bc19452b7a568797c8331be7275e453.png' alt='offers' className='offer-img' />
          </div>
          <Button variant="contained" href='#contact' className='drive-btn'><DriveEtaIcon />book a test drive</Button>
        </div>
        <div>
          <h3 className='spec-head'>TATA INTRA V30 and V50 SPECIFICATION</h3>
          <p className='spec-subhead'>What makes the Tata Intra V30 range a good choice for your business?</p>
          <div>
            <Card>
              <CardMedia
                component="img"
                image="https://intra.tatamotors.com/images/compact-trucks/tata-intra-trucks/gallery/Intra_Gallery_Banner.jpg"
                alt="green iguana"
              />
            </Card>
          </div>
          <div className='spec-card'>
            <img className='v30-image' src='https://smalltrucks.tatamotors.com/sites/default/files/images/2_high_power_0.jpg' alt='v30' />
            <div className='spec-details-container'>
              <div>
                <p className='spec-info-head'>Engine Capacity</p>
                <p className='spec-info'> 4 Cylinder, 1496 cc DI engine</p>
              </div>
              <div>
                <p className='spec-info-head'>Max. Engine Output</p>
                <p className='spec-info'>52 kW @ 4000 r/min</p>
              </div>

              <div>
                <p className='spec-info-head'>Max. Torque</p>
                <p className='spec-info'>140 Nm @ 1800-3000 r/min</p>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-us'>
          <div className='contact-section'>
            <h3>TATA MOTORS COMMERCIAL VEHICLE DEALER - ABT INDUSTRIES LTD</h3>
            <div className='contact-address'>
              <LocationOnIcon />
              <p>No 48/49, Assambu Road, Balamore Road, Nagercoil
                Vadasery
                Nagercoil - 629001</p>
            </div>
            <div className='contact-address'>
              < PhoneAndroidIcon />
              <p>8608016918</p>
            </div>
            <div className='contact-address'>
              < AccessTimeFilledIcon />
              <p>Open until 07:00 PM </p>
            </div>
            <div className='contact-infos'>
              <p>Sales</p>
              <p>Service</p>
              <p>Spares</p>
            </div>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.8166916434309!2d77.42922377005695!3d8.198565954599875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1f28af840cf%3A0x4e1a1bc8afe50c87!2sTATA%20MOTORS%20COMMERCIAL%20VEHICLE!5e0!3m2!1sen!2sin!4v1691992215389!5m2!1sen!2sin" width="600" height="450"
            
              alt="frame"
              title="Embedded Content from Example.com"
              loading="lazy"
              className='map-frame'></iframe>
          </div>
          <div className='contact-container' id='contact'>
            {alert ? <Alert severity="success" className='reset-msg'>successfully sent the message; he will contact you shortly.</Alert> : null}

            <form className='contact-form'>
              <h3>Contact us</h3>
              <TextField id="standard-basic"
                label="Your Name"
                variant="standard"
                name='name'
                onChange={(e) => setName(e.target.value)} />
              <TextField id="standard-basic"
                label="Phone Number"
                variant="standard"
                name='phno'
                onChange={(e) => setPhno(e.target.value)} />
              <TextField id="standard-basic"
                label="your area"
                variant="standard"
                name='area'
                onChange={(e) => setArea(e.target.value)} />
              <TextField
                id="standard-multiline-static"
                label="Message"
                name='message'
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={4}
                variant="standard"
              />
              <Button variant='standard' onClick={sendLink} type='submit'>submit</Button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  export default Home