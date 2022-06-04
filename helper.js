  // the second to last answer - https://stackoverflow.com/questions/7558709/simple-javascript-search-url-for-string-do-something

 function handler( url, textToMatch, elementToChange, styleToAssign ){

      if (url.search(textToMatch) != -1){

          // Referenced from profile.js in phoenixprime.io
          var path = location.pathname;
          console.log(path); // /bluedot-redesign/one/casestudies.php
          var page = location.pathname.split('/')[3]; //localhost
          console.log(page); // casestudies.php 

          // https://stackoverflow.com/questions/4758103/last-segment-of-url-with-javascript
          var url = location.pathname;
          var array = url.split('/');
          var lastsegment = array[array.length-1];
          console.log(lastsegment); // casestudies.php


          // https://www.w3schools.com/howto/howto_js_remove_class.asp
          var activemenu = document.getElementById("myDIV");
          activemenu.classList.remove("active__menu");

          // var name = "casestudies.php";


          // find element through href value javascript
          // https://bobbyhadz.com/blog/javascript-get-element-by-href-attribute#:~:text=Use%20the%20querySelector()%20method,selector%20exists%20in%20the%20DOM.
          // ✅ Get first element by href attribute
          // const casestudies = document.querySelector('[href="contact.php"]');
          // const casestudies = document.querySelector("[href=" + lastsegment + "]");
          // Uncaught DOMException: Failed to execute 'querySelector' on 'Document': '[href=contact.php]' is not a valid selector. at handler

          // https://stackoverflow.com/questions/37081721/use-variables-in-document-queryselector
          const casestudies = document.querySelector("[href=" + CSS.escape(lastsegment) + "]");

          console.log(casestudies); // 👉️ a
          casestudies.classList.add("active__menu");

          // https://www.delftstack.com/howto/javascript/change-image-src-javascript/#:~:text=Change%20the%20Source%20of%20an,image%20using%20the%20src%20property.
          document.getElementById("logo").src="assets/images/bluedot logo - complex.png";

          // https://stackoverflow.com/questions/18466365/javascript-changing-background-color
          for(var i=0 ; i<len; i++){
              elementToChange[i].style.color = styleToAssign;
          }

      }

  }

  // https://stackoverflow.com/questions/4758103/last-segment-of-url-with-javascript
  var pathname = location.pathname;
  var pathname_array = pathname.split('/');
  var pathname_array_lastsegment = pathname_array[pathname_array.length-1];
  console.log(pathname_array_lastsegment); // casestudies.php

  var url = window.location.href; //window.location.href in your case
  var element = document.getElementsByClassName('nav__link');
  // https://stackoverflow.com/questions/18466365/javascript-changing-background-color
  var len =  element.length;

  handler(url, pathname_array_lastsegment, element, 'black');
