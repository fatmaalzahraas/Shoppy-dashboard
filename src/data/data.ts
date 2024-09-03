import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import GroupIcon from "@mui/icons-material/Group";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import CommentBankOutlinedIcon from "@mui/icons-material/CommentBankOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import product1 from "../assets/images/orders/product01.jpg";
import product2 from "../assets/images/orders/product02.jpg";
import product3 from "../assets/images/orders/product03.jpg";
import product4 from "../assets/images/orders/product04.jpg";
import product5 from "../assets/images/orders/product05.jpg";
import product6 from "../assets/images/orders/product06.jpg";
import product7 from "../assets/images/orders/product07.jpg";
import product8 from "../assets/images/orders/product08.jpg";
import product9 from "../assets/images/orders/product09.jpg";
import product10 from "../assets/images/orders/product10.jpg";
import product11 from "../assets/images/orders/product11.jpg";
import product12 from "../assets/images/orders/product12.jpg";
import product13 from "../assets/images/orders/product13.jpg";
import product14 from "../assets/images/orders/product14.jpg";
import product15 from "../assets/images/orders/product15.jpg";
import product16 from "../assets/images/orders/product16.jpg";
import product17 from "../assets/images/orders/product17.jpg";
import product18 from "../assets/images/orders/product18.jpg";
import product19 from "../assets/images/orders/product19.jpg";
import product20 from "../assets/images/orders/product20.jpg";
import product21 from "../assets/images/orders/product21.jpg";
import product22 from "../assets/images/orders/product22.jpg";
import product25 from "../assets/images/orders/product25.jpg";
import product26 from "../assets/images/orders/product26.jpg";
import product27 from "../assets/images/orders/product27.jpg";
import product28 from "../assets/images/orders/product28.jpg";
import product29 from "../assets/images/orders/product29.jpg";
import product30 from "../assets/images/orders/product30.jpg";
import product31 from "../assets/images/orders/product31.jpg";
import product32 from "../assets/images/orders/product32.jpg";
import product33 from "../assets/images/orders/product33.jpg";
import EmployeeOne from "../assets/images/employee04.jpg";
import EmployeeTwo from "../assets/images/employee06.jpg";
import EmployeeThree from "../assets/images/employee03.jpg";
import EmployeeFour from "../assets/images/employee10.png";
import EmployeeFive from "../assets/images/employee05.jpg";
import EmployeeSix from "../assets/images/employee06.jpg";
import EmployeeSeven from "../assets/images/employee01.jpg";
import EmployeeEight from "../assets/images/employee08.png";
import EmployeeNine from "../assets/images/employee09.jpg";
import EmployeeEleven from "../assets/images/employee11.jpg";
import CustomerOne from "../assets/images/customer01.jpg";
import CustomerTwo from "../assets/images/customer02.jpg";
import CustomerThree from "../assets/images/customer03.jpg";
import CustomerFour from "../assets/images/customer04.jpg";
import AdminPhoto from "../assets/images/adminPhoto.png";
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined";
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart'
import moment from "moment/moment";
import { EventType } from "../types/types";
export const sidebarLinks = [
  {
    title: "dashboard",
    links: [
      {
        link: "ecommerce",
        icon: LocalMallOutlinedIcon,
        idx: 0,
      },
    ],
  },
  {
    title: "pages",
    links: [
      {
        link: "employees",
        icon: GroupIcon,
        idx: 1,
      },
      {
        link: "customers",
        icon: PersonSearchOutlinedIcon,
        idx: 2,
      },
      {
        link: "orders",
        icon: ShoppingCartOutlinedIcon,
        idx: 3,
      },
    ],
  },
  {
    title: "apps",
    links: [
      {
        link: "kanban",
        icon: ViewKanbanOutlinedIcon,
        idx: 4,
      },
      {
        link: "calendar",
        icon: DateRangeOutlinedIcon,
        idx: 5,
      },
      {
        link: "editor",
        icon: EditNoteOutlinedIcon,
        idx: 6,
      },
    ],
  },
  {
    title: "charts",
    links: [
      {
        link: "line",
        icon: TimelineOutlinedIcon,
        idx: 7,
      },
      {
        link: "area",
        icon: AnalyticsOutlinedIcon,
        idx: 8,
      },
      {
        link: "bar",
        icon: BarChartOutlinedIcon,
        idx: 9,
      },
      {
        link: "pie",
        icon: DonutSmallOutlinedIcon,
        idx: 10,
      },
      {
        link: 'stacked',
        icon: StackedBarChartIcon,
        idx: 12
      }
    ],
  },
];
export const themeColors = [
  "#9575cd",
  "#81c784",
  "#42a5f5",
  "#ff4081",
  "#F1C40F",
];

export const cartItems = [
  {
    image: product7,
    title: "butterscotch ice-cream",
    category: "Milk Product",
    price: 180,
  },
  {
    image: product2,
    title: "Supreme fresh tomato",
    category: "Vegetable Product",
    price: 320,
  },
  {
    image: product4,
    title: "Red color candy",
    category: "Food Product",
    price: 200,
  },
];

export const ChatContent = [
  {
    image: EmployeeOne,
    message: "New message received",
    desc: "Ahmed sent you new message",
    time: "10:30 PM",
  },
  {
    image: EmployeeTwo,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "5:39 PM",
  },
  {
    image: EmployeeThree,
    message: "Marwa Joined the Team!",
    desc: "Congratulate her",
    time: "11:10 AM",
  },
  {
    image: EmployeeFour,
    message: "Noor completed tasks",
    desc: "Assign her new tasks",
    time: "9:15 AM",
  },
];

export const adminProfileDate = [
  {
    icon: AccountCircleOutlinedIcon,
    title: "my profile",
    subTitle: "Account Settings",
    color: "#388e3c",
    bgColor: "#e8f5e9",
  },
  {
    icon: MailOutlinedIcon,
    title: "my inbox",
    subTitle: "Messages & Emails",
    color: "#5d4037",
    bgColor: "#ffccbc",
  },
  {
    icon: AssignmentOutlinedIcon,
    title: "my tasks",
    subTitle: "To-do and Daily Tasks",
    color: "#303f9f",
    bgColor: "#d1c4e9",
  },
];

export const earnings = [
  {
    icon: PeopleOutlinedIcon,
    count: "38,244",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#388e3c",
    bgColor: "#e8f5e9",
    percentColor: "#f44336",
  },
  {
    icon: Inventory2OutlinedIcon,
    count: "6,496",
    percentage: "+25%",
    title: "Products",
    iconColor: "#fffde7",
    bgColor: "#ffc107",
    percentColor: "#4caf50",
  },
  {
    icon: MonetizationOnOutlinedIcon,
    count: "524,39",
    percentage: "+35%",
    title: "Sales",
    iconColor: "#e91e63",
    bgColor: "#ffebee",
    percentColor: "#4caf50",
  },
  {
    icon: CurrencyExchangeOutlinedIcon,
    count: "40,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "#0288d1",
    bgColor: "#e1f5fe",
    percentColor: "#f44336",
  },
];

