import { Route, Routes } from 'react-router-dom'
import AddCourse from './components/AddCourse'
import AddStudent from './components/AddStudent'
import AllCourses from './components/AllCourses'
import AllStudents from './components/AllStudents'
import CollectFees from './components/CollectFees'
import CourseDetail from './components/CourseDetail'
import PaymentHistory from './components/PaymentHistory'
import StudentProfile from './components/StudentProfile'
import DashboardHome from './components/dashboardHome'
import { Toaster } from './components/ui/sonner'
import Dashboard from './pages/Dashboard'
import ErrorBoundary from './pages/Errorboundary'


function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="addcourse" element={<AddCourse />} />
            <Route path="courses" element={<AllCourses />} />
            <Route path="courses/:id" element={<CourseDetail />} />
            <Route path="addstudent" element={<AddStudent />} />
            <Route path="students" element={<AllStudents />} />
            <Route path="students/:id" element={<StudentProfile />} />
            <Route path="collectfees" element={<CollectFees />} />
            <Route path="paymenthistory" element={<PaymentHistory />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </ErrorBoundary>

  )
}

export default App
