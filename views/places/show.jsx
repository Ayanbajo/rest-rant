const React = require('react')
const Def = require('../default')

function show (data) {
  let comments =(
    <h3 className = "inactive"> No Comments yet! </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-3">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <div className='row'>
            <div className = "col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3> Located in {data.place.city}, {data.place.state}</h3>
            </div>
            <div className = "col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            <p>
                Not rated
            </p>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <p>
            Located in {data.place.city}, {data.place.state}
            </p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>  
            </div> 
            </div>
            <h2>Comments</h2>
            {comments}
            <form method="POST" action={`/places/${data.place.id}/comment`}>
              <div className = "form-row">
              <div className=" form-group col-sm-12">
                          <label htmlFor="content">Content</label>
                          <textarea className="form-control" id="content" name="content"></textarea>
              </div>
              <div className=" form-group col-sm-4">
                          <label htmlFor="author">Author</label>
                          <input type = "text" className="form-control" id="author" name="author" />
              </div>
              
              <div className="form-group col-sm-4">
                          <label htmlFor="stars">Star Rating</label>
                          <input type = "range" step="0.5" max="5" id="stars" name="stars" />
              </div>
              <div className="form-group col-sm-2">
                          <label htmlFor="rant">Rant</label>
                          <input type="checkbox" id="rant" name="rant" />
              </div>
              </div>
              <input className="btn btn-outline-secondary" type="submit" value="Add Comment" />
            </form>
          </main>
        </Def>
    )
}

module.exports = show
