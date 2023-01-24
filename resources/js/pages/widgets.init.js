/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Widgets init js
*/

// get colors array from the string
function getChartColorsArray(chartId) {
    if (document.getElementById(chartId) !== null) {
        var colors = document.getElementById(chartId).getAttribute("data-colors");
        if (colors) {
            colors = JSON.parse(colors);
            return colors.map(function (value) {
                var newValue = value.replace(" ", "");
                if (newValue.indexOf(",") === -1) {
                    var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
                    if (color) return color;
                    else return newValue;;
                } else {
                    var val = value.split(',');
                    if (val.length == 2) {
                        var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                        return rgbaColor;
                    } else {
                        return newValue;
                    }
                }
            });
        } else {
            console.warn('data-colors Attribute not found on:', chartId);
        }
    }
}

// world map with line & markers
var vectorMapWorldLineColors = getChartColorsArray("users-by-country");
if (vectorMapWorldLineColors)
    var worldlinemap = new jsVectorMap({
        map: "world_merc",
        selector: "#users-by-country",
        zoomOnScroll: true,
        zoomButtons: true,
        markers: [{
                name: "Greenland",
                coords: [72, -42]
            },
            {
                name: "Canada",
                coords: [56.1304, -106.3468]
            },
            {
                name: "Brazil",
                coords: [-14.2350, -51.9253]
            },
            {
                name: "Egypt",
                coords: [26.8206, 30.8025]
            },
            {
                name: "Russia",
                coords: [61, 105]
            },
            {
                name: "China",
                coords: [35.8617, 104.1954]
            },
            {
                name: "United States",
                coords: [37.0902, -95.7129]
            },
            {
                name: "Norway",
                coords: [60.472024, 8.468946]
            },
            {
                name: "Ukraine",
                coords: [48.379433, 31.16558]
            },
        ],
        lines: [{
                from: "Canada",
                to: "Egypt"
            },
            {
                from: "Russia",
                to: "Egypt"
            },
            {
                from: "Greenland",
                to: "Egypt"
            },
            {
                from: "Brazil",
                to: "Egypt"
            },
            {
                from: "United States",
                to: "Egypt"
            },
            {
                from: "China",
                to: "Egypt"
            },
            {
                from: "Norway",
                to: "Egypt"
            },
            {
                from: "Ukraine",
                to: "Egypt"
            },
        ],
        regionStyle: {
            initial: {
                stroke: "#9599ad",
                strokeWidth: 0.25,
                fill: vectorMapWorldLineColors,
                fillOpacity: 1,
            },
        },
        lineStyle: {
            animation: true,
            strokeDasharray: "6 3 6",
        },
    })

