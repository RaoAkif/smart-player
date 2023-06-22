import { Link } from "react-router-dom";

const CreateButton = () => {
  return (
    <div className="flex items-center py-2 px-4 border-2 border-blue-700 rounded-md mr-2">
      <Link to="/login" className="font-bold text-blue-700 text-sm border-blue-700 hover:underline">
        Login
      </Link>
    </div>
  );
};

export default CreateButton;
