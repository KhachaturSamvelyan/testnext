import { FC } from "react";
import ReduxToastrLib from "react-redux-toastr";

const ReduxToast: FC = (props) => {
  return (
    <ReduxToastrLib
      newestOnTop={false}
      preventDuplicates
      progressBar
      closeOnToastrClick={false}
      timeOut={4000}
      transitionIn={"fadeIn"}
      transitionOut={"fadeOut"}
      className="center-toast"
    />
  );
};

export default ReduxToast;
