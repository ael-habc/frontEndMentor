import React from 'react'

export default function ProfileCard({handleClick}) {
  return (
       <div className="profile_card">
        <div className="profile">
            <img src={require("./images/image-jeremy.png")} alt="profile"/>
            <h3>Report  for me</h3>
            <h1>Jeremy Robson</h1>
        </div>
        <div className="timeframe">
          <p className="daily" onClick={e => handleClick(e)}>Daily</p>
          <p className="weekly" onClick={e => handleClick(e)}>Weekly</p>
          <p className="monthly" onClick={e => handleClick(e)}>Monthly</p>
        </div>
      </div>
  )
}