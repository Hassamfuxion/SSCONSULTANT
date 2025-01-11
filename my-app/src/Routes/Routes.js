import { createBrowserRouter } from "react-router-dom";
import App from "../App";  // Home page (App.js)
import About from "../About";  // About page (About.js)
import Service from "../service";  // Service page (service.js)
import Contact from "../Contact";  // Contact page (contact.js)
import Main from "../main"; // Import Main layout component
import SSConsultant from "../App"; // Home page (App.js)
import SSConsultant2 from "../About";
import FinanceManagement from "../financemanagement";  // Correct path for finance management
import HumanResource from "../humanresource";  // New Page
import MRP from "../MRP";  // New Page
import GSM from "../GSM";  // New Page
import Packing from "../Packing";  // New Page
import Shipment from "../Shipment";  // New Page
import ThreadManagement from "../ThreadManagement";  // New Page
import VehicleManagement from "../VehicleManagement";  // New Page
import FixedAssetManagement from "../FixedAssetManagement";  // New Page

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,  // Main layout
    children: [
      {
        path: "/",
        element: <SSConsultant />,  // Home page (App.js)
      },
      {
        path: "/about",
        element: <SSConsultant2 />,  // About page (About.js)
      },
      {
        path: "/service",
        element: <Service />,  // Service page (service.js)
      },
      {
        path: "/contact",
        element: <Contact />,  // Contact page (contact.js)
      },
      {
        path: "/financemanagement",
        element: <FinanceManagement />,  // Finance Management
      },
      {
        path: "/humanresource",
        element: <HumanResource />,  // Human Resource Management
      },
      {
        path: "/mrp",
        element: <MRP />,  // MRP
      },
      {
        path: "/gsm",
        element: <GSM />,  // GSM
      },
      {
        path: "/packing",
        element: <Packing />,  // Packing
      },
      {
        path: "/shipment",
        element: <Shipment />,  // Shipment
      },
      {
        path: "/threadmanagement",
        element: <ThreadManagement />,  // Thread Management
      },
      {
        path: "/vehiclemanagement",
        element: <VehicleManagement />,  // Vehicle Management
      },
      {
        path: "/fixedassetmanagement",
        element: <FixedAssetManagement />,  // Fixed Asset Management
      },
    ],
  },
]);
