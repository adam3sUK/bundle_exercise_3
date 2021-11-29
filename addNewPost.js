let addNewPost = (postTitle) => {
  const newDiv = document.createElement('div');
  const newContent = document.createTextNode(postTitle);
  newDiv.className = 'post';
  newDiv.id = `post-${document.querySelectorAll('div').length+1}`
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
}

module.exports = addNewPost;