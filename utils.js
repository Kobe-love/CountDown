/*obtain Dom element by the id value */
function myDom(id) {
  return document.getElementById(id);
}

/*set value to dom lable */
function setInnerText(element, content) {
  // whether judge the current browser supports innerText, for seeming compatible. 
  if (typeof element.innerText === "string") {
    element.innerText = content;   // IE8-
  } else {
    element.textContent = content; // IE8+  and others main stream browser
  }
}

/*to obatin the interval object is about the two different date object. */
function getInterval(start, end) {
  // two date objects is to subtract, obtain the value is microsecond.
  let interval = end - start;
  // obatin diff days, hours, minutes and seconds
  let day, hour, minute, second;
  // change second from micorsecond
  interval /= 1000;
  day = parseInt(interval / 60 / 60 / 24);
  hour = parseInt((interval / 60 / 60) % 24);
  minute = parseInt((interval / 60) % 60);
  second = parseInt(interval % 60);

  return {
    day: day,
    hour: hour,
    minute: minute,
    second: second,
  };
}
