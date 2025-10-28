function entrar() {
    // console.log("vamos ver se funciona");
    // let email = "teste@teste";
    // console.log(email);
    // alert('Entrando...');
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    // Estrutura Condicional
    if (email == 'vinigiopaulo@gmail.com' && senha == '123456') {
     Swal.fire({
        title: "Acesso permitido!",
        text: "Seja bem-vindo a nossa plataforma!",
        icon: "success"
    });
    window.location = 'index.html';
 } else {
        Swal.fire({
  title: "Acesso negado!",
  text: "Usuário e/ou Senha Inválidos!",
  icon: "error"
});
    }

//     console.log(email, senha)
 }