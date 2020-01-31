import React from 'react'
import '../Styles/Loading.css'
import {ProgressSpinner} from 'primereact/progressspinner';

const Loading = () => {
  return ( 
    <div className='loading'>
      <div className='spinner'>
        <ProgressSpinner />
      </div>
    </div>
   )
}
 
export default Loading