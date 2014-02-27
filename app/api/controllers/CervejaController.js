module.exports = {
    listagem : function(req, res) {

        Cerveja.find().done(function(err, cervejas){

            if (err) {
                res.view({message: 'Deu erro, oh =x'});
            }

            return res.view({cervejas: cervejas});

        });

        res.view();
    },

    show : function(req, res) {

        res.view({
            id: req.params.id
        });
    },

    socket : function(req, res) {

        res.view();
    }
}