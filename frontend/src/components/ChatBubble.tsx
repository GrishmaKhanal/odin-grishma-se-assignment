type Props = {
  message_text: string;
  is_my_message: boolean;
  author_id: string;
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  theirMessage: {
    borderRadius: "12px",
    maxWidth: "70%",
    wordWrap: "break-word",
    padding: "8px 12px",
    alignSelf: "flex-start",
    background: "#060707ff",
  },
  myMessage: {
    borderRadius: "12px",
    maxWidth: "70%",
    wordWrap: "break-word",
    padding: "8px 12px",
    alignSelf: "flex-end",
    background: "#053834ff",
  },
  authorId: {
    marginLeft: "-10px",
    fontSize: "1em",
    color: "#aaa",
    marginRight: "2px",
  },
  myAuthorId: {
    marginRight: "-10px",
    alignSelf: "flex-end",
    fontSize: "1em",
    color: "#aaa",
    marginLeft: "2px",
  },
};

const ChatBubble: React.FC<Props> = ({
  message_text,
  is_my_message,
  author_id,
}) => {
  return (
    <div style={styles.container}>
      <div style={is_my_message ? styles.myAuthorId : styles.authorId}>
        {author_id}
      </div>
      <div style={is_my_message ? styles.myMessage : styles.theirMessage}>
        {message_text}
      </div>
    </div>
  );
};

export default ChatBubble;
