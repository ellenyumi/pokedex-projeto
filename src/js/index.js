/*
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1- listagem
2- cartao pokemon

precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela

vamos precisar trablhar com um evento de clique feito pelo usuariona listagem de pokemon

-remover a classe aberto só do cartao que esta aberto
- ao clicar em pokemon da listagem pegamos o id do pokemon  pra saber qual cartao mostrar
-remover a classe ativa que marca o pokemon selecionado
-adicionar a classe ativo no item da lista selecionado
*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const PokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNaListagem.classList.add('ativo')
    })
})