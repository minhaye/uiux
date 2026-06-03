import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/layout";
import LandingPage from "./pages/landing";
import DoctorDashboard from "./pages/doctor/dashboard";
import DoctorPatients from "./pages/doctor/patients";
import PatientDetail from "./pages/doctor/patient-detail";
import DoctorExamination from "./pages/doctor/examination";
import DoctorChat from "./pages/doctor/chat";
import DoctorFeedback from "./pages/doctor/feedback";
import DoctorProfile from "./pages/doctor/profile";

import ExpertDashboard from "./pages/expert/dashboard";
import ExpertCases from "./pages/expert/cases";
import ExpertCaseDetail from "./pages/expert/case-detail";
import ExpertChat from "./pages/expert/chat";
import ExpertReports from "./pages/expert/reports";
import ExpertProfile from "./pages/expert/profile";

import ManagerChatbot from "./pages/manager/chatbot";
import ClinicDetail from "./pages/manager/clinic-detail";
import ClinicForm from "./pages/manager/clinic-form";
import ManagerDoctors from "./pages/manager/doctors";
import DoctorForm from "./pages/manager/doctor-form";
import DoctorDetail from "./pages/manager/doctor-detail";
import ManagerChat from "./pages/manager/manager-chat";
import ManagerAppointments from "./pages/manager/manager-appointments";
import ManagerSchedule from "./pages/manager/manager-schedule";
import ManagerAIData from "./pages/manager/ai-data";
import ManagerReports from "./pages/manager/reports";

import PatientHome from "./pages/patient/home";
import PatientLogin from "./pages/patient/login";
import PatientRegister from "./pages/patient/register";
import PatientDoctors from "./pages/patient/doctors";
import PatientDashboard from "./pages/patient/dashboard";
import PatientAppointments from "./pages/patient/appointments";
import PatientBook from "./pages/patient/book";
import PatientMedicalRecords from "./pages/patient/medical-records";
import PatientNotifications from "./pages/patient/notifications";
import PatientProfile from "./pages/patient/profile";

import ConsultantLogin from "./pages/consultant/login";
import ConsultantConsultation from "./pages/consultant/consultation";
import ConsultantHistory from "./pages/consultant/history";
import ConsultantHealthProfile from "./pages/consultant/health-profile";
import ConsultantSymptomTracking from "./pages/consultant/symptom-tracking";
import ConsultantAppointment from "./pages/consultant/appointment";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/consultant/login",
    element: <ConsultantLogin />,
  },
  {
    path: "/consultant",
    element: (
      <Layout
        role="consultant"
        userName="Nguyễn Văn Tuấn"
        userRole="Người cần tư vấn"
      />
    ),
    children: [
      { index: true, element: <ConsultantConsultation /> },
      { path: "consultation", element: <ConsultantConsultation /> },
      { path: "history", element: <ConsultantHistory /> },
      { path: "health-profile", element: <ConsultantHealthProfile /> },
      { path: "symptom-tracking", element: <ConsultantSymptomTracking /> },
      { path: "appointment", element: <ConsultantAppointment /> },
    ],
  },

  {
    path: "/patient/home",
    element: <PatientHome />,
  },
  {
    path: "/patient/login",
    element: <PatientLogin />,
  },
  {
    path: "/patient/register",
    element: <PatientRegister />,
  },
  {
    path: "/patient",
    element: (
      <Layout role="patient" userName="Nguyễn Văn An" userRole="Bệnh nhân" />
    ),
    children: [
      { path: "dashboard", element: <PatientDashboard /> },
      { path: "doctors", element: <PatientDoctors /> },
      { path: "appointments", element: <PatientAppointments /> },
      { path: "book", element: <PatientBook /> },
      { path: "medical-records", element: <PatientMedicalRecords /> },
      { path: "notifications", element: <PatientNotifications /> },
      { path: "profile", element: <PatientProfile /> },
    ],
  },

  {
    path: "/doctor",
    element: (
      <Layout role="doctor" userName="BS. Nguyễn Văn A" userRole="Bác sĩ" />
    ),
    children: [
      { index: true, element: <DoctorDashboard /> },
      { path: "patients", element: <DoctorPatients /> },
      { path: "patients/:id", element: <PatientDetail /> },
      { path: "examination", element: <DoctorExamination /> },
      { path: "chat", element: <DoctorChat /> },
      { path: "feedback", element: <DoctorFeedback /> },
      { path: "profile", element: <DoctorProfile /> },
    ],
  },

  {
    path: "/expert",
    element: (
      <Layout
        role="expert"
        userName="TS. Nguyễn Thị Lan"
        userRole="Chuyên gia"
      />
    ),
    children: [
      { index: true, element: <ExpertDashboard /> },
      { path: "cases", element: <ExpertCases /> },
      { path: "cases/:id", element: <ExpertCaseDetail /> },
      { path: "chat", element: <ExpertChat /> },
      { path: "reports", element: <ExpertReports /> },
      { path: "profile", element: <ExpertProfile /> },
    ],
  },

  {
    path: "/manager",
    element: (
      <Layout
        role="manager"
        userName="Nguyễn Quản Lý"
        userRole="Quản lý hệ thống"
      />
    ),
    children: [
      { index: true, element: <ManagerChatbot /> },
      { path: "clinic-profile", element: <ClinicDetail /> },
      { path: "clinic-registration", element: <ClinicForm /> },
      { path: "doctors", element: <ManagerDoctors /> },
      { path: "doctors/new", element: <DoctorForm /> },
      { path: "doctors/:id", element: <DoctorDetail /> },
      { path: "doctors/:id/edit", element: <DoctorForm /> },
      { path: "appointments", element: <ManagerAppointments /> },
      { path: "schedule", element: <ManagerSchedule /> },
      { path: "chat", element: <ManagerChat /> },
      { path: "ai-data", element: <ManagerAIData /> },
      { path: "reports", element: <ManagerReports /> },
    ],
  },
]);