// Countries charts
var barchartCountriesColors = getChartColorsArray("countries_charts");
if (barchartCountriesColors) {
    var options = {
        series: [{
            data: [1010, 1640, 490, 1255, 1050, 689, 800, 420, 1085, 589],
            name: 'Sessions',
        }],
        chart: {
            type: 'bar',
            height: 436,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
                distributed: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        colors: barchartCountriesColors,
        dataLabels: {
            enabled: true,
            offsetX: 32,
            style: {
                fontSize: '12px',
                fontWeight: 400,
                colors: ['#adb5bd']
            }
        },

        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        xaxis: {
            categories: ['India', 'United States', 'China', 'Indonesia', 'Russia', 'Bangladesh', 'Canada', 'Brazil', 'Vietnam', 'UK'],
        },
    };

    var chart = new ApexCharts(document.querySelector("#countries_charts"), options);
    chart.render();
}

// Audiences metrics column charts
var chartAudienceColumnChartsColors = getChartColorsArray("audiences_metrics_charts");
if (chartAudienceColumnChartsColors) {
    var columnoptions = {
        series: [{
            name: 'Last Year',
            data: [25.3, 12.5, 20.2, 18.5, 40.4, 25.4, 15.8, 22.3, 19.2, 25.3, 12.5, 20.2]
        }, {
            name: 'Current Year',
            data: [36.2, 22.4, 38.2, 30.5, 26.4, 30.4, 20.2, 29.6, 10.9, 36.2, 22.4, 38.2]
        }],
        chart: {
            type: 'bar',
            height: 306,
            stacked: true,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                borderRadius: 6,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            fontWeight: 400,
            fontSize: '8px',
            offsetX: 0,
            offsetY: 0,
            markers: {
                width: 9,
                height: 9,
                radius: 4,
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        grid: {
            show: false,
        },
        colors: chartAudienceColumnChartsColors,
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: true,
                strokeDashArray: 1,
                height: 1,
                width: '100%',
                offsetX: 0,
                offsetY: 0
            },
        },
        yaxis: {
            show: false
        },
        fill: {
            opacity: 1
        }
    };
    var chart = new ApexCharts(document.querySelector("#audiences_metrics_charts"), columnoptions);
    chart.render();
}

// Sales by Locations
var vectorMapUsaColors = getChartColorsArray("sales-by-locations");
if (vectorMapUsaColors)
    var usmap = new jsVectorMap({
        map: 'us_merc_en',
        selector: "#sales-by-locations",
        regionStyle: {
            initial: {
                stroke: "#9599ad",
                strokeWidth: 0.25,
                fill: vectorMapUsaColors,
                fillOpacity: 1,
            },
        },
        zoomOnScroll: false,
        zoomButtons: false,
    })

// Total Portfolio Donut Charts
var donutchartportfolioColors = getChartColorsArray("portfolio_donut_charts");
if (donutchartportfolioColors) {
    var options = {
        series: [19405, 40552, 15824, 30635],
        labels: ["Bitcoin", "Ethereum", "Litecoin", "Dash"],
        chart: {
            type: "donut",
            height: 210,
        },

        plotOptions: {
            pie: {
                size: 100,
                offsetX: 0,
                offsetY: 0,
                donut: {
                    size: "70%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '18px',
                            offsetY: -5,
                        },
                        value: {
                            show: true,
                            fontSize: '20px',
                            color: '#343a40',
                            fontWeight: 500,
                            offsetY: 5,
                            formatter: function (val) {
                                return "$" + val
                            }
                        },
                        total: {
                            show: true,
                            fontSize: '13px',
                            label: 'Total value',
                            color: '#9599ad',
                            fontWeight: 500,
                            formatter: function (w) {
                                return "$" + w.globals.seriesTotals.reduce(function (a, b) {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value;
                }
            }
        },
        stroke: {
            lineCap: "round",
            width: 2
        },
        colors: donutchartportfolioColors,
    };

    var chart = new ApexCharts(document.querySelector("#portfolio_donut_charts"), options);
    chart.render();
}

//   Color Range

// Heatmap Charts Generatedata
function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

var chartHeatMapColors = getChartColorsArray("color_heatmap");
if (chartHeatMapColors) {
    var options = {
        series: [{
                name: 'Jan',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Feb',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Mar',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Apr',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'May',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Jun',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Jul',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Aug',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Sep',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            }
        ],
        chart: {
            height: 310,
            type: 'heatmap',
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false,
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                            from: -30,
                            to: 5,
                            name: 'Youtube',
                            color: chartHeatMapColors[0]
                        },
                        {
                            from: 6,
                            to: 20,
                            name: 'Meta',
                            color: chartHeatMapColors[1]
                        },
                        {
                            from: 21,
                            to: 45,
                            name: 'Google',
                            color: chartHeatMapColors[2]
                        },
                        {
                            from: 46,
                            to: 55,
                            name: 'Medium',
                            color: chartHeatMapColors[3]
                        },
                        {
                            from: 36,
                            to: 40,
                            name: 'Other',
                            color: chartHeatMapColors[4]
                        }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1
        },
        title: {
            style: {
                fontWeight: 500,
            },
        },
    };

    var chart = new ApexCharts(document.querySelector("#color_heatmap"), options);
    chart.render();
}


// results_sparkline_charts
var areachartbitcoinColors = getChartColorsArray("results_sparkline_charts");
if (areachartbitcoinColors) {
    var options = {
        series: [{
            name: "Results",
            data: [0, 68, 35, 90, 99],
        },],
        chart: {
            width: 140,
            type: "area",
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 1.5,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
            },
        },
        colors: areachartbitcoinColors,
    };
    var chart = new ApexCharts(document.querySelector("#results_sparkline_charts"), options);
    chart.render();
}

// results_sparkline_charts
var areachartbitcoinColors = getChartColorsArray("results_sparkline_charts2");
if (areachartbitcoinColors) {
    var options = {
        series: [{
            name: "Results",
            data: [0, 98, 85, 90, 67],
        },],
        chart: {
            width: 140,
            type: "area",
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 1.5,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
            },
        },
        colors: areachartbitcoinColors,
    };
    var chart = new ApexCharts(document.querySelector("#results_sparkline_charts2"), options);
    chart.render();
}

// results_sparkline_charts
var areachartbitcoinColors = getChartColorsArray("results_sparkline_charts3");
if (areachartbitcoinColors) {
    var options = {
        series: [{
            name: "Results",
            data: [0, 65, 103, 75, 120],
        },],
        chart: {
            width: 140,
            type: "area",
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 1.5,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
            },
        },
        colors: areachartbitcoinColors,
    };
    var chart = new ApexCharts(document.querySelector("#results_sparkline_charts3"), options);
    chart.render();
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// custom credit card widget
document.addEventListener("DOMContentLoaded", function (e) {
    var cardNumInput = document.getElementById("card-num-input");
    cardNumElem = document.getElementById("card-num-elem");

    var cardHolderInput = document.getElementById("card-holder-input"),
        cardHolderElem = document.getElementById("card-holder-elem");

    var expiryMonthInput = document.getElementById("expiry-month-input"),
        expiryMonthElem = document.getElementById("expiry-month-elem");

    var expiryYearInput = document.getElementById("expiry-year-input"),
        expiryYearElem = document.getElementById("expiry-year-elem");

    var cvcInput = document.getElementById("cvc-input"),
        cvcElem = document.getElementById("cvc-elem");

    var cardForm = document.getElementById("custom-card-form");

    cardNumInput.onkeydown = function (e) {
        var key = e.keyCode || e.charCode;

        var is_digit = key >= 48 && key <= 57 || key >= 96 && key <= 105;
        var is_delete = key == 8 || key == 46;

        if (is_digit || is_delete) {
            var text = e.target.value;
            var len = text.length;

            if (is_digit && (len == 4 || len == 9 || len == 14)) cardNumInput.value = text + " ";
        } else return false;
    };


    cardNumInput.onkeyup = function (e) {
        var key = e.keyCode || e.charCode;

        var is_digit = key >= 48 && key <= 57 || key >= 96 && key <= 105;
        var is_delete = key == 8 || key == 46;

        if (is_digit || is_delete) {
            var text = e.target.value;
            var len = text.length;
            var digits = "XXXX XXXX XXXX XXXX".split('');
            // if (is_digit && (len == 4 || len == 9 || len == 14)) cardNumInput.value = text + " ";

            if (is_digit && (len == 4 || len == 9 || len == 14)) digits[len] = " ";

            for (var i = 0; i < len; i++) {
                digits[i] = text.charAt(i);
            } cardNumElem.innerText = digits.join('');

        } else return false;
    };

    cardHolderInput.onkeyup = function (e) {
        cardHolderElem.innerText = e.target.value;
    };

    expiryMonthInput.onchange = function (e) {
        if (!e.target.value) expiryMonthElem.innerText = "00";

        expiryMonthElem.innerText = e.target.value;
    };

    expiryYearInput.onchange = function (e) {
        if (!e.target.value) expiryYearElem.innerText = "0000";
        expiryYearElem.innerText = e.target.value;
    };

    cvcInput.onkeyup = function (e) {
        var text = e.target.value;
        var digits = ['_', '_', '_'];

        for (var i = 0; i < text.length; i++) {
            digits[i] = text.charAt(i);
        } cvcElem.innerText = digits.join('');
    };

    cardForm.onsubmit = function (e) {
        e.preventDefault();
    };
});


// card js plugin
var card = new Card({
    form: document.querySelector('#card-form-elem'),
    container: '.card-wrapper',
    formSelectors: {
        numberInput: 'input#card-number-input',
        expiryInput: 'input#card-expiry-input',
        cvcInput: 'input#card-cvc-input',
        nameInput: 'input#card-name-input'
    },
    placeholders: {
        number: '•••• •••• •••• ••••',
        name: 'Full Name',
        expiry: '••/••',
        cvc: '•••'
    },
    masks: {
        cardNumber: '•' // optional - mask card number
    },
});


// candidate-list

Array.from(document.querySelectorAll("#candidate-list li")).forEach(function (item) {
    item.querySelector("a").addEventListener("click", function () {
        var candidateName = item.querySelector(".candidate-name").innerHTML;
        var candidatePosition = item.querySelector(".candidate-position").innerHTML;
        var candidateImg = item.querySelector(".candidate-img").src

        document.getElementById("candidate-name").innerHTML = candidateName;
        document.getElementById("candidate-position").innerHTML = candidatePosition;
        document.getElementById("candidate-img").src = candidateImg;
    })
});


window.addEventListener("load", () => {
    var searchInput = document.getElementById("searchList"), // search box
        candidateList = document.querySelectorAll("#candidate-list li"); // all list items

    searchInput.onkeyup = () => {
        let search = searchInput.value.toLowerCase();

        for (let i of candidateList) {
            let item = i.querySelector(".candidate-name").innerHTML.toLowerCase();
            if (item.indexOf(search) == -1) { i.classList.add("d-none"); }
            else { i.classList.remove("d-none"); }
        }
    };
});


// notification widget
document.getElementById("confirm-btn").addEventListener("click", function () {
    if (document.querySelector('input[name=listGroupRadioGrid]:checked')) {
        document.getElementById("notification-overlay").style.visibility = "visible";
        document.getElementById("notification-overlay").style.opacity = "1";

        var checkedElem = document.querySelector('input[name=listGroupRadioGrid]:checked').parentElement;
        var payamount = checkedElem.querySelector(".pay-amount").innerHTML
        document.querySelector("#notification-overlay .success-pay").innerHTML = payamount
    } else {
        document.getElementById("notification-warn").classList.remove("d-none");
        setTimeout(() => document.getElementById("notification-warn").classList.add("d-none"), 2000);
    }
});

document.getElementById("back-btn").addEventListener("click", function () {
    document.getElementById("notification-overlay").style.visibility = "hidden";
    document.getElementById("notification-overlay").style.opacity = "0";
});