class Player{
    constructor(){
        this.indice = 0;
        this.posicaoX = 0;
        this.posicaoY = 0;
        this.nome = '';
        this.score = 0;
        this.fuel = 160;
    }
    addPlayer(){
        //checa se é o carro 1
        if(this.indice == 1){
            //CARRO 1: à esquerda
            this.posicaoX = width/2 - 100;
        }
        else{
            //CARRO 2: à direita
            this.posicaoX = width/2 + 100;
        }
        //escreve no banco de dados as informações
        //do player.
        database.ref("players/player"+this.indice).set({
            nome:this.nome, 
            posX:this.posicaoX, 
            posY:this.posicaoY,
            score:this.score,
            fuel:this.fuel
        })

    }
    


    
    getDistance(){
        database.ref("players/player" + this.indice).on("value", data=>{
            var data = data.val();
            this.posicaoX = data.posX;
            this.posicaoY = data.posY;
        })
    }


    //atualiza o campo no banco de dados
    updateCount(numero) {
        database.ref("/").update({
            playerCount:numero
        })
    }

    //lê do banco de dados e copia
    getCount(){
        database.ref("playerCount").on("value", function(data){
            //toda vez que tiver uma alteração, isso será lido
            playerCount = data.val();
        })
    }
    
    update(){
        database.ref("players/player"+this.indice).update({
            posX:this.posicaoX, 
            posY:this.posicaoY, 
            score:this.score, 
            fuel:this.fuel
        })
    }
}