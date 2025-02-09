import React from "react";
import ellipse2 from "./ellipse-2.svg";
import group1 from "./group-1.png";
import home1 from "./home-1.png";
import image10 from "./image-10.png";
import image13 from "./image-13.png";
import "./style.css";
export const AdditionalInfo = () => {
return (
<div className="additional-info">
<div className="div">
<div className="overlap">
<div className="group">
<p className="power-for-parkinson">
<span className="text-wrapper">
Power for Parkinson’s provides free fitness, dance, and singing
classes to support individuals with Parkinson’s and their care
partners, promoting movement, community, and joy.
<br />
</span>
<span className="span">
<br />
Role Overview:{" "}
</span>
<span className="text-wrapper">
You’ll be the welcoming face of our organization, helping to
create a friendly and supportive environment for participants.
<br />
<br />
</span>
<span className="span">Commitment: </span>
<span className="text-wrapper">
5-10 hrs/week
<br />
<br />
</span>
<span className="span">
Responsibilities:
<br />
</span>
<span className="text-wrapper">
Greet and check in participants and caregivers.
<br />
Provide basic information about programs and schedules.
<br />
Support staff with light administrative tasks.
<br />
<br />
</span>
<span className="span">
Ideal Skills:
<br />
</span>
<span className="text-wrapper">
Strong organization and communication skills.
<br />
Interest in health, fitness, or community support.
<br />
Preferably CPR Certified
</span>
</p>
<p className="front-desk-assistant">
Front Desk Assistant&nbsp;&nbsp;Power For Parkinson’s
</p>
</div>
<div className="group-wrapper">
<div className="overlap-group-wrapper">
<div className="overlap-group">
<div className="rectangle" />
<div className="text-wrapper-2">Match</div>
</div>
</div>
</div>
</div>
<div className="overlap-wrapper">
<div className="overlap-2">
<div className="rectangle-2" />
<img className="ellipse" alt="Ellipse" src={ellipse2} />
<img className="image" alt="Image" src={image13} />
</div>
</div>
<div className="group-2">
<img className="home" alt="Home" src={home1} />
<img className="img" alt="Image" src={image10} />
<img className="group-3" alt="Group" src={group1} />
</div>
</div>
</div>
);
};