import ChatTimeline from "./components/ChatTimeline";
import { input_different_days as user_input } from "./samples/example-input";

const rootStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
};

const appStyles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    display: "grid",
    gridTemplateRows: "1fr 9fr",
    height: "80vh",
    width: "80vw",
    padding: "20px",
    border: "1px solid #dbdbdb",
    borderRadius: "10px",
  },
  header: {
    fontSize: "28px",
    fontWeight: "bold",
    borderBottom: "1px solid #ccc",
  },
  chatBody: {
    overflow: "auto",
  },
};

const App = () => {
  return (
    <div style={rootStyles}>
        <div style={appStyles.appContainer}>
          <h1 style={appStyles.header}>
            Chat Timeline: {user_input.currentUserId}
          </h1>
          <div style={appStyles.chatBody}>
            <ChatTimeline input={user_input} />
          </div>
        </div>
    </div>
  );
};

export default App;
