import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./Home/Main";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Details from "./Blog/Details";
import Career from "./Career/Career";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
import ProjectDetails from "./Project/Details";
import CareerDetails from "./Career/Details";
import Services from "./Services/Services";
import Estate from "./Estate/Estate";
import BlogView from "./Admin/Blog/BlogView";
import { Toaster } from "react-hot-toast";
import ListTeam from "./Admin/Team/ListTeam";
import ContactList from "./Admin/contactlist/ContactList";
function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/estate" element={<Estate />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/details" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/details" element={<Details />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/career" element={<Career />} />
        <Route path="/career/details" element={<CareerDetails />} />



        {/* Admin Chnagement */}
        {/* <Route path="/admin/blog-add" element={<AddBlog />} /> */}

        <Route path="/admin-blog/view" element={<BlogView />} />

        <Route path="/admin/team" element={<ListTeam />} />

        <Route path="/admin/contact-list" element={<ContactList />} />

      </Routes>
    </Router>
  );
}
export default App;
