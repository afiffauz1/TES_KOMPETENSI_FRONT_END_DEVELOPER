class HeaderView extends HTMLElement {
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

    <header>
        <div class="header-view">
            <section class="language">

                <p>Choose Languange:</p>
                
                <div class="dropdown">

                    <button id="btnSelectLanguage" class="btnSelectLanguage">
                        <span>
                            EN
                        </span>
                        <div>
                            <img src="assets/flags/en.png" alt="English" />
                        </div>
                    </button>

                    <div id="languageDropdown" class="language-content">

                        <div class="lan-item">
                            <span>EN</span>
                            <div class="flags">
                                <img src="assets/flags/en.png" alt="English" />
                            </div>
                        </div>

                        <div class="lan-item">
                            <span>IN</span>
                            <div class="flags">
                                <img src="assets/flags/in.png" alt="Indonesia" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="social">
                <p>Join us</p>
                <div class="social-content">
                <div class="social-item">
                    <div class="social-logo">
                        <img src="assets/social/facebook.png" alt="Facebook" />
                    </div>
                    <div class="social-logo">
                        <img src="assets/social/twitter.png" alt="Twitter" />
                    </div>
                    <div class="social-logo">
                        <img src="assets/social/reddit.png" alt="Reddit" />
                    </div>
                    <div class="social-logo">
                        <img src="assets/social/steam.png" alt="Steam" />
                    </div>
                </div>
                </div>
            </section>

            <section class="share">
                <button class="share-btn">
                    <div class="btn-logo">
                        <img src="assets/social/facebook.png" alt="Facebook" />
                    </div>
                    <span>Share</span>
                </button>
                <button class="share-btn">
                    <div class="btn-logo">
                        <img src="assets/social/twitter.png" alt="Twitter" />
                    </div>
                    <span>Tweet</span>
                </button>
            </section>
        </div>
    </header>
      `;

    this.toggleBtnLanguage();
  }

  toggleBtnLanguage() {
    const btnLanguage = this.shadow.getElementById("btnSelectLanguage");
    const languageContent = this.shadow.getElementById("languageDropdown");
    const languageItem = this.shadow.querySelectorAll(".lan-item");

    btnLanguage.addEventListener("click", function () {
      languageContent.classList.toggle("show");
    });

    languageItem.forEach((item) => {
      item.addEventListener("click", function () {
        languageContent.classList.remove("show");
      });
    });
  }
}

customElements.define("header-view", HeaderView);
