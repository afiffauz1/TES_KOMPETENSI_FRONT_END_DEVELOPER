class RecentItems extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `

        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="styles/style.css" />

        <h2 class="center heading2">RECENT ITEMS</h2>
        <section class="recent-items">
            <div class="items">
                <div class="item">
                    <img src="assets/trending/01.png" alt="01" />
                </div>
                <div class="item">
                    <img src="assets/trending/02.png" alt="02" />
                </div>
                <div class="item">
                    <img src="assets/trending/03.png" alt="03" />
                </div>
                <div class="item">
                    <img src="assets/trending/04.png" alt="04" />
                </div>
                <div class="item">
                    <img src="assets/trending/05.png" alt="05" />
                </div>
                <div class="item">
                    <img src="assets/trending/06.png" alt="06" />
                </div>
                <div class="item">
                    <img src="assets/trending/07.png" alt="07" />
                </div>
                <div class="item">
                    <img src="assets/trending/08.png" alt="08" />
                </div>
                <div class="item">
                    <img src="assets/trending/01.png" alt="01" />
                </div>
                <div class="item">
                    <img src="assets/trending/02.png" alt="02" />
                </div>
                <div class="item">
                    <img src="assets/trending/03.png" alt="03" />
                </div>
                <div class="item">
                    <img src="assets/trending/04.png" alt="04" />
                </div>
                <div class="item">
                    <img src="assets/trending/05.png" alt="05" />
                </div>
                <div class="item">
                    <img src="assets/trending/06.png" alt="06" />
                </div>
                <div class="item">
                    <img src="assets/trending/07.png" alt="07" />
                </div>
                <div class="item">
                    <img src="assets/trending/08.png" alt="08" />
                </div>
            </div>
            </section>
        `;
  }
}

customElements.define("recent-items", RecentItems);
