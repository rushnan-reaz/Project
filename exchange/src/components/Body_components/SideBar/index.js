import React from 'react'
import './CSS/index.css'
import SideBar from './SideBar'
import Main from './Main'

function index() {
  return (
    <div className='index'>
        <div className="index-content">
           <SideBar />
           <Main />
        </div>
    </div>
  )
}

export default index