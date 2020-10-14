/**
 * DemandeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

    demande_a_trans: function(req, res){
        var fichier = req.file('file')._files[0].stream.filename;
        req.file('file').upload({saveAs: fichier}, function onUploadComplete(err, files) {
            if (err) {
                return res.serverError(err);  // IF ERROR Return and send 500 error with error
              }
              var size = files[0].size;
              function FileConvertSize(aSize){
                    aSize = Math.abs(parseInt(aSize, 10));
                    var def = [[1, 'octets'], [1000, 'ko'], [1000*1000, 'Mo'], [1000*1000*1000, 'Go'], [1000*1000*1000*1000, 'To']];
                    for(var i=0; i<def.length; i++){
                        if(aSize<def[i][0]) return (aSize/def[i-1][0]).toFixed(2)+' '+def[i-1][1];
                    }
                }
              size = FileConvertSize(size);
              
              var objet = req.param('objet');
              var priorite = req.param('priorite');
              var tache = req.param('tache');
              var categorie = req.session.User.categorie;
              var matricule = req.session.User.matricule;
              
              Demande.create({objet, priorite, tache, fichier, size, categorie, matricule}, function fileUploaded(err){
                if(err){
                    res.send("Erreur:" + err);
                }
                return res.redirect('/dashboard');
              });

        });
    },

    get_form_demande: function(req, res){
        Demande.findOne(req.param('id_demande'), function foundOneDemande(err, oneDemande){
            if(err){
                return res.send("Erreur:" + err);
            }
            res.view('demande/form_demande', { oneDemande: oneDemande});
        } );
    },

};

