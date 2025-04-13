import { useContext } from "react";
import UserItem from "./UserItem";
import { GithubContext } from "../../context/github/github";
import Spinner from "../layout/Spinner";
function UserResults() {
  const { isLoading, users } = useContext(GithubContext);
  if (isLoading) return <Spinner />;
  return (
    <div className="grid grid-col-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ml-12">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserResults;
