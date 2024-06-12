export interface commanTopData {
  title: string;
  price: string;
  color: string;
  complatedTo: string;
  image: string;
  persentage: string;
  class: string;
}

export const totalSells: commanTopData[] = [
  {
    image: "assets/images/dashboard-3/icon/coin1.png",
    title: "Total Sells",
    price: "12,463",
    color: "success",
    complatedTo: "Jan 2023",
    persentage: "+ 20.08%",
    class: "total-sells",
  },
];

export const dailyOrders: commanTopData[] = [
  {
    image: "assets/images/dashboard-3/icon/shopping1.png",
    title: "Orders Value",
    price: "78,596",
    color: "danger",
    complatedTo: "Aug 2023",
    persentage: "- 10.02%",
    class: "total-sells-2",
  },
];

export const ordersValue: commanTopData[] = [
  {
    title: "Daily Orders",
    image: "assets/images/dashboard-3/icon/sent1.png",
    price: "95,789",
    color: "success",
    complatedTo: "May 2023",
    persentage: "+ 13.23%",
    class: "total-sells-3",
  },
];

export const dailyRevenue: commanTopData[] = [
  {
    image: "assets/images/dashboard-3/icon/revenue1.png",
    title: "Total Sells",
    price: "41,954",
    color: "danger",
    complatedTo: "July 2023",
    persentage: "- 17.06%",
    class: "total-sells-4",
  },
];

export const recentCustomers = [
  {
    id: 1,
    image: "assets/images/dashboard-3/user/1.png",
    title: "Junsung Park",
    uid: "#32449",
    status: "Paid",
    price: "8282.13",
    time: "50",
  },
  {
    id: 2,
    image: "assets/images/dashboard-3/user/2.png",
    title: "Yongjae Choi",
    uid: "#95460",
    status: "Pending",
    price: "9546.84",
    time: "34",
  },
  {
    id: 3,
    image: "assets/images/dashboard-3/user/3.png",
    title: "Seonil Jang",
    uid: "#95468",
    status: "Paid",
    price: "2354.16",
    time: "30",
  },
  {
    id: 4,
    image: "assets/images/dashboard-3/user/4.png",
    title: "Joohee Min",
    uid: "#95462",
    status: "Pending",
    price: "3254.35",
    time: "25",
  },
  {
    id: 5,
    image: "assets/images/dashboard-3/user/5.png",
    title: "Soojung Kin",
    uid: "#34586",
    status: "Paid",
    price: "3654.32",
    time: "23",
  },
];

