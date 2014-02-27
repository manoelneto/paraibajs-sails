# ParaíbaJs - Criando webapps com sails.js

Instale o sailsjs

    sudo npm isntall -g sails

Baixe o projeto, entre na branch gh-pages, entre na pasta app e depois digite no terminal:

    sails lift
    
Estará rodando na porta 1338 (por padrão ele roda na 1337)

# Aplicação de Desenho

Você pode desenhar com dispositivo touch no ios (não funciona ainda no android, foi apenas para demonstrar).

Abra a url: 

    http://IP_DA_SUA_MAQUINA:1338/socket/draw
    
Para ver o desenho, voce acessa a url (pode ser no chrome mesmo):

    http://IP_DA_SUA_MAQUINA:1338/socket/

# Policies

Não foi demonstrado na palestra, mas pode ser visto na url:

    http://IP_DA_SUA_MAQUINA:1338/listagem/
    
Será retornado forbidden, mas você acessa essa url para conseguir ver o conteúdo:

    http://127.0.0.1:1338/listagem?usuario=manoel
