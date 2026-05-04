const testimonials = [
    {
        id: 0,
        stars: 5,
        description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione nam ipsam quisquam unde adipisci reprehenderit ipsum reiciendis 
        est similique corrupti.
        `,
        name: "Person Name",
        position: "Position"
    },
    {
        id: 1,
        stars: 5,
        description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione nam ipsam quisquam unde adipisci reprehenderit ipsum reiciendis 
        est similique corrupti.
        `,
        name: "Person Name",
        position: "Position"
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