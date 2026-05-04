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
                    
            <button aria-haspopup="true" aria-expanded="false">
            <div class="navButton">
                <p>Navegar</p><img src="/assets/images/chevronDown.svg" alt="" class="navButtonImg">
            </div>
                    
            <ul>
                <li>Início</li>
                <li>Pilares</li>
                <li>Depoimentos</li>
            </ul>
            </button>
        </div>
        <main></main>
        `;
    }
}

customElements.define('app-navbar', Navbar);