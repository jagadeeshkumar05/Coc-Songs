import React from 'react'
import Nav from './Nav'
import Searchbox from './searchbox';
import { useParams } from 'react-router-dom';
export default function Dashboard() {
  const { id } = useParams();
  console.log(id);
  return (
  <>
    <Nav/>
    <div className='container-fluid'>
      <div className='row mt-3'>
        <div className='col-md-10 bg-white'>
          <Searchbox id={id}/>                                                                         
        </div>
      </div>
      {/* <div className='row'>
        <div className='col-md-12 bg-white'>
          <Carousel/>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 bg-white'>
          <Products/>
        </div>
        <div className='row'>
        <div className='col-md-12 bg-white'>
          <Form/>
        </div>
      </div>
      </div> */}
    </div>
   
      </>
  )
}
