import logo from './logo.png';
import { faTachometerAlt, faFileAlt, faFile, faFolderOpen, faTags, faComment, faCog, 
       faUsers, faEllipsisH, faPlus, faImages} from '@fortawesome/free-solid-svg-icons';
import user1 from './user_img.png';
import user2 from './user_img.png';
import user3 from './user_img.png';
import user4 from './user_img.png';
import user5 from './user_img.png';
import user6 from './user_img.png';
import user7 from './user_img.png';
import user8 from './user_img.png';

const Assets = {
    logo,
}



/*For Left Menu*/
export const menuOptions = [
    { name: 'Dashboard', path: '/', count: 5, icon: faTachometerAlt },
    { name: 'Pages', path: '/pages', count: 3, icon: faFileAlt },
    { name: 'Posts', path: '/posts', count: 8, icon: faFile },
    { name: 'Media Files', path: '/mediafiles', count: 12, icon: faFolderOpen },
    { name: 'Categories', path: '/categories', count: 2, icon: faTags },
    { name: 'Tags', path: '/tags', count: 5, icon: faTags },
    { name: 'Comments', path: '/comments', count: 10, icon: faComment },
    { name: 'Settings', path: '/settings', count: 1, icon: faCog },
    { name: 'User', path: '/user', count: 0, icon: faUsers }
];


export const userImages = [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
];


export const firstSection = [
    {
        _id: "1",
        title: "Pages",
        options: faEllipsisH,
        noDisplay: "1,345",
        addIcon: faPlus,
        viewAll: "View All",
        backgroundColor: "rgb(69, 196, 69)", // Example color for Pages
        fontColor: "white"
    },
    {
        _id: "2",
        title: "Posts",
        options: faEllipsisH,
        noDisplay: "12,456",
        addIcon: faPlus,
        viewAll: "View All",
        backgroundColor: "rgb(177, 69, 198)", // Example color for Posts
        fontColor: "white"
    },
    {
        _id: "3",
        title: "Users",
        options: faEllipsisH,
        noDisplay: "21",
        addIcon: faPlus,
        viewAll: "View All",
        backgroundColor: "rgb(198, 97, 69)", // Example color for Users
        fontColor: "white"
    },
    {
        _id: "4",
        title: "Files",
        options: faEllipsisH,
        noDisplay: "1,220",
        addIcon: faPlus,
        viewAll: "View All",
        backgroundColor: "rgb(62, 155, 192)", // Example color for Files
        fontColor: "white"
    },
    {
        _id: "5",
        title: "Categories",
        options: faEllipsisH,
        noDisplay: "65",
        addIcon: faPlus,
        viewAll: "View All",
        backgroundColor: "rgb(3, 6, 26)", // Example color for Categories
        fontColor: "white"
    },
    {
        _id: "6",
        title: "Comments",
        options: faEllipsisH,
        noDisplay: "9,876",
        addIcon: faPlus,
        viewAll: "View All",
        backgroundColor: "white", // Example color for Comments
        fontColor: "rgb(104, 100, 100)",
    }
];



