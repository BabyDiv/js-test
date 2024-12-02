const commentList = document.querySelector('.comment-list');
const commentForm = document.querySelector('.comment-form');
let charCounter = document.querySelector('.char-counter');
const commentField = document.querySelector('.comment-field');
let submitButton = document.querySelector('.submit-button');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
  charCounter.textContent = 0;
}

commentField.oninput = function() {
  charCounter.textContent = commentField.value.length;

  if (commentField.value.length > 142) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
  }
}
