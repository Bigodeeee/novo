document.addEventListener('DOMContentLoaded',function(){

    const botaoDeAcessibilidade=document.getElementById('botaoDeAcessibilidade');
    const opçoesDeAcessibilidade=document.getElementById('opçoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click',function(){
    botaoDeAcessibilidade.classList.toggle('rotaçao-botao');
    opçoesDeAcessibilidade.classList.toggle('apresenta-lista');
    
    
    const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')==='true';
    botaoDeAcessibilidade.setAttribute('this.ariaExpanded',!botaoSelecionado)

    })

    const aumentaFonteBotao=document.getElementById('aumentar-fonte');
    const diminuiFonteBotao=document.getElementById('diminuir-fonte');

    const alternaContraste=document.getElementById('alternaContraste')
    let tamanhoAtualFonte=1;
    aumentaFonteBotao.addEventListener('click',function(){
    tamanhoAtualFonte+=0.1;
    document.body.style.fontSize='${tamanhoAtualFonte}rem'

    })
    diminuiFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte-=0.1;
        document.body.style.fontSize='$(tamanhoAtualFonte)rem'

    })

    alternaContraste.addEventListener('click'.function {
        document.body.classList.toggle('alto-contraste')
    })

})
scrollReveal().Reveal(#inicio,{delay:500});
scrollReveal().Reveal(#tropicalia,{delay:500});
scrollReveal().Reveal(#galeria,{delay:500});
scrollReveal().Reveal(#contato,{delay:500});