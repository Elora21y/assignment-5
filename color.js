// const completeBtn = document.getElementsByClassName('complete-btn');

// for (const btn of completeBtn) {
//     btn.addEventListener('click', function () {

//         alert('Board Update Successfully');

//         let task = document.getElementById('task');
//         let convertedTask = parseInt(task.innerText);
//         let total = document.getElementById('total');
//         let convertedTotal = parseInt(total.innerText);

//         if (convertedTask > 0) {
//             task.innerText = (convertedTask - 1).toString().padStart(2, "0");
//             total.innerText = convertedTotal + 1;
//         }
//         else {
//             alert('All task assigned');
//         }

//         // disable complete button
//         btn.disabled = true;

//         // set clear history time
//         let hour = new Date().getHours();
//         let min = new Date().getMinutes();
//         let sec = new Date().getSeconds();
//         let ampm, hours;
//         if (hour >= 12) {
//             ampm = 'PM';
//             hour === 12 ? hours = 12 : hours = hour % 12;
//         }
//         else {
//             ampm = 'AM';
//             hour === 0 ? hours = 12 : hours = hour;
//         }

//         min = min.toString().padStart(2, "0");
//         sec = sec.toString().padStart(2, "0");
//         const time = `${hours}:${min}:${sec} ${ampm}`;

//         const historyContainer = document.getElementById('history-container');
//         const card = btn.closest('.card-container')
//         const title = card.querySelector('.btn-title').innerText;
            
//             const p = document.createElement('p');
//             p.innerHTML = `
//             <p class='text-gray-600 bg-[#F4F7FF] p-3 text-sm rounded-lg mt-3'>You have Complete The Task ${title} at ${time}</p>
//             `
//             historyContainer.appendChild(p)
        
        
//         document.getElementById('clear-history-btn').addEventListener('click', function () {
//             historyContainer.innerText = '';
//         })

//         if(convertedTask === 1){
//             alert('Congrats!!! You have completed all the current task.')
//         }

//     })

   
// }

document.getElementById('color-btn').addEventListener('click' , function(){

})
