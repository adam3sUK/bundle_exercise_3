/**
 * @jest-environment jsdom
 */

// tests/addNewPost.test.js
const addNewPost = require('./addNewPost');


test('displays a post', () => {
  document.body.innerHTML = `<div class="post" id="post-1">
  A first post
</div>
<div class="post" id="post-2">
  A second post
</div>
<div class="post" id="post-3">
  A third post
</div>`

  // given we're calling addNewPost...
  addNewPost('New test post');

  // ...there should now be 4 posts on the page
  expect(document.querySelectorAll('.post').length).toBe(4);
});