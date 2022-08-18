const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
              <img src="/images/icecream.jpg" alt="icecream"/>
              </div>
              <div>
              Photo by <a href="https://unsplash.com/@victoriakosmo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Victoria Shes</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }
  
module.exports = error404