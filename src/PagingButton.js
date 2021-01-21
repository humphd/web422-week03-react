import "./PagingButton.css";

// Our PagingButton receives props like other components, but one
// of those is different than we've seen before: onPageChange is
// a reference to a function that is passed down from the parent.
// The PagingButton doesn't know or care what it does: it will
// simply call it at the right time.
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

    // The page has been updated, so let the parent know by calling
    // it's provided function, passing the new page as an argument.
    onPageChange(newPage);
  };

  // Figure out which label to use for the button, based on the
  // current page number and total number of pages.
  const label = current === total ? "Previous" : "Next";

  return (
    <button className="paging-button" onClick={onClickHandler}>
      {label}
    </button>
  );
}

export default PagingButton;