export const sparkLineChartData = [
  {
    x: 1,
    data: 2,
  },
  {
    x: 2,
    data: 6,
  },
  {
    x: 3,
    data: 8,
  },
  {
    x: 4,
    data: 5,
  },
  {
    x: 5,
    data: 10,
  },
];

export const stackedBarChartData = [
  { name: "Jan", Expense: 111.1, Budget: 111.1 },
  { name: "Feb", Expense: 127.3, Budget: 127.3 },
  { name: "Mar", Expense: 143.4, Budget: 143.4 },
  { name: "Apr", Expense: 159.9, Budget: 159.9 },
  { name: "May", Expense: 159.9, Budget: 159.9 },
  { name: "Jun", Expense: 159.9, Budget: 159.9 },
  { name: "July", Expense: 159.9, Budget: 159.9 },
];
export const stackedBarLabels = [
  { value: "Budget", color: "#00BDAE" },
  { value: "Expense", color: "#3a3a3a" },
];

export const pieChartDataOne = [
  { name: "2018", value: 0.35 },
  { name: "2019",  value: 0.248 },
  { name: "2020", value: 0.248 },
  { name: "2021", value: 0.152 },
];
export const colorsPieChartOne = ["#26a69a", "#f06292", "#1e88e5", "#616161"];

export const recentTransactionsData = [
  {
    icon: PaidOutlinedIcon,
    title: "Paypal Transfer",
    desc: "Money Added",
    amount: "+$350",
    color: "#4caf50",
    iconColor: "#00bcd4",
    bgColor: "#e1f5fe",
  },
  {
    icon: WalletOutlinedIcon,
    title: "Wallet",
    desc: "Bill Payment",
    amount: "-$560",
    color: "#f44336",
    iconColor: "#fffde7",
    bgColor: "#ffc107",
  },
  {
    icon: CreditCardOutlinedIcon,
    title: "Credit Card",
    desc: "Money reversed",
    amount: "+$350",
    color: "#4caf50",
    iconColor: "#283593",
    bgColor: "#ede7f6",
  },
  {
    icon: CommentBankOutlinedIcon,
    title: "Bank Transfer",
    desc: "Money Added",
    amount: "+$350",
    color: "#4caf50",
    iconColor: "#ff5722",
    bgColor: "#fff8e1",
  },
  {
    icon: PaidOutlinedIcon,
    title: "Refund",
    desc: "Payment Sent",
    amount: "-$50",
    color: "#f44336",
    iconColor: "#0288d1",
    bgColor: "#e1f5fe",
  },
];
export const transactionsDates = [
  { month: "March", year: 2024 },
  { month: "April", year: 2024 },
  { month: "May", year: 2024 },
];

export const lineChartData = [
  {
    name: 2018,
    Egypt: 21,
    US: 28,
    Turkey: 10,
  },
  {
    name: 2019,
    Egypt: 24,
    US: 44,
    Turkey: 20,
  },
  {
    name: 2020,
    Egypt: 36,
    US: 48,
    Turkey: 30,
  },
  {
    name: 2021,
    Egypt: 39,
    US: 50,
    Turkey: 39,
  },
  {
    name: 2022,
    Egypt: 54,
    US: 66,
    Turkey: 50,
  },
  {
    name: 2023,
    Egypt: 57,
    US: 78,
    Turkey: 70,
  },
  {
    name: 2024,
    Egypt: 70,
    US: 84,
    Turkey: 100,
  },
];
export const lineChartLabels = [
  { value: "Egypt", color: "#26a69a" },
  { value: "US", color: "#616161" },
  { value: "Turkey", color: "#0288d1" },
];

export const weeklyStates = [
  {
    icon: MonetizationOnOutlinedIcon,
    title: "Top Sales",
    desc: "Johnathan Doe",
    amount: "-$560",
    color: "#f44336",
    iconColor: "#e91e63",
    bgColor: "#ffebee",
  },
  {
    icon: StarBorderPurple500OutlinedIcon,
    title: "Best Seller",
    desc: "MaterialPro Admin",
    amount: "-$560",
    color: "#f44336",
    iconColor: "#fffde7",
    bgColor: "#ffc107",
  },
  {
    icon: ChatBubbleOutlineOutlined,
    title: "Most Commented",
    desc: "Amir Ahmed",
    amount: "+$560",
    color: "#4caf50",
    iconColor: "#f1f8e9",
    bgColor: "#00c853",
  },
];
export const leaders = [
  AdminPhoto,
  EmployeeOne,
  EmployeeTwo,
  EmployeeThree,
  EmployeeFour,
];

