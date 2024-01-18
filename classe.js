class hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    attack() {
      if (this.tipo === 'mago') {
        this.atack = 'magia';
        console.log(`o ${this.tipo} atacou usando ${this.atack}`);
      } else if (this.tipo === 'guerreiro') {
        this.atack = 'esapada';
        console.log(`o ${this.tipo} atacou usando ${this.atack}`);
      } else if (this.tipo === 'monge') {
        this.atack = 'artes marciais';
        console.log(`o ${this.tipo} atacou usando ${this.atack}`);
      } else if(this.tipo === "ninja") {
        this.atack = "shuriken";
        console.log(`o ${this.tipo} atacou usando ${this.atack}`);
      }else{
        console.log("erro")
      }
    }
  }
  
  let newhero = new hero('harry', '24', 'mago');
  let newhero1 = new hero('guts', '24', 'guerreiro');
  let newhero2 = new hero('john', '24', 'monge');
  let newhero3 = new hero('naruto', '24', 'ninja');
  
  
  console.log(newhero); 
  newhero.attack();
  console.log(newhero1); 
  newhero1.attack();
  console.log(newhero2); 
  newhero2.attack();
  console.log(newhero3); 
  newhero3.attack();
  
  
  
  