import React from 'react'
import './style.css'

export const About = () => {
  return (
    <div className='about'>

      <div className='container_about'>
        <div className='text_about'>Offer a better product with a competitive edge by managing treasury risk.</div>

        <div className='image_about'>
            <div className='about_card'>🪩 Lower the cost of borrowing.
                <div className='descr'>Because there is increased confidence the treasury can cover the loan book, interest rates may be lowered as less capital is required to be kept in reserves or insurance funds. </div>
            </div>
            <div className='about_card'>🪩 Increase Capital Efficiency.
                <div className='descr'>With increased confidence that DAO treasuries can cover the liabilities, protocols may decide to lower collateral requirements.</div>
            </div>
            <div className='about_card'>🪩 Spend less on liquidity.
                <div className='descr'>Make sure your treasury has the liquidity it needs in the most adverse of times.</div>
            </div>
            <div className='about_card'>🪩 Minimize governance.
                <div className='descr'>With Aera, DAOs can effectively manage their treasuries with the assistance of a decentralized network of Vault Guardians.</div>
            </div>
        </div>
    </div>
    
    </div>
  )
}
