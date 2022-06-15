/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page){
// Create a variable to select a class 'student-list' and set it to empty string.
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
// loop entire list of students
   for (i= 0; i < list.length; i++){
// Create 2 variables to find the first and last item of the given page.
      let startIndex = page * 9 - 9;
      let endIndex = page * 9;
// Since 1 page can hold 9 items, need to set condition to test for index 0 to 8. 
      if ( i >= startIndex && i < endIndex ){
// Create DOM elements to display students for the given index number.
         let studentDetails = `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">${list[i].registered.date}</span>
         </div>
         </li>
         `;
         studentList.insertAdjacentHTML('beforeend', studentDetails);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/ 

function addPagination(list){
// Create var to specify number of buttons required for the list
   const buttons_num = Math.ceil(list.length/9)
// Create var to select a class 'link-list' and set it to empty string.
   const linklist = document.querySelector('.link-list');
   linklist.innerHTML = '';
// Do a for loop that will create page number button for the list.
   for(i = 1; i <= buttons_num; i++ ){
      linklistHTML = `
      <li>
      <button type="button">${[i]}</button>
      </li>
      `
// Insert DOM element
   linklist.insertAdjacentHTML('beforeend', linklistHTML)
   }  
// Make first button active state.
   const firstButton = document.querySelectorAll('button')[0];
   firstButton.className = 'active';

// change clicked buttons to active state 
   linklist.addEventListener('click', (e) => {
      buttonClicked = e.target;
      if (buttonClicked.tagName === 'BUTTON'){
   // remove active state from current button
         let activeState = document.querySelector('.active');
         activeState.classList.remove('active');
   // add active state to clicked button
         e.target.className = 'active';
   // run the desired page by reading the button's text content.
         showPage(data,e.target.textContent)
      }
   });
}


// Call functions

// 
showPage(data,1);
addPagination(data);
