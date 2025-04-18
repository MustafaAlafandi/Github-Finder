import { useContext } from "react";
import { AlertContext } from "../../context/alert/alert";
function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && (
          <svg
            color="red"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
        )}
        <p className="flex-1 test-base font-semibold loading-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
}

export default Alert;
