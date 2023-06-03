// Data retrieved from https://netmarketshare.com/
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '#0b0706'
    },
    title: {
        text: '<img src="../img/logo/Logo.svg" alt=""  />',
        useHTML: true,
        align: 'center',
        verticalAlign: 'middle',
        y: 20
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: 0,
            endAngle: 360,
            center: ['50%', '50%'],
            size: '100%',
            colors: ['#bef3c0', '#ac94f1', '#fff0ca', '#f9cf64', '#f38fbf']

        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 40],
            ['Edge', 35],
            ['Firefox', 10],
            ['Safari', 10],
            ['Internet Explorer', 5],
           
        ]
    }]


});
