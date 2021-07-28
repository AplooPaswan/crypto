import React, { useEffect, useState } from 'react'
import useFetch from 'use-http'

import './app.css'


const Card = () => {
    let load = <div className="load"></div> ;

    const options = {} // these options accept all native `fetch` options

    const { loading, error, data = [] } = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h', options, [])

    return (
        <>
        <div className="row">
          {error && 'Error!'}
          {loading && load }

          {
              data.map((datas)=>{
                  return(
                      <>
                        <div className="main shadow p">
                            <div className="symbol">
                                <img 
                                    src={ datas.image }
                                    alt="jsx-a11y/img-redundant-alt" height="140px" className="card-img"
                                    / >                     
                            </div>

                            <div className="data">
                                <h3>{ datas.id } ( { datas.symbol } ) &nbsp;&nbsp;&nbsp;&nbsp; <span className="rank"> #{ datas.market_cap_rank }</span> </h3>
                                <span className="high">H &nbsp;&nbsp;₹{ datas.high_24h }</span> &nbsp;&nbsp;<span className="low"> L &nbsp;&nbsp;₹{ datas.low_24h }</span>&nbsp;&nbsp;&nbsp;<br/>
                                <span className="header">24 Hours Changes</span><br/>
                                <span>₹ &nbsp;&nbsp;{ datas.price_change_24h }</span><br/>
                                <span>% &nbsp;&nbsp;{ datas.price_change_percentage_24h }</span><br/>
                                <span className="ath"> ATH &nbsp;&nbsp; ₹{ datas.ath } </span><span className="atl">/ ATL ₹{datas.atl}</span>
                                <p className="now">₹ &nbsp;{ datas.current_price } </p>
                            </div>

                        </div>
                      </>
                  )
              })
          }

          </div>
        </>
      )

}

export default Card






























/* 

const Card = () => {

const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d";

const [ data, setData ] = useState([]);

const getCryptoData = async () => 
{
    try {
        const res = await fetch(url);
        
        const Result = await res.json();
        console.log(Result);

        setData(Result);

    } catch (error) {
        console.log(error);
    }
}

useEffect(() => 
{
   getCryptoData();


}, [])



return (
        <div>
            <div className="row">
            { 
                data.map((datas, ind)=>{
                    return(
                        <div className="main shadow p">
                            <div className="symbol">
                                <img 
                                    src={ datas.image }
                                    alt="jsx-a11y/img-redundant-alt" height="140px" className="card-img"
                                    / >                     
                            </div>

                            <div className="data">
                                <h3>{ datas.id } ( { datas.symbol } ) &nbsp;&nbsp;&nbsp;&nbsp; <span className="rank"> #{ datas.market_cap_rank }</span> </h3>
                                <span className="high">H &nbsp;&nbsp;₹{ datas.high_24h }</span> &nbsp;&nbsp;<span className="low"> L &nbsp;&nbsp;₹{ datas.low_24h }</span>&nbsp;&nbsp;&nbsp;<br/>
                                <span className="header">24 Hours Changes</span><br/>
                                <span>₹ &nbsp;&nbsp;{ datas.price_change_24h }</span><br/>
                                <span>% &nbsp;&nbsp;{ datas.price_change_percentage_24h }</span><br/>
                                <span className="ath"> All Time High&nbsp;&nbsp; ₹{ datas.ath } </span><span className="atl">/ Low ₹{datas.atl}</span>
                                <p className="now">₹ &nbsp;{ datas.current_price } </p>
                            </div>

                        </div>
                    )
                })
            }
            </div>   
        </div>
    )
}

export default Card
*/


