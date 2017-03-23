import Ember from 'ember';
// import InfinityRoute from "ember-infinity/mixins/route";



export default Ember.Route.extend({
  model(params) {
    var article = this.store.findAll('article');
    // console.log(article);
    return article;
  }
  // actions: {
  //   searchByAuthor(param){
  //     var newauthors = this.store.query('article', { filter: { author: param.searchByAuthor } })
  //     .then(function(authors) {
  //       console.log(authors);
  //     })
  //   }
  // }
});



// export default Ember.Route.extend(InfinityRoute, {
//   model() {
//     return this.infinityModel("article", { perPage: 5, startingPage: 1 });
//   }
// });
//ember documentation on query
// this.store.query('person', { filter: { name: 'Peter' } }).then(function(peters) {
//   // Do something with `peters`
// });
