import React, { Component } from 'react'
// import { Bar } from 'react-chartjs-2'
import ReactApexCharts from "react-apexcharts";

export default class chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: {
              plotOptions: {
                  bar: {
                      horizontal: true,
                  }
              },
              yaxis: {
                min: new Date('2019-03-01').getTime(),
                max: new Date('2019-03-14').getTime()
              },
              xaxis: {
                 type: 'datetime'
              },
              fill: {
                type: 'gradient',
                gradient: {
                      shade: 'light',
                      type: "vertical",
                      shadeIntensity: 0.25,
                      gradientToColors: undefined,
                      inverseColors: true,
                      opacityFrom: 1,
                      opacityTo: 1,
                      stops: [50, 0, 100, 100]
                  }
              }
            },
            series: [
              {
                name: 'Bob',
                data: [{
                  x: 'Design',
                  y: [new Date('2019-03-02').getTime(), new Date('2019-03-03').getTime()]
                }, {
                  x: 'Code',
                  y: [new Date('2019-03-02').getTime(), new Date('2019-03-04').getTime()]
                  
                }, {
                  x: 'Test',
                  y: [new Date('2019-03-04').getTime(), new Date('2019-03-07').getTime()]
                }, {
                  x: 'Deployment',
                  y: [new Date('2019-03-11').getTime(), new Date('2019-03-12').getTime()]
                }]
              }, {
                name: 'Joe',
                data: [{
                  x: 'Design',
                  y: [new Date('2019-03-01').getTime(), new Date('2019-03-02').getTime()] 
                }, {
                  x: 'Code',
                  y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()] 
                }, {
                  x: 'Test',
                  y: [new Date('2019-03-06').getTime(), new Date('2019-03-09').getTime()]
                }, {
                  x: 'Deployment',
                  y: [new Date('2019-03-10').getTime(), new Date('2019-03-11').getTime()]
                }]
              }
            ],
          }
        }


        
      
    

    componentDidMount () {
        const url = "https://totalcloud-static.s3.amazonaws.com/intern.json";
        fetch(url)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            console.log("hello Avinash");
            
            this.setState({
                chartdata: data
            })
            console.log(this.state.chartdata);
        })


        this.setState({
            options: {
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                yaxis: {
                  min: new Date('2019-09-01').getTime(),
                  max: new Date('2019-09-31').getTime()
                },
                xaxis: {
                   categories: ['Shubham','Vivek','Priya','Rohan','Swati','Prakash','Abhishek','Pradeep','Suhas','Vishnu','Neha']
                },
                fill: {
                  type: 'gradient',
                  gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [50, 0, 100, 100]
                    }
                }
              },
              series: [
                {
                  name: '1st Availability',
                  data: [{
                    x: 'Shubham',
                    y: [new Date('2019-09-07').getTime(), new Date('2019-09-08').getTime()]
                  }, {
                    x: 'Vivek',
                    y: [new Date('2019-09-07').getTime(), new Date('2019-09-08').getTime()]
                    
                  }, {
                    x: 'Priya',
                    y: [new Date('2019-09-07').getTime(), new Date('2019-09-08').getTime()]
                  }, {
                    x: 'Rohan',
                    y: [new Date('2019-09-07').getTime(), new Date('2019-09-08').getTime()]
                  },{
                    x: 'Swati',
                    y: [new Date('2019-09-07').getTime(), new Date('2019-09-08').getTime()]
                  },{
                    x: 'Prakash',
                    y: [new Date('2019-09-07').getTime(), new Date('2019-09-08').getTime()]
                  },{
                    x: 'Abhisekh',
                    y: [new Date('2019-09-07').getTime(), new Date('2019-09-08').getTime()]
                  },{
                    x: 'Pradeep',
                    y: [new Date('2019-09-07').getTime(), new Date('2019-09-08').getTime()]
                  },{
                    x: 'Suhash',
                    y: [new Date('2019-09-07').getTime(), new Date('2019-09-08').getTime()]
                  },{
                    x: 'Vishnu',
                    y: [new Date('2019-09-07').getTime(), new Date('2019-09-08').getTime()]
                  },{
                    x: 'Neha',
                    y: [new Date('2019-09-07').getTime(), new Date('2019-09-08').getTime()]
                  }]
                }, {
                    name: '2nd Availability',
                    data: [{
                      x: 'Shubham',
                      y: [new Date('2019-09-15').getTime(), new Date('2019-09-16').getTime()]
                    }, {
                      x: 'Vivek',
                      y: [new Date('2019-09-15').getTime(), new Date('2019-09-16').getTime()]   
                    }, {
                      x: 'Priya',
                      y: [new Date('2019-09-15').getTime(), new Date('2019-09-16').getTime()]
                    }, {
                      x: 'Rohan',
                      y: [new Date('2019-09-15').getTime(), new Date('2019-09-16').getTime()]
                    },{
                      x: 'Swati',
                      y: [new Date('2019-09-15').getTime(), new Date('2019-09-16').getTime()]
                    },{
                      x: 'Prakash',
                      y: [new Date('2019-09-15').getTime(), new Date('2019-09-16').getTime()]
                    },{
                      x: 'Abhisekh',
                      y: [new Date('2019-09-15').getTime(), new Date('2019-09-16').getTime()]
                    },{
                      x: 'Pradeep',
                      y: [new Date('2019-09-15').getTime(), new Date('2019-09-16').getTime()]
                    },{
                      x: 'Suhash',
                      y: [new Date('2019-09-15').getTime(), new Date('2019-09-16').getTime()]
                    },{
                      x: 'Vishnu',
                      y: [new Date('2019-09-15').getTime(), new Date('2019-09-16').getTime()]
                    },{
                      x: 'Neha',
                      y: [new Date('2019-09-15').getTime(), new Date('2019-09-16').getTime()]
                    }]
                  },{
                    name: '3rd Availability',
                    data: [{
                      x: 'Shubham',
                      y: [new Date('2019-09-23').getTime(), new Date('2019-09-24').getTime()]
                    }, {
                      x: 'Vivek',
                      y: [new Date('2019-09-23').getTime(), new Date('2019-09-24').getTime()]   
                    }, {
                      x: 'Priya',
                      y: [new Date('2019-09-23').getTime(), new Date('2019-09-24').getTime()]
                    }, {
                      x: 'Rohan',
                      y: [new Date('2019-09-23').getTime(), new Date('2019-09-24').getTime()]
                    },{
                      x: 'Swati',
                      y: [new Date('2019-09-23').getTime(), new Date('2019-09-24').getTime()]
                    },{
                      x: 'Prakash',
                      y: [new Date('2019-09-23').getTime(), new Date('2019-09-24').getTime()]
                    },{
                      x: 'Abhisekh',
                      y: [new Date('2019-09-23').getTime(), new Date('2019-09-24').getTime()]
                    },{
                      x: 'Pradeep',
                      y: [new Date('2019-09-23').getTime(), new Date('2019-09-24').getTime()]
                    },{
                      x: 'Suhash',
                      y: [new Date('2019-09-23').getTime(), new Date('2019-09-24').getTime()]
                    },{
                      x: 'Vishnu',
                      y: [new Date('2019-09-23').getTime(), new Date('2019-09-24').getTime()]
                    },{
                      x: 'Neha',
                      y: [new Date('2019-09-23').getTime(), new Date('2019-09-24').getTime()]
                    }]
                  },{
                  name: 'First Busy Day',
                  data: [{
                    x: 'Shubham',
                    y: [new Date('2019-09-01').getTime(), new Date('2019-09-07').getTime()]
                  }, {
                    x: 'Vivek',
                    y: [new Date('2019-09-09').getTime(), new Date('2019-09-12').getTime()]   
                  }, {
                    x: 'Priya',
                    y: [new Date('2019-09-10').getTime(), new Date('2019-09-12').getTime()]
                  }, {
                    x: 'Rohan',
                    y: [new Date('2019-09-17').getTime(), new Date('2019-09-19').getTime()]
                  },{
                    x: 'Swati',
                    y: [new Date('2019-09-13').getTime(), new Date('2019-09-14').getTime()]
                  },{
                    x: 'Prakash',
                    y: [new Date('2019-09-03').getTime(), new Date('2019-09-07').getTime()]
                  },{
                    x: 'Abhisekh',
                    y: [new Date('2019-09-11').getTime(), new Date('2019-09-11').getTime()]
                  },{
                    x: 'Pradeep',
                    y: [new Date('2019-09-09').getTime(), new Date('2019-09-13').getTime()]
                  },{
                    x: 'Suhash',
                    y: [new Date('2019-09-20').getTime(), new Date('2019-09-23').getTime()]
                  },{
                    x: 'Vishnu',
                    y: [new Date('2019-09-25').getTime(), new Date('2019-09-27').getTime()]
                  },{
                    x: 'Neha',
                    y: [new Date('2019-09-25').getTime(), new Date('2019-09-28').getTime()]
                  }]
                },{
                    name: ' Second Busy Day',
                    data: [{
                      x: 'Shubham',
                      y: [new Date('2019-09-26').getTime(), new Date('2019-09-28').getTime()]
                    }, {
                      x: 'Rohan',
                      y: [new Date('2019-09-27').getTime(), new Date('2019-09-29').getTime()]
                    },{
                      x: 'Swati',
                      y: [new Date('2019-09-28').getTime(), new Date('2019-09-29').getTime()]
                    },{
                      x: 'Pradeep',
                      y: [new Date('2019-09-28').getTime(), new Date('2019-09-29').getTime()]
                    }]
                  }
              ],
            
        });
    
    }
    
    
    render() {
        
        return (
            <div className="mt-5 mb-5">
                <div className="container card" id="chart">
                    <ReactApexCharts options={this.state.options} series={this.state.series} type="rangeBar" height="350"/>
                </div>
            </div>
        )
    }
}
