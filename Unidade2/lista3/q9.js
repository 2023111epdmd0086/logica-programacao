// Elabore um programa para obter o nome de uma pessoa e a seguir forneça o sobrenome do nome informado. Por exemplo para o nome: Omero Francisco Bertol, o programa deverá fornecer como resultado: Bertol

let nome = prompt('Digite seu nome completo');

nome = nome.split(' ');

let sobrenome = nome[(nome.length-1)];

console.log('Sobrenome: '+sobrenome);