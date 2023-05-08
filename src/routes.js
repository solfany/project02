// 여기가 사이드바 메뉴 조종
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Attendance from "views/Attendance.js";
import Notifications from "views/Notifications.js";
import Typography from "views/Typography.js";
import Payroll from "views/Payroll";

var routes = [
  {
    path: "/notifications",
    name: "근무일정",
    // rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "출퇴근 기록",
    // rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "휴가",
    // rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin",
  },
  {
    path: "/attendance",
    name: "근태 정산",
    icon: "tim-icons icon-bell-55",
    component: Attendance,
    layout: "/admin",
  },
  {
    path: "/payroll",
    name: "급여 관리",
    icon: "tim-icons icon-single-02",
    component: Payroll,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "회사 설정",
  //   // rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin",
  // },
  {
    path: "/typography",
    name: "프로필",
    // rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "www.naver.com",
    name: "메신저",
    // rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    // component: naver,
    layout: "/naver.com",
  },
  {
    path: "www.naver.com",
    name: "게시판",
    // rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    // component: naver,
    layout: "/naver.com",
  },
];
export default routes;
