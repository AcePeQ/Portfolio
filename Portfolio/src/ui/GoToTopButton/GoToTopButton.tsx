import Button from "../Button/Button";

import { HiArrowUpCircle } from "react-icons/hi2";

function GoToTopButton() {
  return (
    <Button
      type="outline-primary-icon"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      Go To Top <HiArrowUpCircle />
    </Button>
  );
}

export default GoToTopButton;
