const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
              <img src="/images/400.jpg" alt="homepic"/>
              </div>
              <a href="/places">
                <button className="btn btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  
module.exports = home