export const ordersRows = [
  {
    id: 10248,
    customerName: "Vinet",
    totalAmount: 32.38,
    item: "Fresh Tomato",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    image: product2,
  },
  {
    id: 345653,
    customerName: "Ahmed Khaled",
    totalAmount: 56.34,
    item: "Butter Scotch",
    location: "Egypt",
    status: "complete",
    statusBg: "#8BE78B",
    image: product6,
  },
  {
    id: 390457,
    customerName: "Fran Perez",
    totalAmount: 93.31,
    item: "Candy Gucci",
    location: "New York",
    status: "active",
    statusBg: "#03C9D7",
    image: product3,
  },
  {
    id: 894486,
    customerName: "Anika Viseer",
    totalAmount: 93.31,
    item: "Night Lamp",
    location: "Turkey",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product16,
  },
  {
    id: 748975,
    customerName: "Miron Vitold",
    totalAmount: 23.99,
    item: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    statusBg: "red",
    image: product20,
  },
  {
    id: 94757,
    customerName: "Omar Darobe",
    totalAmount: 95.99,
    item: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product17,
  },
  {
    id: 944895,
    customerName: "Lulia albu",
    totalAmount: 17.99,
    item: "Skincare",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    image: product33,
  },
  {
    id: 915954,
    customerName: "Penjani",
    totalAmount: 59.99,
    item: "Headphone",
    location: "USA",
    status: "complete",
    statusBg: "#8BE78B",
    image: product31,
  },
  {
    id: 805954,
    customerName: "Jie Yan",
    totalAmount: 87.99,
    item: "Shoes",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    image: product32,
  },
  {
    id: 774534,
    customerName: "Danai",
    totalAmount: 122.99,
    item: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product18,
  },
  {
    id: 38489,
    customerName: "Miron",
    totalAmount: 87.99,
    item: "Ice Cream",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    image: product12,
  },
  {
    id: 25546,
    customerName: "Marwa Nasr",
    totalAmount: 84.99,
    item: "Pan Cake",
    location: "Egypt",
    status: "complete",
    statusBg: "#8BE78B",
    image: product13,
  },
  {
    id: 674534,
    customerName: "Danai",
    totalAmount: 122.99,
    item: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product21,
  },
  {
    id: 10348,
    customerName: "Vinet",
    totalAmount: 32.38,
    item: "Fresh Tomato",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    image: product2,
  },
  {
    id: 34565,
    customerName: "Noor Mohamed",
    totalAmount: 56.34,
    item: "Butter Scotch",
    location: "Egypt",
    status: "complete",
    statusBg: "#8BE78B",
    image: product6,
  },
  {
    id: 390450,
    customerName: "Fran Perez",
    totalAmount: 93.31,
    item: "Candy Gucci",
    location: "New York",
    status: "active",
    statusBg: "#03C9D7",
    image: product1,
  },
  {
    id: 893486,
    customerName: "Anika Viseer",
    totalAmount: 93.31,
    item: "Night Lamp",
    location: "Turkey",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product27,
  },
  {
    id: 749975,
    customerName: "Miron Vitold",
    totalAmount: 23.99,
    item: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    statusBg: "red",
    image: product22,
  },
  {
    id: 94758,
    customerName: "Omar Darobe",
    totalAmount: 95.99,
    item: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product19,
  },
  {
    id: 945895,
    customerName: "Lulia albu",
    totalAmount: 17.99,
    item: "Skincare",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    image: product33,
  },
  {
    id: 45954,
    customerName: "Penjani",
    totalAmount: 59.99,
    item: "Headphone",
    location: "USA",
    status: "complete",
    statusBg: "#8BE78B",
    image: product31,
  },
  {
    id: 55954,
    customerName: "Jie Yan",
    totalAmount: 87.99,
    item: "Shoes",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    image: product29,
  },
  {
    id: 554534,
    customerName: "Danai",
    totalAmount: 122.99,
    item: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product21,
  },
  {
    id: 36489,
    customerName: "Miron",
    totalAmount: 87.99,
    item: "Ice Cream",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    image: product26,
  },
  {
    id: 25646,
    customerName: "Frank",
    totalAmount: 84.99,
    item: "Pan Cake",
    location: "Egypt",
    status: "complete",
    statusBg: "#8BE78B",
    image: product15,
  },
  {
    id: 444534,
    customerName: "Shadi Mahmoud",
    totalAmount: 122.99,
    item: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product21,
  },
  {
    id: 10448,
    customerName: "Vinet",
    totalAmount: 32.38,
    item: "Fresh Tomato",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    image: product2,
  },
  {
    id: 345652,
    customerName: "Marawan",
    totalAmount: 56.34,
    item: "Butter Scotch",
    location: "Egypt",
    status: "complete",
    statusBg: "#8BE78B",
    image: product6,
  },
  {
    id: 391457,
    customerName: "Fran Perez",
    totalAmount: 93.31,
    item: "Candy Gucci",
    location: "New York",
    status: "active",
    statusBg: "#03C9D7",
    image: product4,
  },
  {
    id: 895486,
    customerName: "Anika Viseer",
    totalAmount: 93.31,
    item: "Night Lamp",
    location: "Turkey",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product32,
  },
  {
    id: 748973,
    customerName: "Miron Vitold",
    totalAmount: 23.99,
    item: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    statusBg: "red",
    image: product9,
  },
  {
    id: 94750,
    customerName: "Omar Darobe",
    totalAmount: 95.99,
    item: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product19,
  },
  {
    id: 942095,
    customerName: "Lulia albu",
    totalAmount: 17.99,
    item: "Skincare",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    image: product8,
  },
  {
    id: 785954,
    customerName: "Penjani",
    totalAmount: 59.99,
    item: "Headphone",
    location: "USA",
    status: "complete",
    statusBg: "#8BE78B",
    image: product31,
  },
  {
    id: 835954,
    customerName: "Jie Yan",
    totalAmount: 87.99,
    item: "Shoes",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    image: product11,
  },
  {
    id: 404534,
    customerName: "Danai",
    totalAmount: 122.99,
    item: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product25,
  },
  {
    id: 38480,
    customerName: "Miron",
    totalAmount: 87.99,
    item: "Ice Cream",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    image: product7,
  },
  {
    id: 25246,
    customerName: "Frank",
    totalAmount: 84.99,
    item: "Pan Cake",
    location: "Egypt",
    status: "complete",
    statusBg: "#8BE78B",
    image: product28,
  },
  {
    id: 304534,
    customerName: "Adam Ibrahim",
    totalAmount: 122.99,
    item: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product21,
  },
  {
    id: 10249,
    customerName: "Vinet",
    totalAmount: 32.38,
    item: "Fresh Tomato",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    image: product2,
  },
  {
    id: 34553,
    customerName: "Adam Ibrahim",
    totalAmount: 56.34,
    item: "Butter Scotch",
    location: "Egypt",
    status: "complete",
    statusBg: "#8BE78B",
    image: product6,
  },
  {
    id: 39057,
    customerName: "Fran Perez",
    totalAmount: 93.31,
    item: "Candy Gucci",
    location: "New York",
    status: "active",
    statusBg: "#03C9D7",
    image: product5,
  },
  {
    id: 89486,
    customerName: "Anika Viseer",
    totalAmount: 93.31,
    item: "Night Lamp",
    location: "Turkey",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product6,
  },
  {
    id: 748902,
    customerName: "Miron Vitold",
    totalAmount: 23.99,
    item: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    statusBg: "red",
    image: product10,
  },
  {
    id: 94759,
    customerName: "Omar Darobe",
    totalAmount: 95.99,
    item: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product14,
  },
  {
    id: 944805,
    customerName: "Lulia albu",
    totalAmount: 17.99,
    item: "Skincare",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    image: product3,
  },
  {
    id: 415954,
    customerName: "Penjani",
    totalAmount: 59.99,
    item: "Headphone",
    location: "USA",
    status: "complete",
    statusBg: "#8BE78B",
    image: product31,
  },
  {
    id: 805954,
    customerName: "Jie Yan",
    totalAmount: 87.99,
    item: "Shoes",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    image: product30,
  },
  {
    id: 204534,
    customerName: "Danai",
    totalAmount: 122.99,
    item: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product25,
  },
  {
    id: 31489,
    customerName: "Miron",
    totalAmount: 87.99,
    item: "Ice Cream",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    image: product26,
  },
  {
    id: 26446,
    customerName: "Rania Shawki",
    totalAmount: 84.99,
    item: "Pan Cake",
    location: "Egypt",
    status: "complete",
    statusBg: "#8BE78B",
    image: product13,
  },
  {
    id: 194534,
    customerName: "Danai",
    totalAmount: 122.99,
    item: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product18,
  },
  {
    id: 10250,
    customerName: "Vinet",
    totalAmount: 32.38,
    item: "Fresh Tomato",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    image: product2,
  },
  {
    id: 342653,
    customerName: "Rania Shawki",
    totalAmount: 56.34,
    item: "Butter Scotch",
    location: "Egypt",
    status: "complete",
    statusBg: "#8BE78B",
    image: product6,
  },
  {
    id: 390357,
    customerName: "Fran Perez",
    totalAmount: 93.31,
    item: "Candy Gucci",
    location: "New York",
    status: "active",
    statusBg: "#03C9D7",
    image: product3,
  },
  {
    id: 892586,
    customerName: "Anika Viseer",
    totalAmount: 93.31,
    item: "Night Lamp",
    location: "Turkey",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product16,
  },
  {
    id: 74835,
    customerName: "Miron Vitold",
    totalAmount: 23.99,
    item: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    statusBg: "red",
    image: product20,
  },
  {
    id: 94857,
    customerName: "Omar Darobe",
    totalAmount: 95.99,
    item: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product17,
  },
  {
    id: 944898,
    customerName: "Lulia albu",
    totalAmount: 17.99,
    item: "Skincare",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    image: product9,
  },
  {
    id: 235954,
    customerName: "Penjani",
    totalAmount: 59.99,
    item: "Headphone",
    location: "USA",
    status: "complete",
    statusBg: "#8BE78B",
    image: product31,
  },
  {
    id: 845954,
    customerName: "Jie Yan",
    totalAmount: 87.99,
    item: "Shoes",
    location: "USA",
    status: "pending",
    statusBg: "#FB9678",
    image: product32,
  },
  {
    id: 154534,
    customerName: "Danai",
    totalAmount: 122.99,
    item: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product21,
  },
  {
    id: 27489,
    customerName: "Miron",
    totalAmount: 87.99,
    item: "Ice Cream",
    location: "USA",
    status: "active",
    statusBg: "#03C9D7",
    image: product12,
  },
  {
    id: 24546,
    customerName: "Omar",
    totalAmount: 84.99,
    item: "Pan Cake",
    location: "Egypt",
    status: "complete",
    statusBg: "#8BE78B",
    image: product15,
  },
  {
    id: 874534,
    customerName: "Danai",
    totalAmount: 122.99,
    item: "Watch",
    location: "USA",
    status: "canceled",
    statusBg: "#FF5C8E",
    image: product18,
  },
];

