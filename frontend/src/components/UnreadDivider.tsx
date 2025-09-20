const unreadDividerStyle: React.CSSProperties = {
  alignSelf: "center",
  fontSize: "1em",
  color: "#fff",
};


const UnreadDivider = () => {
  return <strong style={unreadDividerStyle}>Unread Messages </strong>;
};

export default UnreadDivider;
