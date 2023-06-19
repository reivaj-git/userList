const NotificationModal = ({ showNotification, notification, handleCloseModal }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${showNotification ? "opacity-100 visible" : "invisible opacity-0"
        } transition-opacity z-10`}
    >
      <div className="bg-night w-[280px] p-4 grid gap-6 relative rounded-md">
        <h3 className="font-bold text-2xl text-center text-white ">{notification}</h3>
        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 text-2xl hover:text-nightPeach"
        >
          <i className="bx bxs-x-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;