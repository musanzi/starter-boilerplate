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
      price: "$ 12,463",
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
      price: "$ 12,463",
      color: "danger",
      complatedTo: "Jan 2023",
      persentage: "+ 20.08%",
      class: "total-sells-2",
    },
  ];
  
  export const ordersValue: commanTopData[] = [
    {
      title: "Daily Orders",
      image: "assets/images/dashboard-3/icon/sent1.png",
      price: "$ 12,463",
      color: "success",
      complatedTo: "Jan 2023",
      persentage: "+ 20.08%",
      class: "total-sells-3",
    },
  ];
  
  export const dailyRevenue: commanTopData[] = [
    {
      image: "assets/images/dashboard-3/icon/revenue1.png",
      title: "Daily Revenue",
      price: "$ 12,463",
      color: "danger",
      complatedTo: "Jan 2023",
      persentage: "+ 20.08%",
      class: "total-sells-4",
    },
  ];