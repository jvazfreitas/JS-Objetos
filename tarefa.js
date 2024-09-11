// Definindo a classe Veiculo
class Veiculo {
  constructor(modelo, combustivel) {
    this.modelo = modelo;           // Modelo do veículo
    this.velocidade = 0;            // Velocidade inicial
    this.combustivel = combustivel;  // Quantidade inicial de combustível (em litros)
  }

  // Método para acelerar o veículo
  acelerar(incremento) {
    if (this.combustivel > 0) {
      this.velocidade += incremento;
      this.combustivel -= incremento * 0.1; // Consome combustível proporcionalmente à aceleração
      if (this.combustivel < 0) this.combustivel = 0;
      this.exibirInformacoes();
    } else {
      console.log('Combustível insuficiente!');
    }
  }

  // Método para frear o veículo
  frear(decremento) {
    this.velocidade -= decremento;
    if (this.velocidade < 0) this.velocidade = 0;
    this.exibirInformacoes();
  }

  // Método para abastecer o veículo
  abastecer(quantidade) {
    this.combustivel += quantidade;
    this.exibirInformacoes();
  }

  // Método para exibir as informações do veículo
  exibirInformacoes() {
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Velocidade: ${this.velocidade} km/h`);
    console.log(`Combustível: ${this.combustivel.toFixed(2)} litros`);
  }
}

// Criar uma instância do veículo
const meuVeiculo = new Veiculo('Fusca', 20); // Modelo 'Fusca' com 20 litros de combustível

// Invocar métodos para simular ações do veículo
console.log('Acelerando...');
meuVeiculo.acelerar(30); // Aumenta a velocidade e consome combustível

console.log('Freando...');
meuVeiculo.frear(15); // Diminui a velocidade

console.log('Abastecendo...');
meuVeiculo.abastecer(0); // Aumenta o nível de combustível

console.log('Acelerando novamente...');
meuVeiculo.acelerar(20); // Aumenta a velocidade novamente
