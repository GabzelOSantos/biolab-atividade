export class Navbar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }


    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/css/navbar.css">

        <div class="navbar">
            <img src="/assets/images/logoMenu.webp" alt="Logo Menu" class="logoImg">
        </div>
        <main></main>
        `;
    }
}

customElements.define('app-navbar', Navbar);