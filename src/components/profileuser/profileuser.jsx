import "./UserProfile.css";

const profileuser = ({ intials, available, bgColor }) => {
  return (
    <div className="user">
      <div className="icon" style={{ backgroundColor: bgColor }}>
        {intials}
      </div>
      <div className="dot" style={available ? { color: "#50B053" } : {}}></div>
    </div>
  );
};

export default profileuser;