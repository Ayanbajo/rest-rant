const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
          </main>
    <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
        <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="name">Place Name</label>
            <input className="form-control" id="name" name="name" value={data.place.name} required />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">Place Picture</label>
            <input className="form-control" id="pic" name="pic" value={data.place.pic} required />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">City</label>
            <input className="form-control" id="city" name="city" value={data.place.city} required />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">State</label>
            <input className="form-control" id="state" name="state" value={data.place.state} required />
          </div>
          <div className="form-group col-sm-12">
            <label htmlFor="pic">Cuisines</label>
            <input className="form-control" id="cuisines" name="cuisines" value={data.place.cuisines} required />
          </div>
          </div>
        <button className="btn btn-primary">Add places</button>
    </form>
        </Def>
    )
}

module.exports = edit_form
