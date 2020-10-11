class TitleView extends HTMLElement {
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

        <section class="title-view">
            <div class="title">
            <h1>FARM SKIN</h1>
            <p>DROP IS BETTER THAN FROM GABEN</p>
            </div>
            <div class="title-action">
            <div class="action">
                <div class="action-logo">
                <img src="assets/icons/batle.png" alt="case battle" />
                </div>
                <p>Case Battle</p>
            </div>
            <div class="action">
                <div class="action-logo">
                <img src="assets/icons/contract.png" alt="contract" />
                </div>
                <p>Contract</p>
            </div>
            <div class="action">
                <div class="action-logo">
                <img src="assets/icons/upgrade.png" alt="upgrade" />
                </div>
                <p>Upgrade</p>
            </div>
            <div class="action">
                <div class="action-logo">
                <img src="assets/icons/giveaway.png" alt="giveaway" />
                </div>
                <p>Giveaway</p>
            </div>
            <div class="action">
                <div class="action-logo">
                <img src="assets/icons/bonus.png" alt="daily bonus" />
                </div>
                <p>Daily Bonus</p>
            </div>
            <div class="action">
                <div class="action-logo">
                <img src="assets/icons/partner.png" alt="partner" />
                </div>
                <p>Partner</p>
            </div>
            <div class="action">
                <div class="action-logo">
                <img src="assets/social/steam.png" alt="steam" />
                </div>
                <p>Sign in through STEAM</p>
            </div>
            </div>
        </section>
        `;
  }
}

customElements.define("title-view", TitleView);