export const employeesRows = [
  {
    id: 1,
    name: "Nancy Davolio",
    designation: "Sales Representative",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 2,
    name: "Nasimiyu Danai",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 3,
    name: "Iulia Albu",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeSix,
  },
  {
    id: 4,
    name: "Siegbert Gottfried",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeEleven,
  },
  {
    id: 5,
    name: "Omar Darobe",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeEight,
  },
  {
    id: 6,
    name: "Marwa Ahmed",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: AdminPhoto,
  },
  {
    id: 7,
    name: "Miron Vitold",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeNine,
  },
  {
    id: 8,
    name: "Nancy Khaled",
    designation: "Sales Representative",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeThree,
  },
  {
    id: 9,
    name: "Nasimiyu Danai",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 10,
    name: "Iulia Albu",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeSix,
  },
  {
    id: 11,
    name: "Siegbert Gottfried",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 12,
    name: "Omar Darobe",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeFive,
  },
  {
    id: 13,
    name: "Khaled Omar",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeEight,
  },
  {
    id: 14,
    name: "Miron Vitold",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeNine,
  },
  {
    id: 15,
    name: "May Ramy",
    designation: "Sales Representative",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeEleven,
  },
  {
    id: 16,
    name: "Nasimiyu Danai",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 17,
    name: "Iulia Albu",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeSix,
  },
  {
    id: 18,
    name: "Siegbert Gottfried",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 19,
    name: "Omar Darobe",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeFive,
  },
  {
    id: 20,
    name: "Penjani Inyene",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 21,
    name: "Miron Vitold",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: AdminPhoto,
  },
  {
    id: 22,
    name: "Nancy Davolio",
    designation: "Sales Representative",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeEleven,
  },
  {
    id: 23,
    name: "Ahmed Fathi",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeFive,
  },
  {
    id: 24,
    name: "Iulia Albu",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeEight,
  },
  {
    id: 25,
    name: "Siegbert Gottfried",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeNine,
  },
  {
    id: 26,
    name: "Rami Moussa",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeSix,
  },
  {
    id: 27,
    name: "Penjani Inyene",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 28,
    name: "Miron Vitold",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeThree,
  },
  {
    id: 30,
    name: "Nancy Davolio",
    designation: "Sales Representative",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeSeven,
  },
  {
    id: 31,
    name: "Nasimiyu Danai",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 32,
    name: "Iulia Albu",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeSix,
  },
  {
    id: 33,
    name: "Siegbert Gottfried",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeOne,
  },
  {
    id: 34,
    name: "Omar Daood",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeEight,
  },
  {
    id: 35,
    name: "Noor Fahmy",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: AdminPhoto,
  },
  {
    id: 36,
    name: "Mariam Nadr",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeEleven,
  },
  {
    id: 37,
    name: "Nancy Davolio",
    designation: "Sales Representative",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeThree,
  },
  {
    id: 38,
    name: "Nasimiyu Danai",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeEight,
  },
  {
    id: 39,
    name: "Iulia Albu",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 40,
    name: "Siegbert Gottfried",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeNine,
  },
  {
    id: 41,
    name: "Omar Darobe",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFive,
  },
  {
    id: 42,
    name: "Penjani Inyene",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeSix,
  },
  {
    id: 43,
    name: "Miron Vitold",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeOne,
  },
  {
    id: 44,
    name: "Nancy Davolio",
    designation: "Sales Representative",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeEleven,
  },
  {
    id: 45,
    name: "Mohamed Rami",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeFive,
  },
  {
    id: 46,
    name: "Iulia Albu",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 47,
    name: "Rania Abdo",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeThree,
  },
  {
    id: 48,
    name: "Omar Darobe",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeSix,
  },
  {
    id: 49,
    name: "Penjani Inyene",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeEight,
  },
  {
    id: 50,
    name: "Miron Vitold",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeNine,
  },
  {
    id: 51,
    name: "Farida Ahmed",
    designation: "Sales Representative",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 52,
    name: "Nasimiyu Danai",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 53,
    name: "Iulia Albu",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeEight,
  },
  {
    id: 54,
    name: "Siegbert Gottfried",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeThree,
  },
  {
    id: 55,
    name: "Omar Darobe",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeFive,
  },
  {
    id: 56,
    name: "Shadi Omar",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeSix,
  },
  {
    id: 57,
    name: "Miron Vitold",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 58,
    name: "Nancy Davolio",
    designation: "Sales Representative",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: AdminPhoto,
  },
  {
    id: 59,
    name: "Nasimiyu Danai",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 60,
    name: "Iulia Albu",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeEight,
  },
  {
    id: 61,
    name: "Siegbert Gottfried",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "Turkey",
    reportsTo: "Carson",
    image: EmployeeEleven,
  },
  {
    id: 62,
    name: "Nira Ahmed",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "Egypt",
    reportsTo: "Carson",
    image: EmployeeThree,
  },
  {
    id: 63,
    name: "Penjani Inyene",
    designation: "Marketing Head",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeFour,
  },
  {
    id: 64,
    name: "Miron Vitold",
    designation: "HR",
    hireDate: "01/02/2021",
    country: "USA",
    reportsTo: "Carson",
    image: EmployeeNine,
  },
];