export const recentOrders = [
  {
    order: [
      {
        image: "assets/images/dashboard-3/1.png",
        title: "Decorative Plants",
      },
    ],
    orderDate: "20 Sep",
    orderTime: "03.00AM",
    oty: 12,
    customer: [
      {
        image: "assets/images/dashboard-3/user/6.png",
        name: "Leonie Green",
      },
    ],
    price: "637.30",
    status: "Succeed",
    class: "success",
  },
  {
    order: [
      {
        image: "assets/images/dashboard-3/2.png",
        title: "Sticky Calender",
      },
    ],
    orderDate: "12 Mar",
    orderTime: "08.12AM",
    oty: 14,
    customer: [
      {
        image: "assets/images/dashboard-3/user/8.png",
        name: "Peter White",
      },
    ],
    price: "637.30",
    status: "Warning",
    class: "warning",
  },
  {
    order: [
      {
        image: "assets/images/dashboard-3/3.png",
        title: "Crystal Mug",
      },
    ],
    orderDate: "Feb 15",
    orderTime: "10.00AM",
    oty: 19,
    customer: [
      {
        image: "assets/images/dashboard-3/user/7.png",
        name: "Ruby Yang",
      },
    ],
    price: "637.30",
    status: "Succeed",
    class: "success",
  },
  {
    order: [
      {
        image: "assets/images/dashboard-3/4.png",
        title: "Motion Table Lamp",
      },
    ],
    orderDate: "Jun 10",
    orderTime: "12.30AM",
    oty: 17,
    customer: [
      {
        image: "assets/images/dashboard-3/user/8.png",
        name: "Visha Long",
      },
    ],
    price: "637.30",
    status: "Canceled",
    class: "danger",
  },
  // {
  //   order: [
  //     {
  //       image: "assets/images/dashboard-3/2.png",
  //       title: "Sticky Calender",
  //     },
  //   ],
  //   orderDate: "12 Mar",
  //   orderTime: "08.12AM",
  //   oty: 14,
  //   customer: [
  //     {
  //       image: "assets/images/dashboard-3/user/8.png",
  //       name: "Peter White",
  //     },
  //   ],
  //   price: "637.30",
  //   status: "Warning",
  //   class: "warning",
  // },
  // {
  //   order: [
  //     {
  //       image: "assets/images/dashboard-3/3.png",
  //       title: "Crystal Mug",
  //     },
  //   ],
  //   orderDate: "Feb 15",
  //   orderTime: "10.00AM",
  //   oty: 19,
  //   customer: [
  //     {
  //       image: "assets/images/dashboard-3/user/7.png",
  //       name: "Ruby Yang",
  //     },
  //   ],
  //   price: "637.30",
  //   status: "Succeed",
  //   class: "success",
  // },
  // {
  //   order: [
  //     {
  //       image: "assets/images/dashboard-3/4.png",
  //       title: "Motion Table Lamp",
  //     },
  //   ],
  //   orderDate: "Jun 10",
  //   orderTime: "12.30AM",
  //   oty: 17,
  //   customer: [
  //     {
  //       image: "assets/images/dashboard-3/user/8.png",
  //       name: "Visha Long",
  //     },
  //   ],
  //   price: "637.30",
  //   status: "Canceled",
  //   class: "danger",
  // },
];

export const contriesSale = [
  {
    icon: "map-loaction",
    countery: "United States",
    percentage: "53.23",
    class: "fill-primary",
  },
  {
    icon: "map-loaction",
    countery: "Romania",
    percentage: "31.85",
    class: "fill-secondary",
  },
  {
    icon: "map-loaction",
    countery: "Austalia",
    percentage: "12.98",
    class: "fill-warning",
  },
  {
    icon: "map-loaction",
    countery: "Germany",
    percentage: "45.23",
    class: "fill-tertiary",
  },
  {
    icon: "map-loaction",
    countery: "Africa",
    percentage: "23.15",
    class: "fill-success",
  },
  {
    icon: "map-loaction",
    countery: "Europe",
    percentage: "95.75",
    class: "fill-danger",
  },
];

export const itemsProgress = [
  {
    class: "primary",
    width: "25%",
  },
  {
    class: "secondary",
    width: "25%",
  },
  {
    class: "warning",
    width: "25%",
  },
  {
    class: "tertiary",
    width: "25%",
  },
];

export const TopSeller = [
  {
    image: "assets/images/dashboard-3/user/9.png",
    name: "Gary Waters",
    brandName: "Adidas",
    product: "Clothes",
    sold: 650,
    price: 37.5,
    earnings: 24375,
  },
  {
    image: "assets/images/dashboard-3/user/10.png",
    name: "Edwin Hogan",
    brandName: "Nike",
    product: "Shoes",
    sold: 956,
    price: 24.75,
    earnings: 23661,
  },
  {
    image: "assets/images/dashboard-3/user/11.png",
    name: "Aaron Hogan",
    brandName: "Sony",
    product: "Electronics",
    sold: 348,
    price: 184.50,
    earnings: 64206,
  },
  {
    image: "assets/images/dashboard-3/user/12.png",
    name: "Ralph Waters",
    brandName: "i Phone",
    product: "Mobile",
    sold: 100,
    price: 150.25,
    earnings: 15025,
  },
];

