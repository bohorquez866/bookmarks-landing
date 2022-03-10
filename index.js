const removeAll = (els, callback) => {
  els.forEach((el) => {
    el.classList.remove("active");
    callback ? callback(el) : null;
  });
};

const checkStatus = (selector, hasClass = null, hasNoClass = null) => {
  if (selector.classList.contains("active")) {
    selector.classList.remove("active");
    hasClass ? hasClass() : null;
  } else {
    selector.classList.add("active");
    hasNoClass ? hasNoClass() : null;
  }
};

const clickFirst = (el) => {
  el ? el.click() : console.assert(el, "No element found");
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
      const tabClass = thisElement.classList[0];
      const $tabContent = $featureTabContent.querySelector(`.${tabClass}`);

      removeAll($featureTabHead.querySelectorAll("li span"));
      checkStatus(thisElement);
      removeAll($featureTabContent.querySelectorAll("li"));
      checkStatus($tabContent);
    }
  });

  clickFirst($firstTab);
}

//* FAQ Section

const $faqHeads = document.querySelectorAll(".faqs .faq-head");

if ($faqHeads) {
  $faqHeads.forEach((el) => {
    el.addEventListener("click", (e) => {
      thisElement = e.target;
      const $faqBody = document.querySelectorAll(".faqs .faq-body");
      const $faqContent = thisElement.nextElementSibling;

      removeAll($faqHeads);
      checkStatus(thisElement);
      removeAll($faqBody, (el) => (el.style.maxHeight = "0"));

      checkStatus(
        $faqContent,
        () => ($faqContent.style.maxHeight = "0"),
        () => ($faqContent.style.maxHeight = `${$faqContent.scrollHeight}px`)
      );

      checkStatus($faqContent);
    });
  });
}