export const latestEventsData = [
    {
      id: 1,
      icon: faFileAlt , // Font Awesome icon class for a document/page
      time: '10:30 AM',
      option: 'New Page',
      user: 'John Doe',
      message: "About Page Company",
      fontColor: "green"
    },
    {
      id: 2,
      icon: faComment , 
      time: '11:00 AM',
      option: 'New Comment',
      user: 'Jane Smith',
      message: "You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer...",
      fontColor: "purple"
    },
    {
      id: 3,  
      icon: faTags, 
      time: '12:45 PM',
      option: 'New User',
      user: 'Alice Johnson',
      message: "Category<<Templates>>",
      fontColor: "blue"
    },
    {
      id: 4,  
      icon: faUsers, 
      time: '01:15 PM',
      option: 'Updated Settings',
      user: 'Robert Brown',
      message: "New User Alberta Colon",
      fontColor: "orange"
    },
    {
        id: 5,  
        icon: faImages, 
        time: '01:15 PM',
        option: 'Updated Settings',
        user: 'Robert Brown',
        message: "New User Alberta Colon",
        fontColor: "pink"
      }
  ];

  //For UserStats
  export const monthData = [
    { name: "8",
      uv: 4000,
      pv: 8000,
      amt: 2400
    },
    { name: "9",
      uv: 4000,
      pv: 7000,
      amt: 2400
    },
    { name: "10",
      uv: 6700,
      pv: 2400,
      amt: 2400
    },
    { name: "11",
      uv: 3000,
      pv: 1398,
      amt: 2210 
    },
    { name: "12",
      uv: 4000,
      pv: 8000,
      amt: 2400
    },
    { name: "13",
      uv: 2000,
      pv: 7000, 
      amt: 2290 
    },
    { name: "14",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    { name: "15", 
      uv: 2780, 
      pv: 3908, 
      amt: 2000 
    },
    { name: "16",
      uv: 4000,
      pv: 8000,
      amt: 2400
    },
    { name: "17", 
      uv: 2780, 
      pv: 5000, 
      amt: 2000 
    },
    { name: "18", 
      uv: 2780, 
      pv: 3908, 
      amt: 2000 
    },
    { name: "19", 
      uv: 2780, 
      pv: 3908, 
      amt: 2000 
    },
    { name: "20",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    { name: "21", 
      uv: 2780, 
      pv: 3908, 
      amt: 2000 
    },
    { name: "22",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    { name: "23", 
      uv: 2780, 
      pv: 3908, 
      amt: 2000 
    },
    { name: "24", 
      uv: 2780, 
      pv: 3908, 
      amt: 2000 
    },
    { name: "25",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    { name: "27", 
      uv: 2780, 
      pv: 3908, 
      amt: 2000 
    },
    { name: "28",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    { name: "29", 
      uv: 2780, 
      pv: 3908, 
      amt: 2000 
    },

  ];
  
  export const sixMonthData = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  ];
  
  export const yearData = [
    { name: "Q1", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Q2", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Q3", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Q4", uv: 2780, pv: 3908, amt: 2000 },
  ];
  

  
//For Statistics
export const nowData =[
  
    { name: "8",
      uv: 4000,
      pv: 8000,
      amt: 2400
    },
    { name: "9",
      uv: 4000,
      pv: 7000,
      amt: 2400
    },
    { name: "10",
      uv: 6700,
      pv: 2400,
      amt: 2400
    },
    { name: "11",
      uv: 3000,
      pv: 1398,
      amt: 2210 
    },
]

export const TodayData = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
];


export const statisticsMonthData = [
  { name: "Q1", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Q2", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Q3", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Q4", uv: 2780, pv: 3908, amt: 2000 },
];

//For Site Speed
export const now =[
  {
    id: 1,
    value: "75",
    message: "Grade",
  },
  {
    id: 2,
    value: "1.9mb",
    message: "Page Size",
  },
  {
    id: 3,
    value: "631 mc",
    message: "Load Time",
  },
  {
    id: 4,
    value: "42",
    message: "Requests",
  },
]

export const today = [
  {
    id: 1,
    value: "80",  
    message: "Grade",
  },
  {
    id: 2,
    value: "2.1mb", 
    message: "Page Size",
  },
  {
    id: 3,
    value: "500 ms",  
    message: "Load Time",
  },
  {
    id: 4,
    value: "50", 
    message: "Requests",
  },
];
export const month = [
  {
    id: 1,
    value: "100",  // Example value for today
    message: "Grade",
  },
  {
    id: 2,
    value: "8.1mb",  // Example value for today
    message: "Page Size",
  },
  {
    id: 3,
    value: "1000 ms",  
    message: "Load Time",
  },
  {
    id: 4,
    value: "22", 
    message: "Requests",
  },
];



export default Assets;