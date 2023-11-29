import "./navigation.styles.css";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <h2 className="navigation-header">T R E N D S</h2>
      <div className="navigation-buttons">
        <button>Home</button>
        <button>Search</button>
        <button>Explore</button>
        <button>Reels</button>
        <button>Messages</button>
        <button>Notifications</button>
        <button>Profile</button>
      </div>
    </div>
  );
};

export default Navigation;
