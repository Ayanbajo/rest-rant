const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
          </main>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name" name="name" value={data.place.name} required />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic" name="pic" value={data.place.pic} />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <label htmlFor="pic">City</label>
                    <input className="form-control" id="city" name="city" value={data.place.city} />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <label htmlFor="pic">State</label>
                    <input className="form-control" id="state" name="state" value={data.place.state} />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <label htmlFor="pic">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" value={data.place.cuisines} required />
                </div>
                </div>
                <button className="btn btn-secondary">Add places</button>
            </form>
        </Def>
    )
}

module.exports = edit_form

