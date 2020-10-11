class FollowUs extends HTMLElement {
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

        <section class="follow-us">
            <h2>Buy cases with awesome CS:GO skins!</h2>
            <h3>
            Follow us in our social networks, and keep up to date with the latest
            news and special offers.
            </h3>
            <p>
            Do you need new, cool skins? Choose and Buy a case that you like! We
            have expensive skins and some exclusive cases that you will not find
            in the game. Weekly updates, giveaways, technical support and a lot of
            payment options with G2A Pay.
            </p>

            <button class="login-steam">Sign in through STEAM</button>

            <h2>65 268 923</h2>
            <p>OPENED CASES</p>
        </section>
        `;
  }
}

customElements.define("follow-us", FollowUs);
