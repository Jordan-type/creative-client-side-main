import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Login from "./components/auth/Login";
import Footer from "./components/layout/Footer";
import Signup from "./components/auth/Signup";
import ResetPassword from "./components/auth/ResetPassword";
import Otp from "./components/auth/Otp";
import Contact from "./pages/Contact";
import GetStart from "./pages/getStart/GetStart";
import Blog from "./pages/blog/Blog";
import BlogDetailsPage from "./pages/blog/BlogDetailsPage";
import { ProtectedRoute } from "protected-route-react";
import ServicesPage from "./components/authPages/Services/ServicesPage";
import ClientCategory from "./components/client/Category/ClientCategory";
import JobPost from "./components/client/JobPost/JobPost";
import CreativesCategory from "./components/creatives/Category/CreativesCategory";
import Gallery from "./pages/gallery/Gallery";
import PublicAuthProfile from "./components/public/AuthProfile/PublicAuthProfile";
import ClientProfile from "./components/client/ClientProfile/ClientProfile";
import RootProfile from "./components/authPages/RootProfile/RootProfile";
import RootDashboard from "./components/authPages/RootDashboard/RootDashboard";
import ClientDashboard from "./components/client/ClientDashboard/ClientDashboard";
import ClientOrders from "./components/client/ClientDashboard/ClientOrders/ClientOrders";
import ClientReviews from "./components/client/ClientDashboard/ClientReviews/ClientReviews";

// Part - 2
// Here am using "Protected" routes from npm libraries. For Temporary. Will be removed in future. You can create if you want
// For Loding Animation using React Spring
// Axios for Fetching data
// Redux Toolkit for Manage state
// React Rating for rating gigs

function App() {
    const { pathname } = useLocation();

    const isAuthenticated = false;

    return (
        <>
            {pathname !== "/login" &&
                pathname !== "/client/register" &&
                pathname !== "/client/category" &&
                pathname !== "/client/post/job" &&
                pathname !== "/creative/register" &&
                pathname !== "/creative/category" &&
                pathname !== "/forgot" &&
                pathname !== "/getstart" &&
                pathname !== "/otp" && (
                    <Navbar isAuthenticated={isAuthenticated} />
                )}
            <Routes>
                {/* ====================== */}
                {/* ====  Routes For Public ==== */}
                {/* ====================== */}

                <Route exact path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetailsPage />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="/getstart" element={<GetStart />} />
                <Route path="/gallery" element={<Gallery />} />

                <Route
                    exact
                    path="/"
                    element={
                        <ProtectedRoute
                            isAuthenticated={!isAuthenticated}
                            redirect="/profile"
                        >
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route exact path="/about" element={<About />} />
                <Route
                    exact
                    path="/login"
                    element={
                        <ProtectedRoute
                            isAuthenticated={!isAuthenticated}
                            redirect="/profile"
                        >
                            <Login />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/creative/register"
                    element={
                        <ProtectedRoute
                            isAuthenticated={!isAuthenticated}
                            redirect="/profile"
                        >
                            <Signup />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/client/register"
                    element={
                        <ProtectedRoute
                            isAuthenticated={!isAuthenticated}
                            redirect="/profile"
                        >
                            <Signup />
                        </ProtectedRoute>
                    }
                />

                <Route exact path="/forgot" element={<ResetPassword />} />
                <Route exact path="/otp" element={<Otp />} />

                <Route
                    exact
                    path="/profile"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            redirect="/login"
                        >
                            <RootProfile />
                        </ProtectedRoute>
                    }
                />

                {/* Protected Dashboard route */}

                <Route
                    exact
                    path="/dashboard"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            redirect="/login"
                        >
                            <RootDashboard />
                        </ProtectedRoute>
                    }
                />

                {/*  */}
                {/* Proteced Routes needed */}
                {/*  */}

                {/* ====================== */}
                {/* =========  Routes For Clients   ============= */}
                {/* ====================== */}

                <Route
                    path="/creatives/services"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            redirect={"/login"}
                        >
                            <ServicesPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    exact
                    path="/client/category"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            redirect="/login"
                        >
                            <ClientCategory />
                        </ProtectedRoute>
                    }
                />

                <Route
                    exact
                    path="/client/post/job"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            redirect="/login"
                        >
                            <JobPost />
                        </ProtectedRoute>
                    }
                />

                <Route
                    exact
                    path="/client/profile"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            redirect="/login"
                        >
                            <ClientProfile />
                        </ProtectedRoute>
                    }
                />

                {/* Client Dashboard */}

                <Route
                    exact
                    path="/client/dashboard"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            redirect="/login"
                        >
                            <ClientDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/client/dashboard/orders"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            redirect="/login"
                        >
                            <ClientOrders />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/client/dashboard/reviews"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            redirect="/login"
                        >
                            <ClientReviews />
                        </ProtectedRoute>
                    }
                />

                {/* ====================== */}
                {/* =========  Routes For Creatives   ============= */}
                {/* ====================== */}

                <Route
                    exact
                    path="/creative/category"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            redirect="/login"
                        >
                            <CreativesCategory />
                        </ProtectedRoute>
                    }
                />

                {/* THIS USERNAME ROUTE FOR PUBLIC. Initially a public can visit user profile. If user already loggin they will redirected to their profile */}

                <Route path="/:username" element={<PublicAuthProfile />} />
            </Routes>
            {pathname !== "/login" &&
                pathname !== "/client/register" &&
                pathname !== "/client/category" &&
                pathname !== "/client/post/job" &&
                pathname !== "/creative/category" &&
                pathname !== "/creative/register" &&
                pathname !== "/forgot" &&
                pathname !== "/getstart" &&
                pathname !== "/otp" && <Footer />}
        </>
    );
}

export default App;
