export const Modal = ({ children, onCloseModal }) => {
  return (
    <div
      className="modal fade show"
      style={{ display: "block", backdropFilter: "blur(5px)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal</h5>
            <button
              className="btn-close"
              type="button"
              aria-label="Close"
              onClick={onCloseModal}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
