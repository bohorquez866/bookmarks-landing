const checkStatus = (selector) => {
  selector.classList.contains("active")
    ? selector.classList.remove("active")
    : selector.classList.add("active");
};

//*navbar menu mobile
const $burgerMenu = document.querySelector(".burger-menu");
const $body = document.querySelector("body");
const $mobileMenu = document.querySelector(".nav-links");
const $logo = document.querySelector(".logo");

if (($burgerMenu, $mobileMenu, $logo)) {
  $burgerMenu.addEventListener("click", () => {
    if ($burgerMenu.classList.contains("active")) {
      $burgerMenu.classList.remove("active");
      $burgerMenu.querySelector("img").src = `./images/icon-hamburger.svg`;
      $logo.querySelector("img").src = `./images/logo-bookmark.svg`;

      $body.style.overflow = "visible";
      $mobileMenu.classList.remove("active");
    } else {
      $burgerMenu.querySelector("img").src = `./images/icon-close.svg`;
      $logo.querySelector("img").src = `./images/logo-bookmark-all-white.svg`;
      $burgerMenu.classList.add("active");
      $mobileMenu.classList.add("active");
      $body.style.overflow = "hidden";
    }
  });
}

//* Features Section
const $featureTabHead = document.querySelector(".tabs-head");
const $featureTabContent = document.querySelector(".tab-content");
const $firstTab = $featureTabHead.querySelector("li span");

if ($featureTabHead && $featureTabContent) {
  $featureTabHead.addEventListener("click", (e) => {
    thisElement = e.target;

    if (thisElement.nodeName === "SPAN") {
      $featureTabHead.querySelectorAll("li span").forEach((el) => {
        el.classList.remove("active");
      });

      checkStatus(thisElement);

      const tabClass = thisElement.classList[0];
      const $tabContent = $featureTabContent.querySelector(`.${tabClass}`);

      $featureTabContent
        .querySelectorAll("li")
        .forEach((el) => el.classList.remove("active"));
      checkStatus($tabContent);
    }
  });

  $firstTab.click();
}

//* FAQ Section

const $faqHeads = document.querySelectorAll(".faqs .faq-head");

if ($faqHeads) {
  $faqHeads.forEach((el) => {
    el.addEventListener("click", (e) => {
      thisElement = e.target;

      $faqHeads.forEach((el) => {
        el.classList.remove("active");
      });

      checkStatus(thisElement);

      //* faq-body
      document.querySelectorAll(".faqs .faq-body").forEach((el) => {
        el.classList.remove("active");
        el.style.maxHeight = "0";
      });

      const $faqContent = thisElement.nextElementSibling;

      if ($faqContent.classList.contains("active")) {
        $faqContent.classList.remove("active");
        $faqContent.style.maxHeight = "0";
      } else {
        $faqContent.classList.add("active");
        $faqContent.style.maxHeight = `${$faqContent.scrollHeight}px`;
      }
    });
  });
}
