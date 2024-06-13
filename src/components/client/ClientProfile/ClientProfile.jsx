import React, { Suspense, lazy } from "react";

import avatarImg from "../../../assets/author.jpg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostInfo from "./PostInfo/PostInfo";
import ExploreInfo from "./ExploreInfo/ExploreInfo";
import PostLoader from "../../loader/Client/Profile/PostLoader";

// Here am using lazy loading because am not sure about the API yet.

const LazyPost = lazy(() => import("./PostInfo/PostInfo"));

const user = {
    username: "RinaMaria",
    userImage: avatarImg,
    userRating: 4.5,
    userInbox: [
        {
            sender: "John Doe",
            message: "Hey Rina, how's it going?",
            timestamp: "10:00 AM",
            avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        },
        {
            sender: "Jane Smith",
            message: "Hi there! Don't forget our meeting tomorrow.",
            timestamp: "03:30 PM",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        },
        // Add more inbox messages as needed
    ],
    userReview: [
        {
            reviewer: "Alice Johnson",
            rating: 5,
            reviewText: "Rina is an excellent person to work with!",
            timestamp: "2023-08-25",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        },
        {
            reviewer: "Bob Thompson",
            rating: 4,
            reviewText: "Had a great experience with Rina. Very professional.",
            timestamp: "2023-08-20",
            avatar: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/06/Henry-Cavill-Superman.png?w=1024",
        },
        // Add more reviews as needed
    ],
    userPosts: [
        {
            id: 1234,
            title: "My Travel Adventure",
            content:
                "Just came back from an amazing trip. Here are some highlights... Mentioning @janesmith and @johndoe",
            timestamp: "2023-08-15",
            postImage:
                "https://media.gq-magazine.co.uk/photos/604a4bcdb72c6dcbd4f9b69f/16:9/w_2560%2Cc_limit/11032020_K_HP.jpg",
            mentions: [
                {
                    username: "batman",
                    avatar: "https://mixed-news.com/en/wp-content/uploads/2022/11/Batman-Arkham-VR-1200x675.jpg",
                },
                {
                    username: "sheikhjalaldeen",
                    avatar: "https://images.squarespace-cdn.com/content/v1/586d154f03596e5605562ea7/1598279488284-0QXRFMTGA1QK0RSPXVQH/Sheikh+Jalaldeen.jpg",
                },
            ],
            liked: false, // New property to indicate if post is liked
            likes: 10, // New property to store the number of likes
        },
        {
            id: Math.random(),
            title: "New Recipe I Tried",
            content:
                "Cooked a delicious meal today. Here's the recipe... Shoutout to @alicejohnson!",
            timestamp: "2023-08-10",
            postImage:
                "https://www.kenyasafari.com/images/ugali-nyama-choma-590x390.jpg",
            mentions: [
                {
                    username: "AliceJohnson",
                    avatar: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/26/1498493367-wonder-woman-2017.jpg?crop=0.593xw:0.988xh;0.142xw,0&resize=1200:*",
                },
            ],
            liked: true, // New property to indicate if post is liked
            likes: 10, // New property to store the number of likes
        },
        // Add more posts as needed
    ],
    socialLinks: [
        {
            platform: "Facebook",
            link: "https://www.facebook.com/",
        },
        {
            platform: "Twitter",
            link: "https://www.twitter.com/",
        },
        // Add more social links as needed
    ],
};

const ClientProfile = () => {
    return (
        <main className="h-full w-full max-w-[1400px] m-auto">
            <section className="w-full h-full flex flex-col lg:flex-row justify-around items-start p-2 gap-5">
                {/* left Profile */}

                <div className=" w-full lg:w-4/12 p-3 border">
                    {/* Profile Name, Image, Ratings, button */}
                    <ProfileInfo user={user} />
                </div>

                {/* Middle Posts */}

                {/* Lazy loader */}
                <div className=" p-3 w-full lg:w-8/12">
                    <Suspense fallback={<PostLoader />}>
                        <LazyPost user={user} />
                        {/* <PostInfo user={user} /> */}
                    </Suspense>
                </div>

                {/* Right Column Ads, Explore etc */}

                <div className="w-full lg:w-4/12 p-3">
                    <ExploreInfo />
                </div>
            </section>
        </main>
    );
};

export default ClientProfile;
