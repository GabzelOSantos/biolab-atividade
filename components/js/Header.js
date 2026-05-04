export class Header extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }


    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../css/header.css">

        <div class="header">
            <img src="../assets/images/biolab_logo 1.svg" alt="Biolab Logo">
            <h3>Inovação que transforma vidas</h3>
        </div>
        `;
    }
}

customElements.define('app-header', Header);