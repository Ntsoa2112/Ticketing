/**
 * DemandeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    demande_a_trans: function(req, res){
        Demande.create(req.allParams(), function demandeCreated(err, demande){
            if(err){
                res.send("Erreur: " + err);
            }
            else{
                return res.redirect('/dashboard');
            };
        });
    },

};

