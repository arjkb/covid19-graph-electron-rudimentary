function foo(data)  {
    alert('ha!' + data);
}

window.addEventListener('load', (event) => {

    data = null;

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const url = 'https://api.covid19api.com/country/india?from=2020-06-01T00:00:00Z&to=2020-07-01T00:00:00Z';

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(results => {
            // console.log(results[0]);
            document.getElementById('res').textContent = results;
            // this.data = results;
            foo(results[0]);
        })
        .catch(error => console.log('error', error));

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