export const customersRows = [
  {
    id: 1001,
    name: "Nirav Joshi",
    email: "nirav@gmail.com",
    image: CustomerThree,
    projectName: "Hosting Press HTML",
    status: "Active",
    statusBg: "#8BE78B",
    weeks: "40",
    budget: "$2.4k",
    location: "USA",
  },
  {
    id: 1002,
    name: "Sunil Joshi",
    email: "sunil@gmail.com",
    projectName: "Elite Admin",
    status: "Active",
    image: CustomerOne,
    statusBg: "#8BE78B",
    weeks: "11",
    budget: "$3.9k",
    location: "USA",
  },
  {
    id: 1003,

    name: "Andrew McDownland",
    email: "andrew@gmail.com",
    projectName: "Real Homes WP Theme",
    status: "Pending",
    image: CustomerTwo,
    statusBg: "#FEC90F",
    weeks: "19",
    budget: "$24.5k",
    location: "USA",
  },
  {
    id: 1004,
    name: "Christopher Jamil",
    email: "jamil@gmail.com",
    projectName: "MedicalPro WP Theme",
    status: "Completed",
    image: EmployeeOne,
    statusBg: "#8BE78B",
    weeks: "34",
    budget: "$16.5k",
    location: "USA",
  },
  {
    id: 1005,
    name: "Ahmed",
    email: "ahmed@gmail.com",
    projectName: "Weekly WP Theme",
    status: "Cancel",
    image: EmployeeFive,
    statusBg: "red",
    weeks: "34",
    budget: "$16.5k",
    location: "Egypt",
  },
  {
    id: 1006,
    name: "Nirav Joshi",
    email: "nirav@gmail.com",
    image: CustomerFour,
    projectName: "Hosting Press HTML",
    status: "Active",
    statusBg: "#8BE78B",
    weeks: "40",
    budget: "$2.4k",
    location: "Turkey",
  },
  {
    id: 1007,
    name: "Mai Fathi",
    email: "mai@gmail.com",
    projectName: "Elite Admin",
    status: "Active",
    image: EmployeeThree,
    statusBg: "#8BE78B",
    weeks: "11",
    budget: "$3.9k",
    location: "Egypt",
  },
  {
    id: 1008,
    name: "Andrew McDownland",
    email: "andrew@gmail.com",
    projectName: "Real Homes WP Theme",
    status: "Pending",
    image: CustomerTwo,
    statusBg: "#FEC90F",
    weeks: "19",
    budget: "$24.5k",
    location: "Turkey",
  },
  {
    id: 1009,
    name: "Christopher Jamil",
    email: "jamil@gmail.com",
    projectName: "MedicalPro WP Theme",
    status: "Completed",
    image: EmployeeSix,
    statusBg: "#8BE78B",
    weeks: "34",
    budget: "$16.5k",
    location: "USA",
  },
  {
    id: 1010,

    name: "Michael",
    email: "michael@gmail.com",
    projectName: "Weekly WP Theme",
    status: "Cancel",
    image: CustomerOne,
    statusBg: "red",
    weeks: "34",
    budget: "$16.5k",
    location: "USA",
  },
  {
    id: 1011,
    name: "Nirav Joshi",
    email: "nirav@gmail.com",
    image: EmployeeEleven,
    projectName: "Hosting Press HTML",
    status: "Active",
    statusBg: "#8BE78B",
    weeks: "40",
    budget: "$2.4k",
    location: "USA",
  },
  {
    id: 1012,
    name: "Sunil Joshi",
    email: "sunil@gmail.com",
    projectName: "Elite Admin",
    status: "Active",
    image: CustomerTwo,
    statusBg: "#8BE78B",
    weeks: "11",
    budget: "$3.9k",
    location: "Turkey",
  },
  {
    id: 1013,
    name: "Andrew McDownland",
    email: "andrew@gmail.com",
    projectName: "Real Homes WP Theme",
    status: "Pending",
    image: EmployeeOne,
    statusBg: "#FEC90F",
    weeks: "19",
    budget: "$24.5k",
    location: "USA",
  },
  {
    id: 1014,
    name: "Khaled Gamal",
    email: "khaled@gmail.com",
    projectName: "MedicalPro WP Theme",
    status: "Completed",
    image: EmployeeEight,
    statusBg: "#8BE78B",
    weeks: "34",
    budget: "$16.5k",
    location: "Egypt",
  },
  {
    id: 1015,
    name: "Rania Hani",
    email: "rania@gmail.com",
    projectName: "Weekly WP Theme",
    status: "Cancel",
    image: AdminPhoto,
    statusBg: "red",
    weeks: "34",
    budget: "$16.5k",
    location: "Egypt",
  },
  {
    id: 1016,
    name: "Nirav Joshi",
    email: "nirav@gmail.com",
    image: EmployeeNine,
    projectName: "Hosting Press HTML",
    status: "Active",
    statusBg: "#8BE78B",
    weeks: "40",
    budget: "$2.4k",
    location: "Turkey",
  },
  {
    id: 1017,
    name: "Sunil Joshi",
    email: "sunil@gmail.com",
    projectName: "Elite Admin",
    status: "Active",
    image: CustomerOne,
    statusBg: "#8BE78B",
    weeks: "11",
    budget: "$3.9k",
    location: "USA",
  },
  {
    id: 1018,
    name: "Andrew McDownland",
    email: "andrew@gmail.com",
    projectName: "Real Homes WP Theme",
    status: "Pending",
    image: CustomerTwo,
    statusBg: "#FEC90F",
    weeks: "19",
    budget: "$24.5k",
    location: "USA",
  },
  {
    id: 1019,
    name: "Christopher Jamil",
    email: "jamil@gmail.com",
    projectName: "MedicalPro WP Theme",
    status: "Completed",
    image: EmployeeSix,
    statusBg: "#8BE78B",
    weeks: "34",
    budget: "$16.5k",
    location: "Turkey",
  },
  {
    id: 1020,
    name: "Michael",
    email: "michael@gmail.com",
    projectName: "Weekly WP Theme",
    status: "Cancel",
    image: CustomerTwo,
    statusBg: "red",
    weeks: "34",
    budget: "$16.5k",
    location: "USA",
  },
  {
    id: 1021,
    name: "Nirav Joshi",
    email: "nirav@gmail.com",
    image: EmployeeFour,
    projectName: "Hosting Press HTML",
    status: "Active",
    statusBg: "#8BE78B",
    weeks: "40",
    budget: "$2.4k",
    location: "USA",
  },
  {
    id: 1022,
    name: "Sunil Joshi",
    email: "sunil@gmail.com",
    projectName: "Elite Admin",
    status: "Active",
    image: CustomerFour,
    statusBg: "#8BE78B",
    weeks: "11",
    budget: "$3.9k",
    location: "USA",
  },
  {
    id: 1023,
    name: "Andrew McDownland",
    email: "andrew@gmail.com",
    projectName: "Real Homes WP Theme",
    status: "Pending",
    image: CustomerTwo,
    statusBg: "#FEC90F",
    weeks: "19",
    budget: "$24.5k",
    location: "USA",
  },
  {
    id: 1024,
    name: "Christopher Jamil",
    email: "jamil@gmail.com",
    projectName: "MedicalPro WP Theme",
    status: "Completed",
    image: EmployeeOne,
    statusBg: "#8BE78B",
    weeks: "34",
    budget: "$16.5k",
    location: "Turkey",
  },
  {
    id: 1025,
    name: "Noor Amar",
    email: "noor@gmail.com",
    projectName: "Weekly WP Theme",
    status: "Cancel",
    image: AdminPhoto,
    statusBg: "red",
    weeks: "34",
    budget: "$16.5k",
    location: "Egypt",
  },
  {
    id: 1026,
    name: "Nirav Joshi",
    email: "nirav@gmail.com",
    image: CustomerThree,
    projectName: "Hosting Press HTML",
    status: "Active",
    statusBg: "#8BE78B",
    weeks: "40",
    budget: "$2.4k",
    location: "Turkey",
  },
  {
    id: 1027,
    name: "Sunil Joshi",
    email: "sunil@gmail.com",
    projectName: "Elite Admin",
    status: "Active",
    image: EmployeeSix,
    statusBg: "#8BE78B",
    weeks: "11",
    budget: "$3.9k",
    location: "USA",
  },
  {
    id: 1028,
    name: "Andrew McDownland",
    email: "andrew@gmail.com",
    projectName: "Real Homes WP Theme",
    status: "Pending",
    image: EmployeeEight,
    statusBg: "#FEC90F",
    weeks: "19",
    budget: "$24.5k",
    location: "USA",
  },
  {
    id: 1029,
    name: "Christopher Jamil",
    email: "jamil@gmail.com",
    projectName: "MedicalPro WP Theme",
    status: "Completed",
    image: CustomerOne,
    statusBg: "#8BE78B",
    weeks: "34",
    budget: "$16.5k",
    location: "USA",
  },
  {
    id: 1030,
    name: "Michael",
    email: "michael@gmail.com",
    projectName: "Weekly WP Theme",
    status: "Cancel",
    image: CustomerTwo,
    statusBg: "red",
    weeks: "34",
    budget: "$16.5k",
    location: "USA",
  },
  {
    id: 1031,
    name: "Nirav Joshi",
    email: "nirav@gmail.com",
    image: EmployeeNine,
    projectName: "Hosting Press HTML",
    status: "Active",
    statusBg: "#8BE78B",
    weeks: "40",
    budget: "$2.4k",
    location: "Turkey",
  },
  {
    id: 1032,
    name: "Sunil Joshi",
    email: "sunil@gmail.com",
    projectName: "Elite Admin",
    status: "Active",
    image: CustomerThree,
    statusBg: "#8BE78B",
    weeks: "11",
    budget: "$3.9k",
    location: "USA",
  },
  {
    id: 1033,
    name: "Andrew McDownland",
    email: "andrew@gmail.com",
    projectName: "Real Homes WP Theme",
    status: "Pending",
    image: EmployeeOne,
    statusBg: "#FEC90F",
    weeks: "19",
    budget: "$24.5k",
    location: "USA",
  },
  {
    id: 1034,
    name: "Christopher Jamil",
    email: "jamil@gmail.com",
    projectName: "MedicalPro WP Theme",
    status: "Completed",
    image: CustomerTwo,
    statusBg: "#8BE78B",
    weeks: "34",
    budget: "$16.5k",
    location: "Turkey",
  },
  {
    id: 1035,
    name: "Omar Mohamed",
    email: "omar@gmail.com",
    projectName: "Weekly WP Theme",
    status: "Cancel",
    image: EmployeeFive,
    statusBg: "red",
    weeks: "34",
    budget: "$16.5k",
    location: "Egypt",
  },
  {
    id: 1036,
    name: "Nirav Joshi",
    email: "nirav@gmail.com",
    image: CustomerFour,
    projectName: "Hosting Press HTML",
    status: "Active",
    statusBg: "#8BE78B",
    weeks: "40",
    budget: "$2.4k",
    location: "USA",
  },
  {
    id: 1037,
    name: "Sunil Joshi",
    email: "sunil@gmail.com",
    projectName: "Elite Admin",
    status: "Active",
    image: CustomerOne,
    statusBg: "#8BE78B",
    weeks: "11",
    budget: "$3.9k",
    location: "USA",
  },
  {
    id: 1038,
    name: "Andrew McDownland",
    email: "andrew@gmail.com",
    projectName: "Real Homes WP Theme",
    status: "Pending",
    image: CustomerFour,
    statusBg: "#FEC90F",
    weeks: "19",
    budget: "$24.5k",
    location: "USA",
  },
  {
    id: 1039,
    name: "Christopher Jamil",
    email: "jamil@gmail.com",
    projectName: "MedicalPro WP Theme",
    status: "Completed",
    image: EmployeeSix,
    statusBg: "#8BE78B",
    weeks: "34",
    budget: "$16.5k",
    location: "USA",
  },
  {
    id: 1040,
    name: "Michael",
    email: "michael@gmail.com",
    projectName: "Weekly WP Theme",
    status: "Cancel",
    image: CustomerFour,
    statusBg: "red",
    weeks: "34",
    budget: "$16.5k",
    location: "USA",
  },
];

