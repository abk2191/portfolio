import myimage from "./assets/me.jpg";

function Profilepic({ handleCloseProfilePic }) {
  return (
    <div className="profile-pic-show">
      <img
        src={myimage}
        alt="Abhishek kabi"
        className="my-img"
        style={{
          height: "220px",
          width: "220px",
          borderRadius: "20px",
          border: "4px solid rgba(255, 255, 255, 0.15)",
          margin: "0 auto",
          zIndex: "9999",
          cursor: "pointer",
        }}
        onClick={handleCloseProfilePic}
      />
    </div>
  );
}

export default Profilepic;
