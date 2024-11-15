import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Upload from './pages/Upload/Upload';
import Vendors from './pages/Vendors/Vendors';
import VendorDetails from './pages/VendorDetails/VendorDetails';
import Documents from './pages/Documents/Documents';
import DocumentDetails from './pages/DocumentDetails/DocumentDetails';
import DocumentDetails2 from './pages/DocumentDetails2/DocumentDetails';
import Settings from './pages/Settings/Settings';
import MainLayout from './layouts/MainLayout/MainLayout';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendors/:id" element={<VendorDetails />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/document-details" element={<DocumentDetails2 />} />
          <Route path="/document/:id" element={<DocumentDetails />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
