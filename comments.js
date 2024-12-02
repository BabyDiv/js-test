const commentList = document.querySelector('.comment-list');
const userComment = document.querySelector('.user-comment');
const commentForm = document.querySelector('.comment-form');
const commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
}
