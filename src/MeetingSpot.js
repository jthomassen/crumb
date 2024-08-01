import img4 from "/Users/jeffreythomassen/development/projects/crumb/src/crumb_hearts.gif";

function MeetingSpot() {
  return (
    <div class="meeting-container">
      <div class="meeting-details">
        <div class="meeting-details-heading">
          <p>If you made it here, this means you have reached </p>
          <div class="detail1">
            <p>THE SECRET MEETING SPOT DETAILS PAGE</p>
          </div>
        </div>
        <p>On September 7th, 2024 </p>
        <p>
          please meet{" "}
          <a href="https://maps.apple.com/?address=Central%20Park,%201%20West%20Dr,%20New%20York,%20NY%20%2010024,%20United%20States&ll=40.779800,-73.970096&q=Dropped%20Pin">
            here
          </a>{" "}
          at 5pm
        </p>
      </div>
      <img src={img4} class="img4"></img>
    </div>
  );
}

export default MeetingSpot;
