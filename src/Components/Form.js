import React, {useState} from 'react'
import {Card} from 'primereact/card'
import {InputText} from 'primereact/inputtext'
import '../Styles/Form.css'
import Proptypes from 'prop-types'

const Form = props => {

  const mappedFields = props.formFields.map(item => (
    <div className='form-field' key={item.slug}>
      <label className='form-label'>{item.name}</label>
      <InputText 
        className='form-input'
        name={item.slug}
        disabled={item.slug === 'id' || !props.edit}
      />
    </div>
    )
  )

  return ( 
    <div className='form'>
      <Card>
        <div className='form-container'>
          {mappedFields}
        </div>
      </Card>
    </div>
   )
}

Form.propTypes = {
  edit: Proptypes.bool
}
 
export default Form