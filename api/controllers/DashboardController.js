/**
 * DashboardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    /*
    affichage: function (req, res){
        Demande.find(function foundDemande(err, demande){
            if(err){
                return res.send(err);
            }
            else{
                res.view('pages/dashboard', { demande: demande });
            }
        });
    },
    */
    affichage: function (req, res){
        Demande.find(function foundDemande(err, demande){
            if (err) return res.send(err);
            
            res.view('pages/dashboard', { demande: demande });
        });
    },

};
