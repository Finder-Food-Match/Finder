function Notification({ message, onClose }) {
  return (
    <div className="notification">
      {message}
      <button onClick={onClose} className="close-btn">
        Close
      </button>
    </div>
  );
}

export default Notification;
