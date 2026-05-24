import React from 'react'
import './Bento.css'

const Bento = () => {
  return (
    <section>
      <div className="grid-container">
        <div id="box1" className="boxes" style={{'gridArea': 'box1'}}>
          <h1>Started</h1>
          <p>Established in 2013</p>
        </div>
        <div id="box2" className="boxes" style={{'gridArea': 'box2'}}>
          <h1>5000+</h1>
          <p>Happy Students</p>
        </div>
        <div id="box3" className="boxes" style={{'gridArea': 'box3'}}></div>
        <div id="box4" className="boxes" style={{'gridArea': 'box4'}}>
          <h1>21+</h1>
          <p>Rank Holders</p>
        </div>
        <div id="box5" className="boxes" style={{'gridArea': 'box5'}}></div>
        <div id="box6" className="boxes" style={{'gridArea': 'box6'}}>
          <h1>1200+</h1>
          <p>Top Performers</p>
        </div>
        <div id="box7" className="boxes" style={{'gridArea': 'box7'}}></div>
        <div id="box8" className="boxes" style={{'gridArea': 'box8'}}>
          <h1>End</h1>
          <p>Never Ending Journey</p>
        </div>
      </div>
    </section>
  )
}

export default Bento