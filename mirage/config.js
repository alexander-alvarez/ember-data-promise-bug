import Response from 'ember-cli-mirage/response';


export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/users');
  this.get('/users/:id');

  this.get('/cars/:id', function({ cars }, {params: {id}}) {
    // if id not equal to 2
    if (id === '2') {
      return new Response(404);
    }
    return this.serialize(cars.find(id));
  });
}
