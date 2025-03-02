const month = new Date().getMonth() + 1;
console.log(month)
const date = new Date().getDate();
console.log(date)
const year = new Date().getFullYear();
console.log(year)

const dateId = document.getElementById('date-container');
dateId.innerHTML =`
<p> i  am </p>
`
console.log(dateId.innerHTML)