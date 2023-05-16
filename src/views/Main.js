import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Maps from './../views/Map';
import './../components/Vacation/Map.css'
import { Row, Col } from 'reactstrap';
import '../assets/css/styles.css';
import Attendance from './Attendance';
import AttendCalendar from './../components/Attendance/AttendCalendar'

function dashboardData() {
  return fetch('https://raw.githubusercontent.com/solfany/project02/master/src/views/Dashboard.js')
    .then(response => response.json())
    .then(data => data.events);
}
function vacationData() {
  return fetch('https://raw.githubusercontent.com/solfany/project02/master/src/views/Map.js')
    .then(response => response.json())
    .then(data => data.events);
}
function attendanceData() {
  return fetch('https://github.com/solfany/project02/blob/master/src/views/Attendance.js')
    .then(response => response.json())
    .then(data => data.events);
}
function attendCalendarData() {
  return fetch('https://github.com/solfany/project02/blob/master/src/components/Attendance/EmployeeData.js')
  .then(response => response.json())
  .then(data => data.events);
}

function Main() {
  // 첫번째 div박스 
  const [vacation, setVacation] = useState([]); // 메인페이지 휴가일정 박스
  const [dashboard, setDashboard] = useState([]); // 메인페이지 달력 박스
  const [attendance, setAttendance] = useState([]); // 메인페이지 근태정산 박스
  const [attendCalendar,setAttendCalendar] = useState([]);
  // 휴가관리 박스
  useEffect(() => {
    dashboardData().then(events => {
      setDashboard(events);
    });
  }, []);

  // 근무 일정 박스
  useEffect(() => {
    vacationData().then(events => {
      setVacation(events);
    });
  }, []);
  // 근태정산 박스
  useEffect(() => {
    attendanceData().then(events => {
      setAttendance(events);
    });
  }, []);
  // 출퇴근 박스
  useEffect(() => {
    attendCalendarData().then(events => {
      setAttendCalendar(events);
    })
  })

  return (
      <div className="content">
      <Row>
        <Col xs={6} className="box-container">
          <div className="box">
            <div className="box-content">
            <div style={{height: '100%', overflow: 'hidden'}}>
              <Maps events={vacation} setEvents={setVacation} style={{height: '100%'}} />
            </div>
            </div>
          </div>
        </Col>
        <Col xs={6} className="box-container">
          <div className="box">
            <div className="box-content">
              <div style={{height: '100%', overflow: 'hidden'}}>
                <Dashboard events={dashboard} setEvents={setDashboard} style={{height: '100%'}} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="box-container">
          <div className="box" >
            <div className="box-content">
            <div style={{height: '100%', overflow: 'hidden'}}>
                <Attendance events={attendance} setEvents={setAttendance} style={{height: '100%'}} />
            </div>
            </div>
          </div>
        </Col>
        <Col xs={6} className="box-container">
          <div className="box">
            <div className="box-content">
              <h1>출퇴근 현황</h1>
              <div style={{height: '100%', overflow:'hidden'}}>
                <AttendCalendar events={attendCalendar} setEvents={setAttendCalendar} style={{height: '100%'}} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </div>
  );
}

export default Main;
