(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // addNewPost.js
  var require_addNewPost = __commonJS({
    "addNewPost.js"(exports, module) {
      var addNewPost2 = (postTitle) => {
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(postTitle);
        newDiv.className = "Post";
        newDiv.id = `Post-${document.querySelectorAll("div").length + 1}`;
        newDiv.appendChild(newContent);
        document.body.appendChild(newDiv);
      };
      module.exports = addNewPost2;
    }
  });

  // index.js
  var addNewPost = require_addNewPost();
  addNewPost("A fifth post");
})();
