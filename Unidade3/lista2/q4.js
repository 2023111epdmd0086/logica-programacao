// Dona Lesma é esportista e aventureira e definiu como objetivo deste verão alcançar o topo do muro do jardim em que vive. A cada dia, valente e metodicamente ela sobe exatamente uma certa distância (sempre a mesma a cada dia). Mas a cada noite enquanto dorme Dona Lesma escorrega para baixo uma outra distância (sempre a mesma a cada noite) ... Dadas a altura do muro, a distância que ela sobe a cada dia e a distância que ela desce a cada noite, ajude Dona Lesma a calcular quantos dias ela levará para chegar ao topo do muro. altura = 10000 subida = 100 descida = 50

// Definição das variáveis
const altura = 10000; // Altura total do muro
const subida = 100; // Distância que ela sobe a cada dia
const descida = 50; // Distância que ela desce a cada noite

// Cálculo do número de dias necessários para alcançar o topo do muro
const numeroDias = Math.ceil(altura / (subida - descida)); // Arredondando pra cima

// Exibição do resultado
console.log(`Dona Lesma vai levar ${numeroDias} dias para chegar no topo do muro.`);
