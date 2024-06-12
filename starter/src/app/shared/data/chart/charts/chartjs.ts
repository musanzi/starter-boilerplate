import {
  ApexAnnotations,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTheme,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
} from "ng-apexcharts";
import { ChartType } from "chart.js";

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  stroke?: ApexStroke;
  tooltip?: any;
  dataLabels?: ApexDataLabels;
  hover?: number;
  yaxis?: ApexYAxis;
  legend?: ApexLegend;
  labels?: string[];
  plotOptions?: ApexPlotOptions;
  fill?: ApexFill;
  responsive?: ApexResponsive[];
  pieseries?: ApexNonAxisChartSeries;
  title?: ApexTitleSubtitle;
  theme?: ApexTheme;
  colors?: string[];
  markers?: ApexMarkers;
  annotations?: ApexAnnotations;
  grid?: ApexGrid;
};

const primary = localStorage.getItem('primary_color') || '#7A70BA';
const secondary = localStorage.getItem('secondary_color') || '#48A3D7';

// Bar Graph
export var barChartChartLabels: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
export var barChartChartType: ChartType | any = "bar";
export var barChartChartLegend = false;
export var barChartChartOptions: any = {
  scaleShowLabelBackdrop: true,
  scaleBeginAtZero: true,
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,0.1)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  barShowStroke: true,
  barStrokeWidth: 2,
  barValueSpacing: 5,
  barDatasetSpacing: 1,
};
export var barChartChartColors: any[] = [
  { backgroundColor: [primary, secondary] },
];
export var barChartChartData: any[] = [
  {
    label: "My First dataset",
    backgroundColor: "rgba(115, 102 ,255, 0.4)",
    borderColor: primary,
    highlightBackgroundColor: "rgba(115, 102 ,255, 0.6)",
    borderWidth: 2,
    highlightBorderColor: primary,
    data: [35, 59, 80, 81, 56, 55, 40],
  },
  {
    label: "My Second dataset",
    backgroundColor: "rgba(247, 49, 100, 0.4)",
    borderColor: secondary,
    highlightFill: "rgba(247, 49, 100, 0.6)",
    borderWidth: 2,
    highlightStroke: secondary,
    data: [28, 48, 40, 19, 86, 27, 90],
  },
];

// LineGraph Chart

export var lineGraphLabels: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
export var lineGraphType: ChartType | any = "line";
export var lineGraphLegend = false;
export var lineGraphData: any[] = [
  {
    label: "My First dataset",
    fill: true,
    backgroundColor: "rgba(115, 102 ,255, 0.3)",
    borderColor: primary,
    pointColor: primary,
    borderWidth: 2,
    pointBorderColor: "#fff",
    pointHighlight: "#fff",
    pointHighlightStroke: "#000",
    data: [10, 59, 80, 81, 56, 55, 40],
  },
  {
    label: "My Second dataset",
    fill: true,
    backgroundColor: "rgba(247, 49, 100, 0.3)",
    borderColor: secondary,
    pointColor: secondary,
    pointStrokeColor: "#fff",
    borderWidth: 2,
    pointHighlightFill: "#000",
    pointHighlightStroke: "rgba(30, 166, 236, 1)",
    data: [28, 48, 40, 19, 86, 27, 90],
  },
];
export var lineGraphOptions: any = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.05)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate:
    '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
};

// RadarGraph Chart
export var radarGraphOptions: any = {
  
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      borderWidth: 2,
    },  
  },
};
export var radarGraphLabels: string[] = [
  "Ford",
  "Chevy",
  "Toyota",
  "Honda",
  "Mazda",
];
export var radarGraphType: ChartType | any = "radar";
export var radarGraphLegend = false;
export var radarGraphData: any[] = [
  {
    label: "My First dataset",
    fill: true,
    backgroundColor: "rgba(92, 95, 206, 0.4)",
    borderColor: primary,
    pointBackgroundColor: primary,
    pointBorderColor: primary,
    pointHoverBackgroundColor: primary,
    pointHoverBorderColor: "rgba(255, 206, 0, 0.4)",
    data: [12, 3, 5, 18, 7],
  },
];
export var radarGraphColors: Array<any> = [
  {
    backgroundColor: "rgba(99, 98, 231, 0.2)",
    borderColor: "#7366ff",
    borderWidth: 2,
  },
];

// lineChart
export var lineChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true,
};
export var lineChartLabels: string[] = ["","10", "20", "30", "40", "50", "60", "70", "80"];
export var lineChartType: ChartType | any = 'line';
export var lineChartLegend = false;
export var lineChartData: any[] = [
  {
    backgroundColor: "rgba(81, 187, 37, 0.2)",
    fill: true,
    pointBackgroundColor: "#717171",
    borderColor: "#717171",
    pointColor: "#717171",
    data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
    borderWidth: 2
  }, {
    backgroundColor: "rgba(247, 49, 100, 0.2)",
    fill: true,
    borderColor: secondary,
    pointBackgroundColor: secondary,
    pointColor: secondary,
    data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
    borderWidth: 2
  }, {
    backgroundColor: "rgba(115, 102 ,255, 0.2)",
    fill: true,
    borderColor: primary,
    pointBackgroundColor: primary,
    pointColor: primary,
    data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
    borderWidth: 2
  }
];
export var lineChartColors: Array<any> = [
  // {
  //   backgroundColor: "rgba(145, 46, 252, 0.6)",
  //   borderColor: '#7366ff',
  //   borderWidth: 1,
  // },
  // {
  //   backgroundColor: "rgba(247, 49, 100, 0.6)",
  //   borderColor: '#f73164',
  //   borderWidth: 1,
  // },
];
// Doughnut
export var doughnutChartLegend = false;
export var doughnutChartLabels: string[] = ['Red', 'Blue', 'Yellow', 'Green', 'Purple'];
export var doughnutChartData: any[] = [
  {
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      primary,
      secondary,
      "#51bb25"
    ]
  }
];
export var doughnutChartColors: any[] = [{ backgroundColor: [primary, secondary, "#51bb25"] }];
export var doughnutChartType: ChartType | any = 'doughnut';
export var doughnutChartOptions: any = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
};



// polar Chart
export var polarChartLabels: string[] = ["Yellow", "Sky", "Black", "Grey", "Dark Grey"];
export var polarChartType: ChartType | any = 'polarArea';
export var polarChartLegend = false;
export var polarChartOptions: any = {
  scaleShowLabelBackdrop: true,
  scaleBackdropColor: "rgba(255,255,255,0.75)",
  scaleBeginAtZero: true,
  scaleBackdropPaddingY: 2,
  scaleBackdropPaddingX: 2,
  scaleShowLine: true,
  segmentShowStroke: true,
  segmentStrokeColor: "#fff",
  segmentStrokeWidth: 2,
  animationSteps: 100,
  animationEasing: "easeOutBounce",
  animateRotate: true,
  animateScale: false,
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};
export var polarChartColors: any[] = [{ backgroundColor: [primary, secondary] }];
export var polarChartData: any[] = [{
  data: [300, 50, 100, 40, 120],
  backgroundColor: [
    primary,
    secondary,
    "#61ae41",
    "#a927f9",
    secondary
  ],
  borderColor: "#fff"
}
];
