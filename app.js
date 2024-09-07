function pesquisar(){
    // 1. Selecionando a seção onde os resultados serão exibidos
    let section = document.getElementById("resultado");
    console.log(section); // Loga o elemento HTML selecionado no console
  
let campoPerquisa = document.getElementById("campo-perquisa").value

if (!campoPerquisa){
  section.innerHTML = "<p>Nenhum jogo foi encontrado</p>"
return
}

campoPerquisa = campoPerquisa.toLowerCase()

console.log(campoPerquisa)

    // 2. Iniciando uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo="";
    let descricao="";
    let teg="";


    // 3. Iterando sobre cada item de dados e construindo o HTML
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      teg= dado.teg.toLowerCase()
      if(titulo.includes(campoPerquisa) || descricao.includes(campoPerquisa) || teg.includes(campoPerquisa)){
        resultados += `
        <div class="item-resultado">
          <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}.</p>
          <a href="${dado.link}" target="_blank">Para mais informações</a>
        </div> `;

        
      }
   
      if(!resultados){
     resultados = "<p>Nenhum jogo foi encontrado.</p>"     
       }

    }
  
    // 4. Atribuindo o HTML construído à seção
    section.innerHTML = resultados;
  }


