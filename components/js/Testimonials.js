const testimonials = [
    {
        id: 0,
        stars: 5,
        description: `
        Gosto bastante de trabalhar nessa empresa, amo como eles tratam os funcionários!
        `,
        name: "Sirlei de O.S.",
        position: "Faxineira;"
    },
    {
        id: 1,
        stars: 5,
        description: `
        A Biolab é uma maravilha! Eles ajudaram muito no tratamento da minha saúde!
        `,
        name: "Elias Jesus",
        position: "Segurança"
    }
    
]

export class Testimonials extends HTMLElement{    
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../css/testimonials.css">

        <div class="testimonials">
        <div class="title">
            <h1>Avaliações</h1>
            <h3>avaliações relacionadas a biolab</h3>
        </div>
        <div class="item">
        ${testimonials.map(item => `
            <div class="card" key=${item.id}>
                <div class="description">
                    <div class="stars">
                    ${'<img src="../assets/images/star.svg" alt="Estrela">'.repeat(item.stars)}
                    </div>
                    <div class="descriptionText">
                        <h3>${item.description}</h3>
                    </div>
                </div>

                <div class="person">
                    <img src="../assets/images/placeholders/placeholder.jpeg" alt="Foto">
                    <div class="personText">
                        <h1>${item.name}</h1>
                        <h3>${item.position}</h3>
                    </div>
                </div>
            </div>
            `)}
        </div>
        </div>
        `;
    }
}

customElements.define('app-testimonials', Testimonials);