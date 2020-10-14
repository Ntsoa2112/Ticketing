/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'login_register/login' },

  'get /form_demande/:id_demande': 'demandeController.get_form_demande',

  '/creer_compte': { view: 'login_register/creer_compte' },

  'post /creer_compte' : 'UserController.create',

  '/dashboard' : 'DashboardController.affichage',

  'post /login' : 'userController.login',

  '/logout' : 'userController.logout',

  '/demander_a_trans' : { view: 'demande/demander_a_trans'},

  'post /demander_a_trans' : 'demandeController.demande_a_trans',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
