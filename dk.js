// // Get the canvas element
// var ctx = document.getElementById('myChart').getContext('2d');

// // Define the data for the chart
// var data = {
//   labels: ['Web-Design',
//    'JavaScript',
//     'Python', 'HTML', 'CSS'],
//   datasets: [{
//     data: [80, 50, 40, 80, 60],
//     backgroundColor: [
//       '#77037B',
//       '#FFD93D',
//       '#0002A1',
//       '#FC2947',
//       '#05BFDB'
//     ]
    
//   }]
// };

// // Create the pie chart
// var myPieChart = new Chart(ctx, {
//   type: 'doughnut',
//   data: data,
//   options:{
//     title:{
//         display: true,
        
//     }
//   }
// });



function addClass(){
var btu = document.querySelector("button");
  btu.classList.add("button");
  setTimeout(function(){
    btu.classList.remove("button");
  },200);
}

function aClass(){
  var btu = document.querySelector("a");
    btu.classList.add("a");
  }
