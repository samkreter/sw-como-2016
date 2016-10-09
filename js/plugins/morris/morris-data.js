// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666
        }, {
            period: '2010 Q2',
            iphone: 2778
        }, {
            period: '2010 Q3',
            iphone: 4912
        }, {
            period: '2010 Q4',
            iphone: 3767
        }, {
            period: '2011 Q1',
            iphone: 6810
        }, {
            period: '2011 Q2',
            iphone: 5670
        }, {
            period: '2011 Q3',
            iphone: 4820
        }, {
            period: '2011 Q4',
            iphone: 15073
        }, {
            period: '2012 Q1',
            iphone: 10687
        }, {
            period: '2012 Q2',
            iphone: 8432
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart-good1',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{

          d: '2016-9-01',
          visits: 500
      }, {
          d: '2016-9-02',
          visits: 450
      }, {
          d: '2016-9-03',
          visits: 521
      }, {
          d: '2016-9-04',
          visits: 611
      }, {
          d: '2016-9-05',
          visits: 475
      }, {
          d: '2016-9-06',
          visits: 310
      }, {
          d: '2016-9-07',
          visits: 345
      }, {
          d: '2016-9-08',
          visits: 332
      }, {
          d: '2016-9-09',
          visits: 423
      }, {
          d: '2016-9-10',
          visits: 356
      }, {
          d: '2016-9-11',
          visits: 487
      }, {
          d: '2016-9-12',
          visits: 512
      }, {
          d: '2016-9-13',
          visits: 543
      }, {
          d: '2016-9-14',
          visits: 567
      }, {
          d: '2016-9-15',
          visits: 497
      }, {
          d: '2016-9-16',
          visits: 512
      }, {
          d: '2016-9-17',
          visits: 652
      }, {
          d: '2016-9-18',
          visits: 659
      }, {
          d: '2016-9-19',
          visits: 689
      }, {
          d: '2016-9-20',
          visits: 601
      }, {
          d: '2016-9-21',
          visits: 510
      }, {
          d: '2016-9-22',
          visits: 501
      }, {
          d: '2016-9-23',
          visits: 556
      }, {
          d: '2016-9-24',
          visits: 652
      }, {
          d: '2016-9-25',
          visits: 605
      }, {
          d: '2016-9-26',
          visits: 578
      }, {
          d: '2016-9-27',
          visits: 685
      }, {
          d: '2016-9-28',
          visits: 627
      }, {
          d: '2016-9-29',
          visits: 729
      }, {
          d: '2016-9-30',
          visits: 794
      }, {
          d: '2016-9-31',
          visits: 836
      }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        goals: [450],
        goalStrokeWidth: 3,
        goalLineColors: ['blue'],
        hideHover: 'always',
        xLabelFormat: function (x) {
            var tmp = x.toDateString().split(" ");
            return tmp[1] + " " + tmp[2];
        },
        yLabelFormat: function(y) { return ''; },
        lineColors:['green','red','green'],
        resize:true,
        smooth: false,
        resize: true
    });

// Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart-good2',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
          d: '2016-09-01',
          visits: 802
      }, {
          d: '2016-09-02',
          visits: 783
      }, {
          d: '2016-09-03',
          visits: 820
      }, {
          d: '2016-09-04',
          visits: 839
      }, {
          d: '2016-09-05',
          visits: 792
      }, {
          d: '2016-09-06',
          visits: 859
      }, {
          d: '2016-09-07',
          visits: 790
      }, {
          d: '2016-09-08',
          visits: 1680
      }, {
          d: '2016-09-09',
          visits: 1592
      }, {
          d: '2016-09-10',
          visits: 1420
      }, {
          d: '2016-09-11',
          visits: 882
      }, {
          d: '2016-09-12',
          visits: 889
      }, {
          d: '2016-09-13',
          visits: 819
      }, {
          d: '2016-09-14',
          visits: 849
      }, {
          d: '2016-09-15',
          visits: 870
      }, {
          d: '2016-09-16',
          visits: 1063
      }, {
          d: '2016-09-17',
          visits: 1192
      }, {
          d: '2016-09-18',
          visits: 1224
      }, {
          d: '2016-09-19',
          visits: 1329
      }, {
          d: '2016-09-20',
          visits: 1329
      }, {
          d: '2016-09-21',
          visits: 1239
      }, {
          d: '2016-09-22',
          visits: 1190
      }, {
          d: '2016-09-23',
          visits: 1312
      }, {
          d: '2016-09-24',
          visits: 1293
      }, {
          d: '2016-09-25',
          visits: 1283
      }, {
          d: '2016-09-26',
          visits: 1248
      }, {
          d: '2016-09-27',
          visits: 1323
      }, {
          d: '2016-09-28',
          visits: 1390
      }, {
          d: '2016-09-29',
          visits: 1420
      }, {
          d: '2016-09-30',
          visits: 1529
      }, {
          d: '2016-09-31',
          visits: 1892
      }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        goals: [900],
        goalStrokeWidth: 3,
        hideHover: 'always',
        xLabelFormat: function (x) {
            var tmp = x.toDateString().split(" ");
            return tmp[1] + " " + tmp[2];
        },
        yLabelFormat: function(y) { return ''; },
        lineColors:['green','red','green'],
        resize:true,
        smooth: false,
        resize: true
    });


// Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart-good3',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
        d: '2016-09-01',
        visits: 521
    }, {
        d: '2016-09-02',
        visits: 475
    }, {
        d: '2016-09-03',
        visits: 512
    }, {
        d: '2016-09-04',
        visits: 495
    }, {
        d: '2016-09-05',
        visits: 575
    }, {
        d: '2016-09-06',
        visits: 415
    }, {
        d: '2016-09-07',
        visits: 456
    }, {
        d: '2016-09-08',
        visits: 495
    }, {
        d: '2016-09-09',
        visits: 486
    }, {
        d: '2016-09-10',
        visits: 520
    }, {
        d: '2016-09-11',
        visits: 530
    }, {
        d: '2016-09-12',
        visits: 540
    }, {
        d: '2016-09-13',
        visits: 550
    }, {
        d: '2016-09-14',
        visits: 523
    }, {
        d: '2016-09-15',
        visits: 545
    }, {
        d: '2016-09-16',
        visits: 512
    }, {
        d: '2016-09-17',
        visits: 567
    }, {
        d: '2016-09-18',
        visits: 597
    }, {
        d: '2016-09-19',
        visits: 612
    }, {
        d: '2016-09-20',
        visits: 560
    }, {
        d: '2016-09-21',
        visits: 622
    }, {
        d: '2016-09-22',
        visits: 634
    }, {
        d: '2016-09-23',
        visits: 650
    }, {
        d: '2016-09-24',
        visits: 620
    }, {
        d: '2016-09-25',
        visits: 654
    }, {
        d: '2016-09-26',
        visits: 630
    }, {
        d: '2016-09-27',
        visits: 680
    }, {
        d: '2016-09-28',
        visits: 660
    }, {
        d: '2016-09-29',
        visits: 701
    }, {
        d: '2016-09-30',
        visits: 712
    }, {
        d: '2016-09-31',
        visits: 705
    }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        goals: [450],
        goalStrokeWidth: 3,
        hideHover: 'always',
        xLabelFormat: function (x) {
            var tmp = x.toDateString().split(" ");
            return tmp[1] + " " + tmp[2];
        },
        yLabelFormat: function(y) { return ''; },
        lineColors:['green','red','green'],
        resize:true,
        smooth: false,
        resize: true
    });




    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart-bad1',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{

          d: '2016-9-01',
          visits: -500
      }, {
          d: '2016-9-02',
          visits: -450
      }, {
          d: '2016-9-03',
          visits: -521
      }, {
          d: '2016-9-04',
          visits: -611
      }, {
          d: '2016-9-05',
          visits: -475
      }, {
          d: '2016-9-06',
          visits: -310
      }, {
          d: '2016-9-07',
          visits: -345
      }, {
          d: '2016-9-08',
          visits: -332
      }, {
          d: '2016-9-09',
          visits: -423
      }, {
          d: '2016-9-10',
          visits: -356
      }, {
          d: '2016-9-11',
          visits: -487
      }, {
          d: '2016-9-12',
          visits: -512
      }, {
          d: '2016-9-13',
          visits: -543
      }, {
          d: '2016-9-14',
          visits: -567
      }, {
          d: '2016-9-15',
          visits: -497
      }, {
          d: '2016-9-16',
          visits: -512
      }, {
          d: '2016-9-17',
          visits: -652
      }, {
          d: '2016-9-18',
          visits: -659
      }, {
          d: '2016-9-19',
          visits: -689
      }, {
          d: '2016-9-20',
          visits: -601
      }, {
          d: '2016-9-21',
          visits: -510
      }, {
          d: '2016-9-22',
          visits: -501
      }, {
          d: '2016-9-23',
          visits: -556
      }, {
          d: '2016-9-24',
          visits: -652
      }, {
          d: '2016-9-25',
          visits: -605
      }, {
          d: '2016-9-26',
          visits: -578
      }, {
          d: '2016-9-27',
          visits: -685
      }, {
          d: '2016-9-28',
          visits: -627
      }, {
          d: '2016-9-29',
          visits: -729
      }, {
          d: '2016-9-30',
          visits: -794
      }, {
          d: '2016-9-31',
          visits: -836
      }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        lineColors: ['red'],
        yLabelFormat: function(y) { return ''; },
        goals:[-500],
        goalStrokeWidth: 3,
        goalLineColors: ['blue'],
        hideHover: 'always',
        xLabelFormat: function (x) {
            var tmp = x.toDateString().split(" ");
            return tmp[1] + " " + tmp[2];
        },
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            device: 'iPhone',
            geekbench: 136
        }, {
            device: 'iPhone 3G',
            geekbench: 137
        }, {
            device: 'iPhone 3GS',
            geekbench: 275
        }, {
            device: 'iPhone 4',
            geekbench: 380
        }, {
            device: 'iPhone 4S',
            geekbench: 655
        }, {
            device: 'iPhone 5',
            geekbench: 1571
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
