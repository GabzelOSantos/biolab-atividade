export class Footer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }


    connectedCallback(){
        this.shadowRoot.innerHTML = `
         <link rel="stylesheet" href="../css/footer.css">
        <div class="footer">
        <div class="containers">
            <div class="containerLeft">
                <img src="../assets/images/logoMenu.webp" alt="Logo">
                
                <div class="content">
                    <h5>Contatos:</h5>
                    <div class="contacts">
                        <h6>0800 724 6522</h6>
                        <h6>faleconosco@biolabfarma.com.br</h6>
                    </div>
                </div>
            </div>

            <div class="containerRight">
               <a href="https://www.biolabeco.com.br/">Site oficial da Biolab</a>
               <a href="https://www.youtube.com/@biolab_farmaceutica">Site para o Youtube</a>
               <a href="https://br.linkedin.com/company/biolabeco">Site para o Linkedin</a>
               <a href="https://www.instagram.com/biolabfarmaceutica/">Site para o Instagram</a>
               <a href="https://web.facebook.com/biolabfarmaceutica/?locale=pt_BR&_rdc=1&_rdr">Site para o Facebook</a> 
            </div>
        </div>
        <div class="down">
            <p>© 2026 Biolab. Todos os direitos reservados.</p>
        </div>
    </div>
        `;
    }
}

customElements.define('app-footer', Footer);