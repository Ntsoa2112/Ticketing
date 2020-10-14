/**
 * DemandeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
    
    demande_a_trans: function(req, res){
       Fake.findOne(req.param('code'), function foundOneFake(err, Onefake){
            if(err) return res.send(err);
            var code = Onefake.code;
            var size = Onefake.size;
            var chemin = Onefake.chemin;
            var objet = req.param('objet');
            var priorite = req.param('priorite');
            var tache = req.param('tache');
            var categorie = req.session.User.categorie;
            var matricule = req.session.User.matricule;
            Demande.create({objet, priorite, tache, code, size, chemin, categorie, matricule},function createDemande(err){
                if(err){
                    res.send("Erreur:" + err);
                }
                return res.redirect('/dashboard');
              });
       })
        
    },

    get_form_demande: function(req, res){
        Demande.findOne(req.param('id_demande'), function foundOneDemande(err, oneDemande){
            if(err){
                return res.send("Erreur:" + err);
            }

            var datecreation = new Date(oneDemande.createdAt).toLocaleDateString();
            var timecreation = new Date(oneDemande.createdAt).toLocaleTimeString();         
            
            res.view('demande/valide_form_demande', { oneDemande: oneDemande, datecreation:datecreation , timecreation: timecreation });
        } );
    },

    prendre_demande: function(req, res){
        Demande.findOne(req.param('id_demande'), function foundOneFake(err, OneDemande){
            if(err) return res.send("Erreur :" + err);
            var id_demande = OneDemande.id;
            var matricule_trans = req.session.User.matricule;           
            Effectuer_tache.create({id_demande, matricule_trans} , async function takeDemande(err){
                if(err) return res.send("Erreur : " + err);
                console.log("Mety prendre demande");
                var etat_demande = 'En cours';
               
                await Demande.update(id_demande, etat_demande, function updateDemande(err){
                    if(err) return res.send("Erreur : " + err);
                    console.log("Mety update");
                    return res.redirect('/dashboard');
                });
                
            } );

        });
    },

};


/*
var code = req.param('code');
        console.log("code :" + code);

        Fake.find(function foundFake(err, fake){
            if(err) return res.send(err);
            //var code = folder.code;
            console.log("folder : " + fake);

            var size = folder.size;
            var chemin = folder.chemin;
            var objet = req.param('objet');
            var priorite = req.param('priorite');
            var tache = req.param('tache');
            var categorie = req.session.User.categorie;
            var matricule = req.session.User.matricule;
            Demande.create({objet, priorite, tache, code, size, chemin, categorie, matricule}, function createdemande(err){
                if(err){
                    res.send("Erreur:" + err);
                }
                return res.redirect('/dashboard');
              });
              
        } );

        /*
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
        */