// 여기가 사이드바 메뉴 조종
import Dashboard from 'views/Dashboard.js';
import MainLogin from 'views/MainLogin';
import Icons from 'views/Icons.js';
import Map from 'views/Map.js';
// import Notifications from 'views/Notifications.js';
import TableList from 'views/TableList.js';
import Typography from 'views/Typography.js';
import UserProfile from 'views/UserProfile.js';
import Bulletin from 'views/Bulletin.js';
// import Message from 'views/Message';
import Chat from 'views/Chat';


var routes = [
  {
    path: '/MainLogin',
    name: '로그인',
    icon: 'tim-icons icon-chart-pie-36',
    component: MainLogin,
    layout: '/admin',
  },
  {
    path: '/dashboard',
    name: '근무일정',
    icon: 'tim-icons icon-chart-pie-36',
    component: Dashboard,
    layout: '/admin',
    props: true,
    //여기 props로 인해 다른 곳에서도 props로 사용 가능한것인가?
  },
  {
    path: '/icons',
    name: '출퇴근 기록',
    icon: 'tim-icons icon-atom',
    component: Icons,
    layout: '/admin',
  },
  {
    path: '/map',
    name: '휴가',
    icon: 'tim-icons icon-pin',
    component: Map,
    layout: '/admin',
  },
  {
    path: '/attendance',
    name: '근태 정산',
    icon: 'tim-icons icon-bell-55',
    // component: Attendance,
    layout: '/admin',
  },
  {
    path: '/user-profile',
    name: '급여 관리',
    icon: 'tim-icons icon-single-02',
    component: UserProfile,
    layout: '/admin',
  },
  {
    path: '/tables',
    name: '회사 설정',
    icon: 'tim-icons icon-puzzle-10',
    component: TableList,
    layout: '/admin',
  },
  {
    path: '/typography',
    name: '프로필',
    icon: 'tim-icons icon-align-center',
    component: Typography,
    layout: '/admin',
  },
  {
    path: '/Chat',
    name: '메신저',
    icon: 'tim-icons icon-world',
    component: Chat,
    layout: '/admin',
  },
  {
    path: '/bulletin',
    name: '게시판',
    icon: 'tim-icons icon-world',
    component: Bulletin,
    layout: '/admin',
    props: { myProp: 'someValue' }, // props를 전달하기 위해서는 이와같은 형식을 따라야 함
  },
];
export default routes;
