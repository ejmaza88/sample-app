import React, { useEffect , useRef} from 'react';
import ReactDOM from 'react-dom';
import FadeIn from 'react-fade-in';
import { MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';


import '../css/home.css'


function App(props) {

  const handleClick = () => {
    console.log(props)
  }

  return (
    <>
      <FadeIn>
        <MDBRow>

          <MDBCol sm={12} md={2} lg={2}>
            Message: {props.message}
          </MDBCol>

          <MDBCol sm={12} md={10} lg={10}>
            <MDBBtn rounded size='sm' onClick={handleClick} color='light'>Button</MDBBtn>
          </MDBCol>

        </MDBRow>
      </FadeIn>
    </>
  )
}


// component mounts in app/home.html
ReactDOM.render(
  <App {...window.JS_DATA} />,
  document.getElementById('home-root')
);
