import { useState } from "react";

export interface Follower {
  id: number;
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

const dummyFollowers: Follower[] = [
  { id: 1, name: "Shah Rukh Khan", username: "@srk", avatar: "", isFollowing: false },
  { id: 2, name: "Robert Downey Jr.", username: "@rdj", avatar: "", isFollowing: true },
  { id: 3, name: "Tom Cruise", username: "@tomcruiser", avatar: "", isFollowing: false },
  { id: 4, name: "Elezabeth", username: "@elezabeth", avatar: "", isFollowing: false },
  { id: 5, name: "Kate Winslet", username: "@KateWinslet", avatar: "", isFollowing: false },
  { id: 6, name: "Saoirse Hopper", username: "@saoirsehop", avatar: "", isFollowing: false },
  { id: 7, name: "Melina Charlton", username: "@melinacharlton", avatar: "", isFollowing: false },
  { id: 8, name: "Shah Rukh Khan", username: "@srk", avatar: "", isFollowing: true },
];

const useFollowToggle = () => {
  const [followers, setFollowers] = useState(dummyFollowers);

  const handleFollowToggle = (id: number) => {
    console.log("handleFollowToggle");
    
    setFollowers((prevFollowers) =>
      prevFollowers.map((follower) =>
        follower.id === id ? { ...follower, isFollowing: !follower.isFollowing } : follower
      )
    );
  };

  return { followers, handleFollowToggle };
};

export default useFollowToggle;
