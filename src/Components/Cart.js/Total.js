import React from 'react'; 

export default function Total({selected}) {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      const total = Object.keys(selected).reduce(
        (acc, curr) => acc + selected[curr].cost,
        0
      );

    return (
        <div className='summary__total'>
        <div className='summary__total__label'>Total</div>
        <div className='summary__total__value'>
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    )
}