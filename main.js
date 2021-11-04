// DOM stuff

const btnAdd = document.querySelector('#btn-add');
const inputTextUser = document.querySelector('#comment-from-user');
const parentForComments = document.getElementById('show-comments');


// counters

let i = 0;



// Functions

btnAdd.addEventListener('click', addBtn)


function addBtn(){

  // Control Empty input
  if(validateInput(inputTextUser.value) === false){
    alert('Empty comment!!!')
    return;
  }


  const createParagraph = document.createElement('p');
  const createProfilePic = document.createElement('img');
  const createEmailH3 = document.createElement('h3');
  const createDeleteBtn = document.createElement('button');
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
  createDivForFlex.classList.add('div-h2-paragraph-btn');
  createDivforAllItems.append(createDivForFlex);

  // email adding with H3
  createEmailH3.innerHTML = 'blabla@gmail.com';
  createEmailH3.classList.add('h3-email');
  createDivForFlex.append(createEmailH3);

  // comments adding
  createParagraph.innerText = inputTextUser.value;
  createParagraph.classList.add('p-comment');
  createDivForFlex.append(createParagraph);

  // delete btn adding 
  createDeleteBtn.innerHTML = 'Delete';
  createDeleteBtn.classList.add('delete-btn');
  createDeleteBtn.setAttribute('id', i);
  createDivForFlex.append(createDeleteBtn);


  createDeleteBtn.addEventListener('click', function(){
    let key  = this.getAttribute('id');
    document.getElementById('item' + key).remove();
    i--;
    if(i == 0){
      parentForComments.style.visibility = 'hidden';
    }
  })

  i++;

  // Control visibility of div parent
  if(i > 0){
    parentForComments.style.visibility = 'visible';
  }

  // Clear input
  inputTextUser.value = '';
}


function validateInput(userInput) {
  if(userInput === '') {
    return false
  }
  else {
    return true
  }
}
