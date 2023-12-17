let filter_tems = document.querySelector(".filter_tems");
let filter = document.querySelector(".filter");

filter.addEventListener("click", () => {
  filter_tems.classList.toggle("active");
});
filter_tems.querySelectorAll("li").forEach((btn) => {
  let btn2 = btn.addEventListener("click", () => {
    filter.classList.add("active");
    filter.querySelector(
      "button span"
    ).innerHTML = `Filter : ${btn.textContent}</i>`;
  });
});

let month_checker = (Month) => {
  switch (Month) {
    case 1:
      return ["January", "Jan"];
      break;
    case 2:
      return ["Feburary", "Feb"];
      break;
    case 3:
      return ["March", "Mar"];
      break;
    case 4:
      return ["April", "Apr"];
      break;
    case 5:
      return ["May", "May"];
      break;
    case 6:
      return ["June", "Jun"];
      break;
    case 7:
      return ["July", "Jul"];
      break;
    case 8:
      return ["August", "Aug"];
      break;
    case 9:
      return ["September", "Sep"];
      break;
    case 10:
      return ["October", "Oct"];
      break;
    case 11:
      return ["November", "Nov"];
      break;
    case 12:
      return ["December", "Dec"];
      break;
  }
};

let All_In_One_Chart_functions = {
  bar: "bar",
  line: "line",
  pie: "pie",
  backgroundColor: [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ],
  borderColor: [
    "rgba(255,99,132,1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ],
  options: {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
};

const monthlyOrders = document.querySelector(".monthChart").getContext("2d");
const monthlySales = document.querySelector(".monthlySales").getContext("2d");
const yearlyOrders = document.querySelector(".yearChart").getContext("2d");
const yearlySales = document.querySelector(".yearlySales").getContext("2d");
let data = [
  {
    summary_date: "17-11",
    total_orders: 3,
    total_amount: 845,
  },
  {
    summary_date: "18-11",
    total_orders: 3,
    total_amount: 660,
  },
  {
    summary_date: "19-11",
    total_orders: 25,
    total_amount: 1920,
  },
  {
    summary_date: "20-11",
    total_orders: 17,
    total_amount: 5945,
  },
  {
    summary_date: "21-11",
    total_orders: 18,
    total_amount: 1480,
  },
  {
    summary_date: "22-11",
    total_orders: 1,
    total_amount: 60,
  },
  {
    summary_date: "28-11",
    total_orders: 2,
    total_amount: 40,
  },
  {
    summary_date: "29-11",
    total_orders: 5,
    total_amount: 870,
  },
];
let month = parseInt(data[0].summary_date.split("-")[1]);

let chart_heading_for_month = [],
  chart_data_for_total_orders = [],
  chart_data_for_total_sales = [];

data.map((item) => {
  chart_heading_for_month.push(
    item.summary_date.split(`-${month}`).join(` ${month_checker(month)[1]}`)
  );
  chart_data_for_total_orders.push(item.total_orders);
  chart_data_for_total_sales.push(item.total_amount);
});
let monthly_orders = {
  labels: chart_heading_for_month,
  datasets: [
    {
      label: `${month_checker(month)[0]}`,
      data: chart_data_for_total_orders,
      backgroundColor: All_In_One_Chart_functions.backgroundColor, // Color of bars
      borderColor: All_In_One_Chart_functions.borderColor, // Border color of bars
      borderWidth: 1,
      fill: false,
    },
  ],
};

let monthly_incomes = {
  labels: chart_heading_for_month,
  datasets: [
    {
      label: `${month_checker(month)[0]}`,
      data: chart_data_for_total_sales,
      backgroundColor: All_In_One_Chart_functions.backgroundColor, // Color of bars
      borderColor: All_In_One_Chart_functions.borderColor, // Border color of bars
      borderWidth: 1,
      fill: false,
    },
  ],
};
let MonthlyOrdersChart = new Chart(monthlyOrders, {
  type: All_In_One_Chart_functions.bar,
  data: monthly_orders,
  options: All_In_One_Chart_functions.options,
});

let MonthlyIncomeChart = new Chart(monthlySales, {
  type: All_In_One_Chart_functions.bar,
  data: monthly_incomes,
  options: All_In_One_Chart_functions.options,
});

let yearData = [
  {
    Total: 79,
    TotalAmount: 31625,
    summary_date: "10-2023",
  },
  {
    Total: 74,
    TotalAmount: 11820,
    summary_date: "11-2023",
  },
  {
    Total: 7,
    TotalAmount: 215,
    summary_date: "12-2023",
  },
];

let chart_heading_for_month_year = [],
  chart_data_for_total_orders_month_year = [],
  chart_data_for_total_sales_month_year = [];
yearData.map((item) => {
  let month = parseInt(item.summary_date.split("-")[0]);
  chart_heading_for_month_year.push(
    item.summary_date.split(`${month}-`).join(`${month_checker(month)[1]} `)
  );
  chart_data_for_total_orders_month_year.push(item.Total);
  chart_data_for_total_sales_month_year.push(item.TotalAmount);
});

let yearly_month_data = {
  labels: chart_heading_for_month_year,
  datasets: [
    {
      label: `Yearly Orders`,
      data: chart_data_for_total_orders_month_year,
      backgroundColor: All_In_One_Chart_functions.backgroundColor, // Color of bars
      borderColor: All_In_One_Chart_functions.borderColor, // Border color of bars
      borderWidth: 1,
      fill: false,
    },
  ],
};

let Yearly_chart = new Chart(yearlyOrders, {
  type: All_In_One_Chart_functions.bar,
  data: yearly_month_data,
  options: All_In_One_Chart_functions.options,
});
let yearly_month_sales_data = {
  labels: chart_heading_for_month_year,
  datasets: [
    {
      label: `Yearly Sales`,
      data: chart_data_for_total_sales_month_year,
      backgroundColor: All_In_One_Chart_functions.backgroundColor, // Color of bars
      borderColor: All_In_One_Chart_functions.borderColor, // Border color of bars
      borderWidth: 1,
      fill: false,
    },
  ],
};

let year_chart_total = new Chart(yearlySales, {
  type: All_In_One_Chart_functions.bar,
  data: yearly_month_sales_data,
  options: All_In_One_Chart_functions.options,
});
