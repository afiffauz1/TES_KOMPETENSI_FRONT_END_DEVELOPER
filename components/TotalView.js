class TotalView extends HTMLElement {
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

        <section class="total-view">
        <div class="item-total">
          <h2 class="gray">TOTAL OPENED</h2>
          <p>65 132 898</p>
        </div>
        <div class="item-total">
          <h2 class="yellow">KNIVES</h2>
          <p>660 435</p>
        </div>
        <div class="item-total">
          <h2 class="red">KOVERT</h2>
          <p>4 635 824</p>
        </div>
        <div class="item-total">
          <h2 class="pink">CLASSFIED</h2>
          <p>4 065 108</p>
        </div>
        <div class="item-total">
          <h2 class="purple">RESTRICTED</h2>
          <p>10 993 771</p>
        </div>
        <div class="item-total">
          <h2 class="blue">MIL-SPEL</h2>
          <p>20 654 335</p>
        </div>
      </section>
        `;
  }
}

customElements.define("total-view", TotalView);
