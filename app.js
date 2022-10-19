// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
// let edad = parseInt(prompt('Qué edad tienes?'));
// if (edad >= 18) {
//     alert('tienes la edad suficiente para conducir');
// } else {
//     alert('No tienes la edad necesaria para conducir');
// }

// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// let nota

// do {
//     nota = parseInt(prompt('Ingresa una nota del 0 al 10'));
//     if (!isNaN(nota) && nota >= 0 && nota <= 10) {
//         switch (nota) {
//             case 0:
//             case 1:
//             case 2:
//                 alert('Muy deficiente')
//                 break
//             case 3:
//             case 4:
//                 alert('Insuficiente')
//                 break
//             case 5:
//             case 6:
//                 alert('Suficiente')
//                 break
//             case 7:
//                 alert('Bien')
//                 break
//             case 8:
//             case 9:
//                 alert('Notable')
//                 break
//             case 10:
//                 alert('Sobresaliente')
//                 break
//         }
//     } else {
//         alert('La nota ingresada es incorrecta');
//     }
// } while (confirm('Deseas ingresar una nueva nota?'));

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

// let cadena = '';
// do {
//     let texto = prompt('Ingresa una palabra o texto');
//     if (cadena == '') {
//         cadena = texto;
//     } else {
//         cadena = cadena + '-' + texto;
//     }
// } while (confirm('Quieres agregar una palabra o texto?'));
// document.write(cadena);

// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
// let suma = 0;
// let numero = 0;
// do {
//     numero = prompt('Ingresa un numero que quieras sumar');
//     if (!isNaN(numero) && numero !=null) {
//         suma = suma + parseInt(numero);
//     } else {
//         if (numero !=null) {
//             alert(numero + 'no es un numero');
//         }
//     }
// } while (numero !=null);
// document.write(suma);

// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
// let dni = parseInt(prompt("Ingresa tu numero de DNI"));
// let resto;
// let letra = "";
// do {
//   if (!isNaN(dni) && dni != null) {
//     if (dni >= 0 && dni <= 99999999) {
//       resto = dni % 23;
//       console.log(resto);

//       switch (resto) {
//         case 0:
//           letra = "T";
//           break;
//         case 1:
//           letra = "R";
//           break;
//         case 2:
//           letra = "W";
//           break;
//         case 3:
//           letra = "A";
//           break;
//         case 4:
//           letra = "G";
//           break;
//         case 5:
//           letra = "M";
//           break;
//         case 6:
//           letra = "Y";
//           break;
//         case 7:
//           letra = "F";
//           break;
//         case 8:
//           letra = "P";
//           break;
//         case 9:
//           letra = "D";
//           break;
//         case 10:
//           letra = "X";
//           break;
//         case 11:
//           letra = "B";
//           break;
//         case 12:
//           letra = "N";
//           break;
//         case 13:
//           letra = "J";
//           break;
//         case 14:
//           letra = "Z";
//           break;
//         case 15:
//           letra = "S";
//           break;
//         case 16:
//           letra = "Q";
//           break;
//         case 17:
//           letra = "V";
//           break;
//         case 18:
//           letra = "H";
//           break;
//         case 19:
//           letra = "L";
//           break;
//         case 20:
//           letra = "C";
//           break;
//         case 21:
//           letra = "K";
//           break;
//         case 22:
//           letra = "E";
//           break;

//         default:
//           alert('Número erroneo');
//       }
//     }
//     alert('Numero: ' + dni + ', Letra: '+ letra);
//   }
// } while (confirm('Desea continuar?'));

// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

