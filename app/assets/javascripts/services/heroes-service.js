// This service provides the components with the hero data

//=require services/mock-heroes
 
var HeroService = function() {
  // If you're want to go through https://angular.io/docs/ts/latest/tutorial/ step by step, then
  // uncomment the first section (which provides the hero list without calling the server) and
  // comment out the second section which uses the server that you're currently setting up (unless
  // you're just using the ng2 js code here client side, which is cool too.).
  
  //we get the list from mock-heroes.js <- first section
  //this.getHeroes = Promise.resolve(Heroes);
  //this.getHero = function(id) { return Promise.resolve(Heroes).then(heroes => heroes.filter(hero => hero.id === id)[0]) };
   
  //we get the list from the server <- second section
  this.getHeroes = function(http) { return http.get('/heroes').map(res => res.json()) };
  this.getHero = function(http,id) { return http.get('/heroes/' + id).map(res => res.json()) };
 
  headers = new ng.http.Headers({ 'Content-Type': 'application/json' }); //I question whether headers & options are supposed to be global.
  options = new ng.http.RequestOptions({ headers: headers, method: "put" });
  this.updateHero = function(http,id,name) { return http.post('/heroes/' + id, JSON.stringify({ id, name }), options) };
};