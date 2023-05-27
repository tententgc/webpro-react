import React from "react";
import Profile from "./Profile";

const Collection = () => {
  return (
    <div>
      <Profile
        userId="1"
        picturePath="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        firstName="John"
        lastName="Doe"
        description="I am a cool guy"
        viewedProfile={0}
        impressions={0}
        friends={[]}
      />
    </div>
  );
};

export default Collection;
