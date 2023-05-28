function Modal(props) {
  function cancelHandler() {
    props.cancel();
  }

  function deleteHandler() {
    props.delete();
  }

  return (
    <div className="fixed top-[250px] left-[480px] w-[500px] h-[160px] z-50 overflow-hidden text-center bg-neutral-50 rounded-[30px] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <h2>{props.message}</h2>
        {props.delete && (
          <div className="flex flex-row mt-[20px] gap-[30px]">
            <button onClick={deleteHandler}>Удалить</button>
            <button onClick={cancelHandler}>Отмена</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
