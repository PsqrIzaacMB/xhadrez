function inicia_jogo(){
    vez = "branco"; //vez de quem jogar
    
    //muda a classe das pecas pretas(encima) para mostrar imgens das pecas
            document.getElementById("t11").innerHTML = "<img src='Bank-i/torre-preta-removebg-preview.png'>";
            document.getElementById("t12").innerHTML = "<img src='Bank-i/cavalo-preto-removebg-preview.png'>";
            document.getElementById("t13").innerHTML = "<img src='Bank-i/bispo-preto-removebg-preview.png'>";
            document.getElementById("t14").innerHTML = "<img src='Bank-i/conselheiro-preto-removebg-preview.png'>";
            document.getElementById("t15").innerHTML = "<img src='Bank-i/rainha-preta-removebg-preview.png'>";
            document.getElementById("t16").innerHTML = "<img src='Bank-i/rei-preto-removebg-preview.png'>";
            document.getElementById("t17").innerHTML = "<img src='Bank-i/conselheiro-preto-removebg-preview.png'>";
            document.getElementById("t18").innerHTML = "<img src='Bank-i/bispo-preto-removebg-preview.png'>";
            document.getElementById("t19").innerHTML = "<img src='Bank-i/cavalo-preto-removebg-preview.png'>";
            document.getElementById("t110").innerHTML = "<img src='Bank-i/torre-preta-removebg-preview.png'>";
            
            document.getElementById("t21").innerHTML = "<img src='Bank-i/peao-preto-removebg-preview.png'>";
            document.getElementById("t22").innerHTML = "<img src='Bank-i/peao-preto-removebg-preview.png'>";
            document.getElementById("t23").innerHTML = "<img src='Bank-i/elefante-preto-removebg-preview.png'>";
            document.getElementById("t24").innerHTML = "<img src='Bank-i/peao-preto-removebg-preview.png'>";
            document.getElementById("t25").innerHTML = "<img src='Bank-i/peao-preto-removebg-preview.png'>";
            document.getElementById("t26").innerHTML = "<img src='Bank-i/peao-preto-removebg-preview.png'>";
            document.getElementById("t27").innerHTML = "<img src='Bank-i/peao-preto-removebg-preview.png'>";
            document.getElementById("t28").innerHTML = "<img src='Bank-i/elefante-preto-removebg-preview.png'>";
            document.getElementById("t29").innerHTML = "<img src='Bank-i/peao-preto-removebg-preview.png'>";
            document.getElementById("t210").innerHTML = "<img src='Bank-i/peao-preto-removebg-preview.png'>";
    
    //muda a classe das pecas brancas(embaixo) para mostrar imgens das pecas
            document.getElementById("t101").innerHTML = "<img src='Bank-i/torre-branca-removebg-preview.png'>";
            document.getElementById("t102").innerHTML = "<img src='Bank-i/cavalo-branco-removebg-preview.png'>";
            document.getElementById("t103").innerHTML = "<img src='Bank-i/bispo-branco-removebg-preview.png'>";
            document.getElementById("t104").innerHTML = "<img src='Bank-i/conselheiro-branco-removebg-preview.png'>";
            document.getElementById("t105").innerHTML = "<img src='Bank-i/rainha-branca-removebg-preview.png'>";
            document.getElementById("t106").innerHTML = "<img src='Bank-i/rei-branco-removebg-preview.png'>";
            document.getElementById("t107").innerHTML = "<img src='Bank-i/conselheiro-branco-removebg-preview.png'>";
            document.getElementById("t108").innerHTML = "<img src='Bank-i/bispo-branco-removebg-preview.png'>";
            document.getElementById("t109").innerHTML = "<img src='Bank-i/cavalo-branco-removebg-preview.png'>";
            document.getElementById("t1010").innerHTML = "<img src='Bank-i/torre-branca-removebg-preview.png'>";
             
            document.getElementById("t91").innerHTML = "<img src='Bank-i/peao-branco-removebg-preview.png'>";
            document.getElementById("t92").innerHTML = "<img src='Bank-i/peao-branco-removebg-preview.png'>";
            document.getElementById("t93").innerHTML = "<img src='Bank-i/elefante-branco-removebg-preview.png'>";
            document.getElementById("t94").innerHTML = "<img src='Bank-i/peao-branco-removebg-preview.png'>";
            document.getElementById("t95").innerHTML = "<img src='Bank-i/peao-branco-removebg-preview.png'>";
            document.getElementById("t96").innerHTML = "<img src='Bank-i/peao-branco-removebg-preview.png'>";
            document.getElementById("t97").innerHTML = "<img src='Bank-i/peao-branco-removebg-preview.png'>";
            document.getElementById("t98").innerHTML = "<img src='Bank-i/elefante-branco-removebg-preview.png'>";
            document.getElementById("t99").innerHTML = "<img src='Bank-i/peao-branco-removebg-preview.png'>";
            document.getElementById("t910").innerHTML = "<img src='Bank-i/peao-branco-removebg-preview.png'>";
    
    
            //cria array que var receber as posicoes do tabuleiro
            cria_array();
            function cria_array(){
                var x,y;
                
                peca = new Array();
                
                for(x=1;x<=10;x++){
                    
                    peca[x] = new Array();
                    
                    for(y=1;y<=10;y++){
                    
                        peca[x][y] = new Array();
                        peca[x][y]['peca'] = false;         //defino como falso para as que não começam com peça ficarem nulas
                        peca[x][y]['cor'] = false;          //defino como falso para as que não começam com peça ficarem nulas
                     
                    }
                }
                
    
                il = new Array();
                il['preto'] = new Array();
                il['branco'] = new Array();
            
            }
    
    
            
            
            
        //posiciona as pecas pretas no array
            peca[1][1]['peca']="torre";     peca[1][1]['cor']="preto";  peca[1][1]['mov']=0; il['preto']['torre'] = "<img src='Bank-i/torre-preta-removebg-preview.png'>";
            peca[1][2]['peca']="cavalo";    peca[1][2]['cor']="preto";  peca[1][2]['mov']=0; il['preto']['cavalo'] = "<img src='Bank-i/cavalo-preto-removebg-preview.png'>";
            peca[1][3]['peca']="bispo";     peca[1][3]['cor']="preto";  peca[1][3]['mov']=0; il['preto']['bispo'] = "<img src='Bank-i/bispo-preto-removebg-preview.png'>";
            peca[1][4]['peca']="mao";     peca[1][4]['cor']="preto";  peca[1][4]['mov']=0; il['preto']['mao'] = "<img src='Bank-i/conselheiro-preto-removebg-preview.png'>";
            peca[1][5]['peca']="rainha";    peca[1][5]['cor']="preto";  peca[1][5]['mov']=0; il['preto']['rainha'] = "<img src='Bank-i/rainha-preta-removebg-preview.png'>";
            peca[1][6]['peca']="rei";       peca[1][6]['cor']="preto";  peca[1][6]['mov']=0; il['preto']['rei'] = "<img src='Bank-i/rei-preto-removebg-preview.png'>";
            peca[1][7]['peca']="mao";     peca[1][7]['cor']="preto";  peca[1][7]['mov']=0;
            peca[1][8]['peca']="bispo";     peca[1][8]['cor']="preto";  peca[1][8]['mov']=0; 
            peca[1][9]['peca']="cavalo";    peca[1][9]['cor']="preto";  peca[1][9]['mov']=0; 
            peca[1][10]['peca']="torre";     peca[1][10]['cor']="preto";  peca[1][10]['mov']=0; 
    
            peca[2][1]['peca']="peao";      peca[2][1]['cor']="preto";  peca[2][1]['mov']=0; il['preto']['peao'] = "<img src='Bank-i/peao-preto-removebg-preview.png'>";
            peca[2][2]['peca']="peao";      peca[2][2]['cor']="preto";  peca[2][2]['mov']=0;
            peca[2][3]['peca']="elefante";     peca[2][3]['cor']="preto";  peca[2][3]['mov']=0; il['preto']['elefante'] = "<img src='Bank-i/elefante-preto-removebg-preview.png'>";
            peca[2][4]['peca']="peao";      peca[2][4]['cor']="preto";  peca[2][4]['mov']=0;
            peca[2][5]['peca']="peao";      peca[2][5]['cor']="preto";  peca[2][5]['mov']=0;
            peca[2][6]['peca']="peao";      peca[2][6]['cor']="preto";  peca[2][6]['mov']=0;
            peca[2][7]['peca']="peao";      peca[2][7]['cor']="preto";  peca[2][7]['mov']=0;
            peca[2][8]['peca']="elefante";     peca[2][8]['cor']="preto";  peca[2][8]['mov']=0; 
            peca[2][9]['peca']="peao";      peca[2][9]['cor']="preto";  peca[2][9]['mov']=0;
            peca[2][10]['peca']="peao";      peca[2][10]['cor']="preto";  peca[2][10]['mov']=0;   
    
        //posiciona as pecas brancas no array   
            peca[10][1]['peca']="torre";     peca[10][1]['cor']="branco"; peca[10][1]['mov']=0; il['branco']['torre'] = "<img src='Bank-i/torre-branca-removebg-preview.png'>";
            peca[10][2]['peca']="cavalo";    peca[10][2]['cor']="branco"; peca[10][2]['mov']=0; il['branco']['cavalo'] = "<img src='Bank-i/cavalo-branco-removebg-preview.png'>";
            peca[10][3]['peca']="bispo";     peca[10][3]['cor']="branco"; peca[10][3]['mov']=0; il['branco']['bispo'] = "<img src='Bank-i/bispo-branco-removebg-preview.png'>";
            peca[10][4]['peca']="mao";     peca[10][4]['cor']="branco";  peca[10][4]['mov']=0; il['branco']['mao'] = "<img src='Bank-i/conselheiro-branco-removebg-preview.png'>";
            peca[10][5]['peca']="rainha";    peca[10][5]['cor']="branco"; peca[10][5]['mov']=0; il['branco']['rainha'] = "<img src='Bank-i/rainha-branca-removebg-preview.png'>";
            peca[10][6]['peca']="rei";       peca[10][6]['cor']="branco"; peca[10][6]['mov']=0; il['branco']['rei'] = "<img src='Bank-i/rei-branco-removebg-preview.png'>";
            peca[10][7]['peca']="mao";     peca[10][7]['cor']="branco";  peca[10][7]['mov']=0;
            peca[10][8]['peca']="bispo";     peca[10][8]['cor']="branco"; peca[10][8]['mov']=0;
            peca[10][9]['peca']="cavalo";    peca[10][9]['cor']="branco"; peca[10][9]['mov']=0;
            peca[10][10]['peca']="torre";     peca[10][10]['cor']="branco"; peca[10][10]['mov']=0;
    
            peca[9][1]['peca']="peao";      peca[9][1]['cor']="branco"; peca[9][1]['mov']=0; il['branco']['peao'] = "<img src='Bank-i/peao-branco-removebg-preview.png'>";
            peca[9][2]['peca']="peao";      peca[9][2]['cor']="branco"; peca[9][2]['mov']=0;
            peca[9][3]['peca']="elefante";      peca[9][3]['cor']="branco"; peca[9][3]['mov']=0; il['branco']['elefante'] = "<img src='Bank-i/elefante-branco-removebg-preview.png'>";
            peca[9][4]['peca']="peao";      peca[9][4]['cor']="branco"; peca[9][4]['mov']=0;
            peca[9][5]['peca']="peao";      peca[9][5]['cor']="branco"; peca[9][5]['mov']=0;
            peca[9][6]['peca']="peao";      peca[9][6]['cor']="branco"; peca[9][6]['mov']=0;
            peca[9][7]['peca']="peao";      peca[9][7]['cor']="branco"; peca[9][7]['mov']=0;
            peca[9][8]['peca']="elefante";      peca[9][8]['cor']="branco"; peca[9][8]['mov']=0;     
            peca[9][9]['peca']="peao";      peca[9][9]['cor']="branco"; peca[9][9]['mov']=0;
            peca[9][10]['peca']="peao";      peca[9][10]['cor']="branco"; peca[9][10]['mov']=0;
    
        ///aray para movimentar as pecas
            movimenta = new Array();
            
            movimenta['selecionada'] = new Array();
            movimenta['selecionada']['x'] =0;
            movimenta['selecionada']['y'] =0;
            movimenta['selecionada']['peca']="0";
            movimenta['selecionada']['cor']="0";
            
            movimenta['destino'] = new Array();
            movimenta['destino']['x'] =0;
            movimenta['destino']['y'] =0; 
            movimenta['destino']['peca'] ="0";
            movimenta['destino']['cor']="0";
    
        ///aray para os possiveis movimentos
            possiveis = new Array();
    
        }
    
        peca = new Array(11);
            for (var i = 1; i <= 10; i++) {
              peca[i] = new Array(11);
              for (var j = 1; j <= 10; j++) {
                peca[i][j] = new Array();
                peca[i][j]['peca'] = false;
                peca[i][j]['cor'] = false;
              }
            }
    
    
    function possiveis_movimentos(){
            var x,y;
            var c =0; //contador pro array possiveis
            var i; //contador pros for
            x = movimenta['selecionada']['x'];
            y = movimenta['selecionada']['y'];
            var movimentoCavaloRealizado = false;
            document.getElementById('t'+x+y).style.backgroundColor = "#3C9"; //muda cor de fundo
            possiveis[c] = "t"+x+y; c++;
    
    ///////////////////////////////////////////////////////////////////////////////////PEAO////////////////////////////////
        if(peca[x][y]['peca']=='peao'){
            if(peca[x][y]['cor']=="branco"){
    
                    if(!peca[x-1][y]['peca']){
                        possivel(x-1,y);
                    }if(y-1>0 && peca[x-1][y-1]['peca']){
                        possivel(x-1,y-1);                      
                    }
                    if(y+1<11 && peca[x-1][y+1]['peca']){
                        possivel(x-1,y+1);                  
                    }                   
    
                    if(x==9){               
                        if(!peca[x-2][y]['peca'] && !peca[x-1][y]['peca']){
                            possivel(x-2,y);
                        }
                    }
    
            }
            
            
            if(peca[x][y]['cor']=="preto"){
                    
                    if(!peca[x+1][y]['peca']){
                        possivel(x+1,y);
                    }if(y-1>0 && peca[x+1][y-1]['peca']){
                        possivel(x+1,y-1);                      
                    }
                    if(y+1<11 && peca[x+1][y+1]['peca']){
                        possivel(x+1,y+1);                  
                    }                   
    
                    if(x==2){
                    
                        if(!peca[x+2][y]['peca'] && !peca[x+1][y]['peca']){
                            possivel(x+2,y);
                        }
            
                    }
    
            }
        }
    ///////////////////////////////////////////////////////////////////////////////////////FIM PEAO//////////////////////////////
    
    //////////////////////////////////////////////////////////////////////////////////////CAVALO ////////////////////////////////
    
        if(peca[x][y]['peca']=='cavalo'){
            
            possivel(x-1,y-2);
            possivel(x+1,y+2);
            possivel(x+1,y-2);
            possivel(x-1,y+2);
            possivel(x-2,y-1);
            possivel(x+2,y+1);
            possivel(x+2,y-1);
            possivel(x-2,y+1);
            
        }
    //////////////////////////////////////////////////////////////////////////////////////FIM CAVALO ////////////////////////////
    
    //////////////////////////////////////////////////////////////////////////////////////REI ///////////////////////////////////
        if(peca[x][y]['peca']=='rei'){
            possivel(x-1,y);
            possivel(x,y-1);
            possivel(x-1,y-1);
            possivel(x+1,y);
            possivel(x,y+1);
            possivel(x+1,y+1);
            possivel(x-1,y+1);
            possivel(x+1,y-1);
        }
    //////////////////////////////////////////////////////////////////////////////////////FIM REI ////////////////////////////
    
    
    //////////////////////////////////////////////////////////////////////////////////////TORRE ///////////////////////////////////
        if(peca[x][y]['peca']=='torre'){
            
            for(i=1;possivel(x-i,y);i++);
            for(i=1;possivel(x+i,y);i++);
            for(i=1;possivel(x,y-i);i++);
            for(i=1;possivel(x,y+i);i++);
        }
    //////////////////////////////////////////////////////////////////////////////////////FIM TORRE ////////////////////////////
    
    //////////////////////////////////////////////////////////////////////////////////////BISPO ///////////////////////////////////
    if (peca[x][y]['peca'] == 'bispo') {
        for (i = 1; possivel(x - i, y - i); i++);
        for (i = 1; possivel(x + i, y + i); i++);
        for (i = 1; possivel(x - i, y + i); i++);
        for (i = 1; possivel(x + i, y - i); i++);
    }
    
    //////////////////////////////////////////////////////////////////////////////////////FIM BISPO ////////////////////////////
    
    //////////////////////////////////////////////////////////////////////////////////////MÃO ///////////////////////////////////
    if (peca[x][y]['peca'] == 'mao') {
        for (i = 1; i <= 2; i++) {
            // Movimento na diagonal superior esquerda
            if (possivel(x - i, y - i)) {
                if (i === 1 && peca[x - i][y - i]['peca'] !== false) {
                    // Primeira casa ocupada, verificar se é possível pular a peça
                    if (possivel(x - 2, y - 2)) {
                        possiveis[c] = "t" + (x - 2) + (y - 2);
                        c++;
                    }
                } else {
                    possiveis[c] = "t" + (x - i) + (y - i);
                    c++;
                }
            }
    
            // Movimento na diagonal superior direita
            if (possivel(x - i, y + i)) {
                if (i === 1 && peca[x - i][y + i]['peca'] !== false) {
                    // Primeira casa ocupada, verificar se é possível pular a peça
                    if (possivel(x - 2, y + 2)) {
                        possiveis[c] = "t" + (x - 2) + (y + 2);
                        c++;
                    }
                } else {
                    possiveis[c] = "t" + (x - i) + (y + i);
                    c++;
                }
            }
    
            // Movimento na diagonal inferior esquerda
            if (possivel(x + i, y - i)) {
                if (i === 1 && peca[x + i][y - i]['peca'] !== false) {
                    // Primeira casa ocupada, verificar se é possível pular a peça
                    if (possivel(x + 2, y - 2)) {
                        possiveis[c] = "t" + (x + 2) + (y - 2);
                        c++;
                    }
                } else {
                    possiveis[c] = "t" + (x + i) + (y - i);
                    c++;
                }
            }
    
            // Movimento na diagonal inferior direita
            if (possivel(x + i, y + i)) {
                if (i === 1 && peca[x + i][y + i]['peca'] !== false) {
                    // Primeira casa ocupada, verificar se é possível pular a peça
                    if (possivel(x + 2, y + 2)) {
                        possiveis[c] = "t" + (x + 2) + (y + 2);
                        c++;
                    }
                } else {
                    possiveis[c] = "t" + (x + i) + (y + i);
                    c++;
                }
            }
            
        }
    }
    
    //////////////////////////////////////////////////////////////////////////////////////FIM MÃO ////////////////////////////
    
    //////////////////////////////////////////////////////////////////////////////////////ELEFANTE ///////////////////////////////////
    if (peca[x][y]['peca'] == 'elefante') {
    possivel(x-1, y);
    possivel(x, y-1);
    possivel(x-1, y-1);
    possivel(x+1, y);
    possivel(x, y+1);
    possivel(x+1, y+1);
    possivel(x-1, y+1);
    possivel(x+1, y-1);

    // Adicione a capacidade de pular uma casa
    possivel(x-2, y);
    possivel(x, y-2);
    possivel(x+2, y);
    possivel(x, y+2);
}
    
    //////////////////////////////////////////////////////////////////////////////////////FIM ELEFANTE ////////////////////////////
    
    //////////////////////////////////////////////////////////////////////////////////////RAINHA ///////////////////////////////////
        if(peca[x][y]['peca']=='rainha'){
            
            for(i=1;possivel(x-i,y-i);i++);
            for(i=1;possivel(x+i,y+i);i++);
            for(i=1;possivel(x-i,y+i);i++);
            for(i=1;possivel(x+i,y-i);i++);
            for(i=1;possivel(x-i,y);i++);
            for(i=1;possivel(x+i,y);i++);
            for(i=1;possivel(x,y-i);i++);
            for(i=1;possivel(x,y+i);i++);
            
        }
    //////////////////////////////////////////////////////////////////////////////////////FIM RAINHA ////////////////////////////
    
    
    
    function possivel(px,py){
            if(px>0 && px <11 && py>0 && py <11 && peca[px][py]['cor']!= movimenta['selecionada']['cor']){
                document.getElementById('t'+(px)+(py)).style.backgroundColor = "#3C9"; //muda cor de fundo
                possiveis[c] = "t"+(px)+(py); c++;
                
                if(!peca[px][py]['peca']){
                    return true;
                }
            }else{
                return false;
            }
    
        
        }
    
        return c;
    }
    
    function volta_fundo(){
        var cf;
        for(cf=0;cf<possiveis.length;cf++){
            document.getElementById(possiveis[cf]).style.backgroundColor = "";
        }   
    }
    
    function verifica_possivel(x,y,c){
        var pode=0;
        var cp;
        var div = "t"+x+y;
        
        for(cp=1;cp<c;cp++){
            
            if(possiveis[cp]==div){
                pode ++;
            }
            if(pode>0){
                return 1;
            }
        }   
        
    }
    
    function seleciona(x,y){
        
            
            if((movimenta['selecionada']['x']==0 || peca[x][y]['cor'] == movimenta['selecionada']['cor']) && peca[x][y]['cor']==vez){
                if(movimenta['selecionada']['x']!=0){
                    volta_fundo(); //volta a cor de fundo normal
                }
                if(peca[x][y]['peca']){ //se tiver uma peca nessa posição
                    movimenta['selecionada']['x'] = x;  //recebe x selecionado
                    movimenta['selecionada']['y'] = y;  //recebe y selecionado
                    movimenta['selecionada']['peca'] = peca[x][y]['peca']; //recebe a peca selecionada
                    movimenta['selecionada']['cor'] = peca[x][y]['cor'];    //recebe a cor selecionada
                    
                    cont_possiveis = possiveis_movimentos();    
                }
                
            }else if(verifica_possivel(x,y,cont_possiveis)){ //se for segundo clique e a cor da peca destino for diferente da selecionada
                
                if(peca[x][y]['peca']=="rei"){
                    alert(movimenta['selecionada']['cor']+" venceu (:");
                    
                }
                
                //Pra trocar de peça quando o peão chegar do outro lado
                if(movimenta['selecionada']['peca']=='peao' && movimenta['selecionada']['cor']=='branco' && x==1){
                    document.getElementById('escolhebranco').style.display='block'; 
                    document.getElementById('fundo').style.display='block'; 
                    xe=x;ye=y;
                }
                if(movimenta['selecionada']['peca']=='peao' && movimenta['selecionada']['cor']=='preto' && x==10){
                    document.getElementById('escolhepreto').style.display='block';  
                    document.getElementById('fundo').style.display='block';                 
                    xe=x;ye=y;
                }
                
                if(peca[x][y]['cor'] != movimenta['selecionada']['cor']){
                    movimenta['destino']['x'] =x;   //recebe o x do destino(segundo clique)
                    movimenta['destino']['y'] =y;  //recebe y do destino(segundo clique)
                    
                    if(peca[x][y]['peca']){  //se tiver alguma peca nessa posição
                        movimenta['destino']['peca'] = peca[x][y]['peca'];  //destino recebe a peca selecionada
                        movimenta['destino']['cor'] = peca[x][y]['cor'];    //destino recebe a cor selecionada
                    }
                    
                    
                    document.getElementById("t"+movimenta['selecionada']['x']+""+movimenta['selecionada']['y']).innerHTML = ""; //selcionada fica sem imagem
                    document.getElementById("t"+x+""+y).innerHTML = il[movimenta['selecionada']['cor']][movimenta['selecionada']['peca']]; //destino recebe a imagem da peça selecinada
                    peca[x][y]['peca']=movimenta['selecionada']['peca'];    //posicao destino recebe a peca
                    peca[x][y]['cor']=movimenta['selecionada']['cor'];      //posicao destino recebe a cor
                                    
                    peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['peca'] = false;     //peca selecionada recebe 0
                    peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['cor'] = false;      //cor selecionada recebe 0
                        
                    movimenta['selecionada']['x'] =0;   //selecionada x recebe 0 (pra na proxima ver q é o primeiro movimento)
                    movimenta['selecionada']['y'] =0;   //selecionada y recebe 0 (pra na proxima ver q é o primeiro movimento)
                    movimenta['selecionada']['peca']="0";   //selecionada peca recebe 0 (pra na proxima ver q é o primeiro movimento)
                    movimenta['selecionada']['cor']="0";    //selecionada cor recebe 0 (pra na proxima ver q é o primeiro movimento)
                    
                    
                }
    
                volta_fundo(); //volta a cor de fundo normal
                
                if(vez=="branco"){vez="preto";}else{vez="branco";} //troca a vez
    
            }
            
            
    
        
    }
    
        function escolhe(pecae,core){
                peca[xe][ye]['peca']=pecae;
                document.getElementById("t"+xe+""+ye).innerHTML = il[core][pecae];
                document.getElementById('escolhe'+core).style.display='none';
                document.getElementById('fundo').style.display='none';
        }
    
        function escolhecor_incio(cor){
                document.getElementById('escolhecor-inicio').style.display='none';
                document.getElementById('fundo').style.display='none';
                vez = cor; //vez de quem jogar
    
        }