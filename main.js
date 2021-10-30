// DOM stuff

const btnAdd = document.querySelector('#btn-add');
const inputTextUser = document.querySelector('#comment-from-user');
const parentForComments = document.getElementById('show-comments');


// counters

let i = 0;



// Functions

function displayComments(){

}

btnAdd.addEventListener('click', function addBtn(){
  const createParagraf = document.createElement('p');
  const createProfilePic = document.createElement('img');
  const createEmailH3 = document.createElement('h3');
  const createDelelteBtn = document.createElement('button');
  const createDivForFlex = document.createElement('div');
  const createDivforAllItems = document.createElement('div');
  const createDivforImg = document.createElement('div');

  // div to contain all elements
  createDivforAllItems.classList.add('all-items');
  createDivforAllItems.setAttribute('id', 'item' + i);
  parentForComments.append(createDivforAllItems);

  // div to img 
  createDivforImg.classList.add('div-img');
  createDivforAllItems.append(createDivforImg);


  // profile img adding
  createProfilePic.src = 'https://www.sanoslim.ro/wp-content/uploads/2018/05/MaleAvatar.png';
  createDivforImg.append(createProfilePic);

  // div for flex to append email text and delete btn
  createDivForFlex.classList.add('div-h2-paragraf-btn');
  createDivforAllItems.append(createDivForFlex);

  // email adding with H3
  createEmailH3.innerHTML = 'blabla@gmail.com';
  createEmailH3.classList.add('h3-email');
  createDivForFlex.append(createEmailH3);

  // comments adding
  createParagraf.innerText = inputTextUser.value;
  createParagraf.classList.add('p-comment');
  createDivForFlex.append(createParagraf);

  // delete btn adding 
  createDelelteBtn.innerHTML = 'Delete';
  createDelelteBtn.classList.add('delete-btn');
  createDelelteBtn.setAttribute('id', i);
  // createDelelteBtn.setAttribute('onclick', 'deleteComment()');
  createDivForFlex.append(createDelelteBtn);


  createDelelteBtn.addEventListener('click', function(){
    let key  = this.getAttribute('id');
    document.getElementById('item' + key).remove();
  })

  i++
})