export const kanbanColumns = [
  {
    id: "todo",
    title: "To Do",
  },
  {
    id: "doing",
    title: "In Progress",
  },
  {
    id: "done",
    title: "Done",
  },
];
export const tasksData = [
  {
    id: "Task 1",
    columnId: "todo",
    content: "Analyze the new requirements gathered from the customer.",
  },
  {
    id: "Task 2",
    columnId: "doing",
    content: "Improve application performance",
  },
  {
    id: "Task 3",
    columnId: "todo",
    content: "Arrange a web meeting with the customer to get new requirements.",
  },
  {
    id: "Task 4",
    columnId: "doing",
    content: "Fix the issues reported in the IE browser.",
  },
  {
    id: "Task 5",
    columnId: "doing",
    content: "Fix the issues reported by the customer.",
  },
  {
    id: "Task 6",
    columnId: "todo",
    content: "Validate new requirements",
  },
  {
    id: "Task 7",
    columnId: "todo",
    content: "Fix the issues reported in Safari browser.",
  },
  {
    id: "Task 8",
    columnId: "done",
    content: "Test the application in the IE browser.",
  },
  {
    id: "Task 9",
    columnId: "done",
    content: "Show the retrieved data from the server in grid control.",
  },
  {
    id: "Task 10",
    columnId: "doing",
    content: "Fix cannot open user’s default database SQL error.",
  },
  {
    id: "Task 11",
    columnId: "done",
    content: "Fix the issues reported in data binding.",
  },
  {
    id: "Task 12",
    columnId: "done",
    content: "Analyze SQL server 2008 connection.",
  },
  {
    id: "Task 13",
    columnId: "done",
    content: "Analyze grid control.",
  },
  {
    id: "Task 14",
    columnId: "todo",
    content: "Enhance editing functionality.",
  },
  {
    id: "Task 15",
    columnId: "todo",
    content: "Arrange web meeting with the customer to show editing demo.",
  },
  {
    id: "Task 16",
    columnId: "doing",
    content: "Improve the performance of the editing functionality.",
  },
  {
    id: "Task 17",
    columnId: "done",
    content: "Analyze stored procedures.",
  },
];
const todayDate = moment().format("YYYY-MM-DD");
export const initialEvents: EventType[] = [
  {
    id: "1",
    title: "Explosion of Betelgeuse Star",
    location: "Space Center USA",
    start: todayDate + "T04:00:00.000Z",
    end: todayDate + "T05:30:00.000Z",
  },
  {
    id: "2",
    title: "Thule Air Crash Report",
    location: "Newyork City",
    start:
      moment(todayDate).add(1, "days").format("YYYY-MM-DD") + "T06:30:00.000Z",
    end:
      moment(todayDate).add(1, "days").format("YYYY-MM-DD") + "T08:30:00.000Z",
  },
  {
    id: "3",
    title: "Blue Moon Eclipse",
    location: "Space Center USA",
    start:
      moment(todayDate).add(2, "days").format("YYYY-MM-DD") + "T04:00:00.000Z",
    end:
      moment(todayDate).add(2, "days").format("YYYY-MM-DD") + "T05:30:00.000Z",
  },
  {
    id: "4",
    title: "Meteor Showers in 2021",
    location: "Space Center USA",
    start:
      moment(todayDate).add(3, "days").format("YYYY-MM-DD") + "T07:30:00.000Z",
    end:
      moment(todayDate).add(3, "days").format("YYYY-MM-DD") + "T09:00:00.000Z",
  },
  {
    id: "5",
    title: "Milky Way as Melting pot",
    location: "Space Center USA",
    start:
      moment(todayDate).add(4, "days").format("YYYY-MM-DD") + "T06:30:00.000Z",
    end:
      moment(todayDate).add(4, "days").format("YYYY-MM-DD") + "T08:30:00.000Z",
  },
  {
    id: "6",
    title: "Mysteries of Bermuda Triangle",
    location: "Bermuda",
    start:
      moment(todayDate).add(4, "days").format("YYYY-MM-DD") + "T04:00:00.000Z",
    end:
      moment(todayDate).add(4, "days").format("YYYY-MM-DD") + "T05:30:00.000Z",
  },
  {
    id: "7",
    title: "Glaciers and Snowflakes",
    location: "Himalayas",
    start:
      moment(todayDate).add(5, "days").format("YYYY-MM-DD") + "T05:30:00.000Z",
    end:
      moment(todayDate).add(5, "days").format("YYYY-MM-DD") + "T07:30:00.000Z",
  },
  {
    id: "8",
    title: "Life on Mars",
    location: "Space Center USA",
    start:
      moment(todayDate).add(6, "days").format("YYYY-MM-DD") + "T03:30:00.000Z",
    end:
      moment(todayDate).add(6, "days").format("YYYY-MM-DD") + "T04:30:00.000Z",
  },
  {
    id: "9",
    title: "Alien Civilization",
    location: "Space Center USA",
    start:
      moment(todayDate).add(7, "days").format("YYYY-MM-DD") + "T05:30:00.000Z",
    end:
      moment(todayDate).add(7, "days").format("YYYY-MM-DD") + "T07:30:00.000Z",
  },
  {
    id: "10",
    title: "Wildlife Galleries",
    location: "Africa",
    start:
      moment(todayDate).add(8, "days").format("YYYY-MM-DD") + "T05:30:00.000Z",
    end:
      moment(todayDate).add(8, "days").format("YYYY-MM-DD") + "T07:30:00.000Z",
  },
  {
    id: "11",
    title: "Best Photography 2021",
    location: "London",
    start:
      moment(todayDate).add(9, "days").format("YYYY-MM-DD") + "T04:00:00.000Z",
    end:
      moment(todayDate).add(9, "days").format("YYYY-MM-DD") + "T05:00:00.000Z",
  },
  {
    id: "12",
    title: "Smarter Puppies",
    location: "Sweden",
    start:
      moment(todayDate).subtract(1, "days").format("YYYY-MM-DD") +
      "T04:30:00.000Z",
    end:
      moment(todayDate).subtract(1, "days").format("YYYY-MM-DD") +
      "T06:30:00.000Z",
  },
  {
    id: "13",
    title: "Myths of Andromeda Galaxy",
    location: "Space Center USA",
    start:
      moment(todayDate).subtract(3, "days").format("YYYY-MM-DD") +
      "T05:00:00.000Z",
    end:
      moment(todayDate).subtract(3, "days").format("YYYY-MM-DD") +
      "T06:00:00.000Z",
  },
  {
    id: "14",
    title: "Aliens vs Humans",
    location: "Research Center of USA",
    start:
      moment(todayDate).subtract(4, "days").format("YYYY-MM-DD") +
      "T04:30:00.000Z",
    end:
      moment(todayDate).subtract(4, "days").format("YYYY-MM-DD") +
      "T06:30:00.000Z",
  },
  {
    id: "15",
    title: "Facts of Humming Birds",
    location: "California",
    start:
      moment(todayDate).add(10, "days").format("YYYY-MM-DD") + "T04:00:00.000Z",
    end:
      moment(todayDate).add(10, "days").format("YYYY-MM-DD") + "T04:00:00.000Z",
  },
  {
    id: "16",
    title: "Sky Gazers",
    location: "Alaska",
    start:
      moment(todayDate).add(10, "days").format("YYYY-MM-DD") + "T05:30:00.000Z",
    end:
      moment(todayDate).add(10, "days").format("YYYY-MM-DD") + "T07:30:00.000Z",
  },
  {
    id: "17",
    title: "The Cycle of Seasons",
    location: "Research Center of USA",
    start:
      moment(todayDate).subtract(4, "days").format("YYYY-MM-DD") +
      "T00:00:00.000Z",
    end:
      moment(todayDate).subtract(4, "days").format("YYYY-MM-DD") +
      "T02:00:00.000Z",
  },
  {
    id: "18",
    title: "Space Galaxies and Planets",
    location: "Space Center USA",
    start:
      moment(todayDate).subtract(6, "days").format("YYYY-MM-DD") +
      "T11:30:00.000Z",
    end:
      moment(todayDate).subtract(6, "days").format("YYYY-MM-DD") +
      "T13:30:00.000Z",
  },
  {
    id: "19",
    title: "Lifecycle of Bumblebee",
    location: "San Fransisco",
    start:
      moment(todayDate).subtract(7, "days").format("YYYY-MM-DD") +
      "T00:30:00.000Z",
    end:
      moment(todayDate).subtract(7, "days").format("YYYY-MM-DD") +
      "T02:30:00.000Z",
  },
  {
    id: "20",
    title: "Alien Civilization",
    location: "Space Center USA",
    start:
      moment(todayDate).subtract(1, "days").format("YYYY-MM-DD") +
      "T10:30:00.000Z",
    end:
      moment(todayDate).subtract(1, "days").format("YYYY-MM-DD") +
      "T11:30:00.000Z",
  },
  {
    id: "21",
    title: "Alien Civilization",
    location: "Space Center USA",
    start:
      moment(todayDate).add(13, "days").format("YYYY-MM-DD") + "T08:30:00.000Z",
    end:
      moment(todayDate).add(13, "days").format("YYYY-MM-DD") + "T10:30:00.000Z",
  },
  {
    id: "22",
    title: "The Cycle of Seasons",
    location: "Research Center of USA",
    start:
      moment(todayDate).add(13, "days").format("YYYY-MM-DD") + "T03:30:00.000Z",
    end:
      moment(todayDate).add(13, "days").format("YYYY-MM-DD") + "T05:30:00.000Z",
  },
  {
    id: "23",
    title: "Sky Gazers",
    location: "Greenland",
    start:
      moment(todayDate).add(1, "days").format("YYYY-MM-DD") + "T05:30:00.000Z",
    end:
      moment(todayDate).add(1, "days").format("YYYY-MM-DD") + "T09:30:00.000Z",
  },
  {
    id: "24",
    title: "Facts of Humming Birds",
    location: "California",
    start: todayDate + "T01:00:00.000Z",
    end: todayDate + "T02:00:00.000Z",
  },
];
export const statusList = [
  {
    title: "Todo",
    columnId: "todo",
  },
  {
    title: "In Progress",
    columnId: "doing",
  },
  {
    title: "Done",
    columnId: "done",
  },
];
export const EditorData = `
  <div>
    Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

      Create a New React App
      When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

      As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

      Learn React
      People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

      If you prefer to learn by doing, start with our practical tutorial.
      If you prefer to learn concepts step by step, start with our guide to main concepts.
      Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

      First Examples
      The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

      React for Beginners
      If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!

      React for Designers
      If you’re coming from a design background, these resources are a great place to get started.

      JavaScript Resources
      The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
      </div>
      `;
