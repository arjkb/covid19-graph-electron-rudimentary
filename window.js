function drawChart(data, elementId, country)  {
    // set up data for the chart
    let rows = [];

    for (let i = 1; i < data.length; i++) {
        const totToday = data[i].Confirmed;
        const totYesterday = data[i-1].Confirmed;
        const casesToday = totToday - totYesterday;

        rows.push([new Date(data[i].Date), casesToday]);
    }

    // set up chart
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({type:'date', id: 'Date'})
    dataTable.addColumn({type:'number', id: 'Cases'})
    dataTable.addRows(rows);

    const chart = new google.visualization.Calendar(document.getElementById(elementId));

    chart.draw(dataTable, {
        title: 'COVID-19 Cases ' + country,
        height: 350,
    });
}

window.addEventListener('load', (event) => {

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const url = 'https://api.covid19api.com/country/india?from=2020-06-01T00:00:00Z&to=2020-07-01T00:00:00Z';
    // const url = 'https://www.example.com';

    google.charts.load('current', {packages:['calendar']});

    const sources = [
        {
            country: 'India',
            url: 'https://api.covid19api.com/country/india?from=2020-06-01T00:00:00Z&to=2020-07-01T00:00:00Z',
            elementId: 'cal_basic_in',
        },
        {
            country: 'Germany',
            url: 'https://api.covid19api.com/country/germany?from=2020-06-01T00:00:00Z&to=2020-07-01T00:00:00Z',
            elementId: 'cal_basic_de',
        }
    ]

    sources.forEach(element => {
        console.log(element.country)

        fetch(element.url, requestOptions)
            .then(response => response.json())
            .then(results => {
                // console.log(results[0]);
                // document.getElementById('res').textContent = results;
                // this.data = results;
                drawChart(results, element.elementId, element.country);
            })
            .catch(error => console.log('erroR', error));
    });
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