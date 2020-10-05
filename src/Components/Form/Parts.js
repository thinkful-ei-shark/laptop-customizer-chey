  
import React from 'react'; 

export default function Parts({featureHash, feature, options}) {
    return (
        <fieldset className='feature' key={featureHash}>
        <legend className='feature__name'>
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    )
}