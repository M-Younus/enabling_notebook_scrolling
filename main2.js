

// window.addEventListener('load', function () {
//     console.log(document.getElementsByClassName('output_stream')[0].clientHeight);
//     var all_divs = document.getElementsByClassName('output_stream');
//     console.log(all_divs);
//     for (var a of all_divs) {
//         if (a.clientHeight > 600) {
//             a.style.height = '400px';
//             a.style.overflow = 'auto';
//         }
//     }
// });


(function() {
    console.log(document.getElementsByClassName('output_stream')[0].clientHeight);
    var all_divs = document.getElementsByClassName('output_stream');
    console.log(all_divs);
    for (var a of all_divs) {
        if (a.clientHeight > 600) {
            a.style.height = '400px';
            a.style.overflow = 'auto';
        }
    }
    
})();