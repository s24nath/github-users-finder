import { useContext } from "react";
import AlertContext from "../../Context/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert && (
      <p className="flex items-start mb-4 space-x-2">
        <p className={`flex-1 text-base font-semibold leading-7 text-white ${alert.type}`}>
          {alert.msg}
        </p>
      </p>
    )
  );
};

export default Alert;
