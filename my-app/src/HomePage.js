import React from "react";
import x182 from "./assets/1-8-2.png";
import x18 from "./assets/1-8.png";
import x28 from "./assets/2-8.png";
import x363 from "./assets/3-63.png";
import aav4cud7e1 from "./assets/aav4cud7e-1.png";
import group1 from "./assets/group-1.png";
import home1 from "./assets/home-1.png";
import image10 from "./assets/image-10.png";
import image12 from "./assets/image-12.png";
import image1 from "./assets/image.png";
import rectangle1402 from "./assets/rectangle-140-2.svg";
import rectangle140 from "./assets/rectangle-140.svg";
import "./HomePage.css";
import supportGroupLeader3 from "./assets/support-group-leader-3.png";
import welcomeCaroline from "./assets/welcome-caroline.png";
export const HomePage = () => {
return (
<div className="home-page">
<div className="div">
<div className="overlap">
<img
className="welcome-caroline"
alt="Welcome caroline"
src={welcomeCaroline}
/>
<div className="group">
<div className="overlap-group">
<div className="ellipse" />
<img className="aavcude" alt="Aavcude" src={aav4cud7e1} />
</div>
</div>
<div className="frame">
<div className="overlap-group-wrapper">
<div className="overlap-group-2">
<img className="img" alt="Element" src={x18} />
<div className="ellipse-2" />
<div className="ellipse-2" />
<div className="text-wrapper">90%</div>
</div>
</div>
<div className="overlap-group-wrapper">
<div className="overlap-group-2">
<img className="img" alt="Element" src={x182} />
<div className="ellipse-2" />
<div className="ellipse-2" />
<div className="text-wrapper">85%</div>
</div>
</div>
<div className="overlap-group-wrapper">
<div className="overlap-group-2">
<img className="img" alt="Element" src={x28} />
<div className="ellipse-3" />
<div className="text-wrapper-2">60%</div>
</div>
</div>
<div className="overlap-group-wrapper">
<div className="overlap-group-2">
<img className="img" alt="Element" src={x363} />
<div className="ellipse-3" />
<div className="text-wrapper-2">53%</div>
</div>
</div>
<div className="overlap-group-wrapper">
<div className="overlap-group-2">
<img
className="img"
alt="Support group leader"
src={supportGroupLeader3}
/>
<div className="ellipse-3" />
<div className="text-wrapper-2">42%</div>
</div>
</div>
</div>
</div>
<div className="overlap-2">
<div className="text-wrapper-3">Upcoming</div>
<div className="text-wrapper-4">No Upcoming Tasks</div>
<div className="overlap-wrapper">
<div className="overlap-3">
<div className="div-wrapper">
<div className="overlap-4">
<div className="div-wrapper">
<div className="rectangle-wrapper">
<img
className="rectangle"
alt="Rectangle"
src={rectangle140}
/>
</div>
</div>
<img className="image" alt="Image" src={image12} />
</div>
</div>
<div className="text-wrapper-5">Total Hours</div>
<div className="text-wrapper-6">Businesses Helped</div>
<div className="group-wrapper">
<div className="group-2">
<div className="overlap-5">
<div className="div-wrapper">
<div className="img-wrapper">
<img
className="rectangle"
alt="Rectangle"
src={rectangle1402}
/>
</div>
</div>
<img className="image-2" alt="Image" src={image1} />
</div>
</div>
</div>
<div className="text-wrapper-7">50 Hours</div>
<div className="text-wrapper-8">3 Businesses</div>
</div>
</div>
</div>
<div className="group-3">
<img className="home" alt="Home" src={home1} />
<img className="image-3" alt="Image" src={image10} />
<img className="group-4" alt="Group" src={group1} />
</div>
</div>
</div>
);
};

export default HomePage;