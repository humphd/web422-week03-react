function PagingButton({ current, total, onPageChange }) {
  // When the button is clicked, figure out which page we need,
  // and call the onPageChange function we were passed on props.
  const onClickHandler = () => {
    let newPage;

    if (current === total) {
      newPage = current - 1;
    } else {
      newPage = current + 1;
    }

    onPageChange(newPage);
  };

  return (
    <button className="pages-button" onClick={onClickHandler}>
      {current === total ? "Previous" : "Next"}
    </button>
  );
}

export default PagingButton;
