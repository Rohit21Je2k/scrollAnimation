window.onload = () => {
  showAllDots();
};

window.onresize = () => {
  if (window.innerWidth < 950) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
};

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  center: true,
  items: 1,
  stagePadding: 0,
});

const tween = new TimelineLite();
tween.add([
  TweenLite.fromTo(
    ".transrgwht",
    2,
    { "stroke-dasharray": "0 1000" },
    { "stroke-dasharray": "816 1000" }
  ),
]);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".slide",
  duration: 1500,
  triggerHook: 0,
  offset: 0,
})
  .setTween(tween)
  .setPin(".slide")
  .addTo(controller);

function whiteRing() {
  const targetNode = document.querySelector("#Opaque_Ring");

  const config = { attributes: true, childList: false, subtree: false };

  const callback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes") {
        const baseWidth = 132;
        const width = Number(targetNode.style.strokeDasharray.split(",")[0]);

        if (width > 809) {
          showDot(6);
          showpage1(6);
          showPage2(7);
          showpage3(6);
          break;
        } else {
          hideDot(6);
        }

        if (width > baseWidth * 5) {
          showDot(5);
          showpage1(5);
          showPage2(6);
          showpage3(5);
          break;
        } else {
          hideDot(5);
        }

        if (width > baseWidth * 4) {
          showDot(4);
          showpage1(4);
          showPage2(5);
          showpage3(4);
          break;
        } else {
          hideDot(4);
        }

        if (width > baseWidth * 3) {
          showDot(3);
          showpage1(3);
          showPage2(4);
          showpage3(3);
          break;
        } else {
          hideDot(3);
        }

        if (width > baseWidth * 2) {
          showDot(2);
          showpage1(2);
          showPage2(3);
          showpage3(2);
          break;
        } else {
          hideDot(2);
        }

        if (width > baseWidth * 1) {
          showDot(1);
          showpage1(1);
          showPage2(2);
          showpage3(1);
          break;
        } else {
          hideDot(1);
        }

        if (width > baseWidth * 0) {
          showpage1(0);
          showPage2(1);
          showpage3(0);
          break;
        }
      }
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(targetNode, config);
}

whiteRing();

function showDot(number) {
  const ring = document.querySelector(".dotsstro" + number);
  const circle = document.querySelector(".dotsfill" + number);
  if (!ring.classList.contains("opacity-1")) {
    ring.classList.add("opacity-1");
  }
  if (!circle.classList.contains("circle-fill")) {
    circle.classList.add("circle-fill");
  }
}

function hideDot(number) {
  const ring = document.querySelector(".dotsstro" + number);
  const circle = document.querySelector(".dotsfill" + number);
  if (ring.classList.contains("opacity-1")) {
    ring.classList.remove("opacity-1");
  }
  if (circle.classList.contains("circle-fill")) {
    circle.classList.remove("circle-fill");
  }
}

function showpage1(num) {
  const page = document.querySelector(".slide-1");
  const ring = document.querySelector("#transring");
  if (num === 6) {
    page.style.background = "rgb(13,140,50)";
    ring.style.background = "rgb(13,140,50)";
  }

  if (num === 5) {
    page.style.background = "rgb(3,37,140)";
    ring.style.background = "rgb(3,37,140)";
  }

  if (num === 4) {
    page.style.background = "rgb(18, 43, 206)";
    ring.style.background = "rgb(18, 43, 206)";
  }

  if (num === 3) {
    page.style.background = "rgb(9, 17, 70)";
    ring.style.background = "rgb(9, 17, 70)";
  }

  if (num === 2) {
    page.style.background = "rgb(6, 13, 44)";
    ring.style.background = "rgb(6, 13, 44)";
  }

  if (num === 1) {
    page.style.background = "rgb(18, 43, 206)";
    ring.style.background = "rgb(18, 43, 206)";
  }

  if (num === 0) {
    page.style.background = "rebeccapurple";
    ring.style.background = "rebeccapurple";
  }
}

function showPage2(num) {
  const block = document.querySelector(".slide-2 .block");

  block.classList.remove("block");
  block.classList.add("none");

  const page = document.querySelector(".slide2-page" + num);
  page.classList.remove("none");
  page.classList.add("block");
}

function showpage3(num) {
  if (num === 0) {
    const img = document.querySelector(".slide3-page1-img");
    if (img.classList.contains("none")) {
      img.classList.remove("none");
    }
  } else {
    const img = document.querySelector(".slide3-page1-img");
    if (!img.classList.contains("none")) {
      img.classList.add("none");
    }
  }

  if (num === 6) {
    const img = document.querySelector(".slide3-page7-img");
    if (img.classList.contains("none")) {
      img.classList.remove("none");
    }
  } else {
    const img = document.querySelector(".slide3-page7-img");
    if (!img.classList.contains("none")) {
      img.classList.add("none");
    }
  }

  showSlide3Btn(num);

  const insideRing1 = document.querySelector(".inside-ring-1 > div");
  insideRing1.style.top = -31 * (num - 1) + "px";

  const insideRing2 = document.querySelector(".inside-ring-2 > div");
  insideRing2.style.top = -71 * num + "px";

  const insideRing3 = document.querySelector(".inside-ring-3 > div");
  insideRing3.style.top = -31 * num + "px";

  const title = document.querySelector(".slide3-title > div");
  title.style.bottom = -80 * num + "px";

  const line1 = document.querySelector(".line-1 > div");
  line1.style.top = -24 * num + "px";

  const line2 = document.querySelector(".line-2 > div");
  line2.style.top = -24 * num + "px";

  const line3 = document.querySelector(".line-3 > div");
  line3.style.top = -24 * num + "px";
}

function showSlide3Btn(num) {
  const actBtn = document.querySelector(".slide3-btns > .block");
  actBtn.classList.add("none");
  actBtn.classList.remove("block");

  if (actBtn.classList.contains("none")) {
    const btn = document.querySelector(".slide3-btn-" + num);
    btn.classList.remove("none");
    btn.classList.add("block");
  }
}

function showAllDots() {
  const targetNode = document.querySelector("#Opaque_Ring");
  const baseWidth = 132;
  const width = Number(targetNode.style.strokeDasharray.split(",")[0]);

  if (width > 809) {
    for (let i = 1; i < 7; i += 1) {
      showDot(i);
    }
    return;
  }

  if (width > baseWidth * 5) {
    for (let i = 1; i < 6; i += 1) {
      showDot(i);
    }
    return;
  }

  if (width > baseWidth * 4) {
    for (let i = 1; i < 5; i += 1) {
      showDot(i);
    }
    return;
  }

  if (width > baseWidth * 3) {
    for (let i = 1; i < 4; i += 1) {
      showDot(i);
    }
    return;
  }

  if (width > baseWidth * 2) {
    showDot(1);
    showDot(2);
    return;
  }

  if (width > baseWidth * 1) {
    showDot(1);
  }
}
