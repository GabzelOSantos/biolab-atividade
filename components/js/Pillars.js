export class Pillars extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }


    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../css/pillars.css">

        <div class="pillars">
            <h1>Nossos pilares</h1>
            <h3>A Biolab Farmacêutica tem um forte compromisso com<br>
            o desenvolvimento  social e o bem-estar das pessoas.<br> 
            Mantém ativa suas práticas de  responsabilidade<br> 
            social, investindo em projetos que promovem saúde,<br>  
            segurança e desenvolvimento de seus colaboradores,<br> 
            além de iniciativas  que beneficiam a<br> 
            sociedade em geral.</h3>
        </div> 
        `;
    }
}

customElements.define('app-pillars', Pillars);