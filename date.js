const weekOfDate = ['Sun' , 'Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat'];
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const day = weekOfDate[new Date().getDay()];

const month = monthsOfYear[new Date().getMonth()];

const date = new Date().getDate().toString().padStart(2 , '0');

const year = new Date().getFullYear();

const dateId = document.getElementById('date-container');
dateId.innerHTML =`
<p> ${day} ,</p>
<h3 class = "font-bold ">${month} ${date} ${year}</h3>
`