import React from 'react'; 
import slugify from 'slugify';
import Parts from './Parts';

export default function Features({selected, features, updateFeature}) {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

 return Object.keys(features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = features[feature].map((item) => {
    const itemHash = slugify(JSON.stringify(item));

        return (
          <div key={itemHash} className='feature__item'>
            <input
              type='radio'
              id={itemHash}
              className='feature__option'
              name={slugify(feature)}
              checked={item.name === selected[feature].name}
              onChange={(e) => updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className='feature__label'>
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
        })
      return (
       <Parts featureHash={featureHash} feature={feature} options={options} />
      );
    });
}