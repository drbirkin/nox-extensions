  Apex.grid = {
    padding: {
      right: 0,
      left: 0
    }
  };
  
  Apex.dataLabels = {
    enabled: false
  };
  
  var randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };
  
 
  var sparklineData = [
    47,
    45,
    54,
    38,
    56,
    24,
    65,
    31,
    37,
    39,
    62,
    51,
    35,
    41,
    35,
    27,
    93,
    53,
    61,
    27,
    54,
    43,
    19,
    46
  ];
  
  
  var spark1 = {
    chart: {
      id: "sparkline1",
      group: "sparklines",
      type: "area",
      height: 200,
      width: "100%",
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: "smooth"
    },
    fill: {
      opacity: 0.3,
    },
    series: [
      {
        name: "Spent:",
        data: randomizeArray(sparklineData)
      }
    ],
    labels: [...Array(24).keys()].map((n) => `2021-09-0${n + 1}`),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: "datetime"
    },
    colors: ["#F57575"],
    title: {
      text: "USD 652,02",
      offsetX: 10,
      offsetY: 25,
      style: {
        fontSize: "20px",
        fontFamily: undefined,
        fontWeight: 'normal',
        color: '#fff',
        cssClass: "apexcharts-yaxis-title"
      }
    },
    /* responsive: [
        {
            breakpoint: 1000,
            options: {
                title: {
                    offsetX: 10,
                    offsetY: 25
                },
                subtitle: {
                    offsetX: 10,
                    offsetY: 15
                },
                chart: {
                    height:400
                }
            }
        }
    ], */
    subtitle: {
      text: "Monthly Spent:",
      offsetX: 10,
      offsetY: 15,
      style: {
        fontSize: "1rem",
        color: '#888EB7',
        cssClass: "apexcharts-yaxis-title"
      }
    }
  };

  new ApexCharts(document.querySelector("#spark1"), spark1).render();