function isVisible(element) {
  const elementRect = element.getBoundingClientRect();
  let distanceFromPreviousPoint;

  if (window.innerWidth > 1201 && window.innerWidth < 1400) {
    distanceFromPreviousPoint = -600;
  } else if (window.innerWidth > 1001 && window.innerWidth < 1200) {
    distanceFromPreviousPoint = -500;
  } else if (window.innerWidth < 1000) {
    distanceFromPreviousPoint = -200;
  } else {
    distanceFromPreviousPoint = -1000;
  }

  if (window.innerWidth < 1000) {
    if (elementRect.top - window.innerHeight < distanceFromPreviousPoint) {
      return true;
    } else {
      return false;
    }
  } else {
    if (elementRect.left - window.innerWidth < distanceFromPreviousPoint) {
      return true;
    } else {
      return false;
    }
  }
}

function scanDocument() {
  let sectionList = document.querySelectorAll('.hidden');

  sectionList.forEach((section) => {
    if (isVisible(section)) {
      section.classList.remove('hidden');
    }
  });
}

const outerWrapper = document.querySelector('.outer-wrapper');

window.addEventListener('scroll', throttle(scanDocument, 200));

outerWrapper.addEventListener('scroll', throttle(scanDocument, 200));

function throttle(fn, wait) {
  let time = Date.now();

  return () => {
    if (time + wait - Date.now() < 10) {
      fn();
      time = Date.now();
    }
  };
}
