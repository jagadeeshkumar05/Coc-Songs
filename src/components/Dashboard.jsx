import React from 'react'
import Nav from './Nav'
import Searchbox from './searchbox';

export default function Dashboard() {
  return (
  <>
    <Nav/>
    <div className='container-fluid'>
      <div className='row mt-3'>
        <div className='col-md-10 bg-white'>
          <Searchbox/>                                                                         
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
