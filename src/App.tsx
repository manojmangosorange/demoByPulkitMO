import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import CloudStrategy from "./pages/CloudStrategy";
import DataMigration from "./pages/DataMigration";
import ManagedServices from "./pages/ManagedServices";
import ITServices from "./pages/ITServices";
import StaffingSolutions from "./pages/StaffingSolutions";
import HMIS from "./pages/HMIS";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import OpenSource from "./pages/OpenSource";
import CustomSoftware from "./pages/CustomSoftware";
import Ecommerce from "./pages/Ecommerce";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import HardwareServices from "./pages/HardwareServices";
import ITConsulting from "./pages/ITConsulting";
import SystemIntegration from "./pages/SystemIntegration";
import TechnicalSupport from "./pages/TechnicalSupport";
 

import OffshoreStaffing from "./pages/staffing/OffshoreStaffing";
import OnPremiseStaffing from "./pages/staffing/OnPremiseStaffing";
import ContractSolutions from "./pages/staffing/ContractSolutions";
import PayrollOutsourcing from "./pages/staffing/PayrollOutsourcing";
import ManagementConsulting from "./pages/staffing/ManagementConsulting";
import StaffingSolutionsDetail from "./pages/staffing/StaffingSolutionsDetail";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDashboardFull from "./pages/admin/AdminDashboardFull";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminApplicants from "./pages/admin/AdminApplicants";
import AdminSettings from "./pages/admin/AdminSettings";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminOnlyRoute from "./components/admin/AdminOnlyRoute";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import SupportChatbot from "@/components/SupportChatbot";

// Cloud Infrastructure Pages
import AmazonWebServices from '@/pages/cloud/AmazonWebServices';
import MicrosoftAzure from '@/pages/cloud/MicrosoftAzure';
import GoogleCloudPlatform from '@/pages/cloud/GoogleCloudPlatform';
import MultiCloudSolutions from '@/pages/cloud/MultiCloudSolutions';
import InfrastructureAssessment from '@/pages/cloud/InfrastructureAssessment';
import LegacyModernization from '@/pages/cloud/LegacyModernization';
import CloudSecurity from '@/pages/cloud/CloudSecurity';
import BackupSolutions from '@/pages/cloud/BackupSolutions';
import DisasterRecovery from '@/pages/cloud/DisasterRecovery';
import ComplianceManagement from '@/pages/cloud/ComplianceManagement';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/home" element={<Index />} />
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cloud-strategy" element={<CloudStrategy />} />
          <Route path="/data-migration" element={<DataMigration />} />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/it-services" element={<ITServices />} />

          {/* Staffing Hub & Services */}
          <Route path="/staffing" element={<StaffingSolutions />} />
          
          <Route path="/staffing/offshore-staffing" element={<OffshoreStaffing />} />
          <Route path="/staffing/on-premise-staffing" element={<OnPremiseStaffing />} />
          <Route path="/staffing/contract-solutions" element={<ContractSolutions />} />
          <Route path="/staffing/payroll-outsourcing" element={<PayrollOutsourcing />} />
          <Route path="/staffing/management-consulting" element={<ManagementConsulting />} />
          <Route path="/staffing/staffing-solutions" element={<StaffingSolutionsDetail />} />
          <Route path="/staffing-solutions" element={<Navigate to="/staffing" replace />} />

          <Route path="/hmis" element={<HMIS />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/custom-software" element={<CustomSoftware />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/hardware-services" element={<HardwareServices />} />
          <Route path="/it-consulting" element={<ITConsulting />} />
          <Route path="/system-integration" element={<SystemIntegration />} />
          <Route path="/technical-support" element={<TechnicalSupport />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career" element={<Navigate to="/careers" replace />} />
          
          {/* Cloud Infrastructure Routes */}
          <Route path="/cloud/aws" element={<AmazonWebServices />} />
          <Route path="/cloud/azure" element={<MicrosoftAzure />} />
          <Route path="/cloud/gcp" element={<GoogleCloudPlatform />} />
          <Route path="/cloud/multi-cloud" element={<MultiCloudSolutions />} />
          <Route path="/cloud/infrastructure-assessment" element={<InfrastructureAssessment />} />
          <Route path="/cloud/legacy-modernization" element={<LegacyModernization />} />
          <Route path="/cloud/security" element={<CloudSecurity />} />
          <Route path="/cloud/backup" element={<BackupSolutions />} />
          <Route path="/cloud/disaster-recovery" element={<DisasterRecovery />} />
          <Route path="/cloud/compliance" element={<ComplianceManagement />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <AdminOnlyRoute>
              <AdminDashboardFull />
            </AdminOnlyRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/jobs" element={
            <ProtectedRoute>
              <AdminJobs />
            </ProtectedRoute>
          } />
          <Route path="/admin/applicants" element={
            <ProtectedRoute>
              <AdminApplicants />
            </ProtectedRoute>
          } />
          <Route path="/admin/settings" element={
            <ProtectedRoute>
              <AdminSettings />
            </ProtectedRoute>
          } />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SupportChatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
