class TrendingView extends HTMLElement {
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

        <section class="trending">
        <h2 class="heading2 center">TRENDING CASES</h2>
        <div class="trending-container">
          <div class="trending-item">
            <div class="item-thumb">
              <img src="assets/trending/01.png" alt="01" />
            </div>
            <div class="item-desc">
              <span>WATER PRESSURE</span>
              <button class="trending-action">PRICE: $1.99 USD</button>
            </div>
          </div>
          <div class="trending-item">
            <div class="item-thumb">
              <img src="assets/trending/06.png" alt="01" />
            </div>
            <div class="item-desc">
              <span>DINKED</span>
              <button class="trending-action">PRICE: $6.99 USD</button>
            </div>
          </div>
          <div class="trending-item">
            <div class="item-thumb">
              <img src="assets/trending/01.png" alt="01" />
            </div>
            <div class="item-desc">
              <span>READY PLAYER TWO</span>
              <button class="trending-action">PRICE: $36.99 USD</button>
            </div>
          </div>
        </div>
      </section>
        `;
  }
}

customElements.define("trending-view", TrendingView);
