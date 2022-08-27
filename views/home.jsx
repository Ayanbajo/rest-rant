const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
              <img src="/images/pastry.jpg" alt="homepic"/>
              </div>
              <a href="/places">
                <button className="btn btn-outline-secondary">Places Page</button>
              </a>
          </main>
      </Def>
      )
  }
  
module.exports = home
