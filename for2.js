let nomeNave = prompt("Digite o nome da sua nave");
let novaNave = "";
let letraMudar = prompt("Digite a letra que deseja mudar");
let porLetra = prompt("Por qual letra deseja substituir");

for (let i = 0; i < nomeNave.length; i++) {
  if (nomeNave[i] == letraMudar) {
    novaNave += porLetra;
  } else {
    novaNave += nomeNave[i];
  }
}
alert(novaNave);
