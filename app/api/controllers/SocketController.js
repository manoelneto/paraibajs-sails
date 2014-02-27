module.exports = {
    index : function(req, res) {

        // io.sockets.emit('news', {
        //     message : 'outra pagina carregada'
        // });
        res.view({
            layout: 'canvasLayout.ejs'
        });
    },

    drawsocket : function(req, res) {
        var socket = req.socket;
        var io = sails.io;

        var data = req.body;
        var action = req.params.id;

        io.sockets.emit(action, data);

        res.json({
            status : 'success'
        });
    },

    draw : function(req, res) {

        res.view({
            layout: 'canvasLayout.ejs'
        });
    } 

}