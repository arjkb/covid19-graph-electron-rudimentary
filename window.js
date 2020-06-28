function drawChart(data, elementId, country)  {
    // set up data for the chart
    let rows = [];

    // for(let key in data) {
    //     console.log(key);
    // }
    // data.forEach(element => {
    //     rows.push([new Date(element.Date), element.Confirmed]);
    // });

    for (let i = 1; i < data.length; i++) {
        const totToday = data[i].Confirmed;
        const totYesterday = data[i-1].Confirmed;

        const casesToday = totToday - totYesterday;

        // console.log(totToday);
        // console.log(totYesterday);
        // console.log(casesToday);

        rows.push([new Date(data[i].Date), casesToday]);
    }


    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({type:'date', id: 'Date'})
    dataTable.addColumn({type:'number', id: 'Cases'})

    dataTable.addRows(rows);
    // dataTable.addRows([
    //     [new Date(2020, 4, 10), 100],
    //     [new Date(2020, 4, 11), 200],
    //     [new Date(2020, 4, 12), 300],
    //     [new Date(2020, 4, 13), 400],
    //     [new Date(2020, 4, 14), 500]
    // ]);

    const chart = new google.visualization.Calendar(document.getElementById(elementId));

    const options = {
        title: 'COVID-19 Cases ' + country,
        height: 350,
    };

    chart.draw(dataTable, options);
}

window.addEventListener('load', (event) => {

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const url = 'https://api.covid19api.com/country/india?from=2020-06-01T00:00:00Z&to=2020-07-01T00:00:00Z';
    // const url = 'https://www.example.com';

    google.charts.load('current', {packages:['calendar']});

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(results => {
            // console.log(results[0]);
            // document.getElementById('res').textContent = results;
            // this.data = results;
            drawChart(results, 'cal_basic_in', 'India');
        })
        .catch(error => console.log('erroR', error));

    fetch('https://api.covid19api.com/country/germany?from=2020-06-01T00:00:00Z&to=2020-07-01T00:00:00Z', requestOptions)
        .then(response => response.json())
        .then(results => {
            // console.log(results[0]);
            // document.getElementById('res').textContent = results;
            // this.data = results;
            drawChart(results, 'cal_basic_de', 'Germany');
        })
        .catch(error => console.log('erroR', error));

    // console.log(data);
});


// window.addEventListener('load', (event) => {
//     let app = new Vue({
//         el: '#app',
//         data: {
//             days: null
//         },

//         created: function () {

//             const requestOptions = {
//                 method: 'GET',
//                 redirect: 'follow'
//             };
        
//             const url = 'https://api.covid19api.com/country/india?from=2020-06-01T00:00:00Z&to=2020-07-01T00:00:00Z';

//             fetch(url, requestOptions)
//                 .then(response => response.json())
//                 .then(results => {
//                     console.log(results[0]);
//                     this.days = results;
//                 })
//                 .catch(error => console.log('error', error));

//             // foo();
//         },

//         filters: {
//             properDate: function (value) {
//                 if (!value) return ''
//                 return new Date(value.toString()).toLocaleDateString('default', { 
//                     weekday: 'short',
//                     month: 'short',
//                     year: 'numeric',
//                     day: 'numeric'
//                 });
//             }
//         }
//     });
// })