export const areaChartData = [
  {
    name: 2015,
    US: 2.2,
    France: 2,
    Germany: 0.8,
  },
  {
    name: 2016,
    US: 3.4,
    France: 1.7,
    Germany: 1.3,
  },
  {
    name: 2017,
    US: 2.8,
    France: 1.8,
    Germany: 1.1,
  },
  {
    name: 2018,
    US: 1.6,
    France: 2.1,
    Germany: 1.6,
  },
  {
    name: 2019,
    US: 2.3,
    France: 2.3,
    Germany: 2,
  },
  {
    name: 2020,
    US: 2.5,
    France: 1.7,
    Germany: 1.7,
  },
  {
    name: 2021,
    US: 2.9,
    France: 1.5,
    Germany: 2.3,
  },
  {
    name: 2022,
    US: 3.8,
    France: 2.8,
    Germany: 2.7,
  },
  {
    name: 2023,
    US: 1.4,
    France: 1.5,
    Germany: 1.1,
  },
  {
    name: 2024,
    US: 3.1,
    France: 2.3,
    Germany: 2.3,
  },
];
export const areaChartLabels = [
  {
    value: "US",
    color: "#00BDAE",
  },
  {
    value: "France",
    color: "#3a3a3a",
  },
  {
    value: "Germany",
    color: "#3581d1",
  },
];
export const barChartData = [
  {
    name: "USA",
    Gold: 46,
    Silver: 37,
    Bronze: 38,
  },
  {
    name: "GBR",
    Gold: 27,
    Silver: 23,
    Bronze: 17,
  },
  {
    name: "CHIN",
    Gold: 26,
    Silver: 18,
    Bronze: 26,
  },
];
export const barChartLabels = [
  { value: "Gold", color: "#00BDAE" },
  { value: "Silver", color: "#3a3a3a" },
  { value: "Bronze", color: "#3581d1" },
];
export const pieChartDataTwo = [
  {
    name: 'Labour',
    value: 0.18
  },
  {
    name: 'Insurance',
    value: 0.16
  },
  {
    name: 'Taxes',
    value: 0.14
  },
  {
    name: 'Facilities',
    value: 0.18
  },
  {
    name: 'License',
    value: 0.11
  },
  {
    name: 'Production',
    value: 0.15
  },
  {
    name: 'Legal',
    value: 0.08
  }
  
  
  
 
]
export const colorsPieChartTwo = ["#00BDAE",  "#DD8ABD","#70AD47", "#F8B883","#f06292","#3581d1","#3a3a3a"];

