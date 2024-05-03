import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import UserList from "../components/UserList";

const Users = () => {
  const { id } = useParams();

  const {
    data: users,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/users/${id != null ? id : ""}`);

  if (id != null) {
    return (
      <section>
        {error && <p>{error}</p>}
        {isPending && <p>Loading users...</p>}
        {users && <UserDetails user={users} />}
      </section>
    );
  } else {
    return (
      <section>
        {error && <p>{error}</p>}
        {isPending && <p>Loading users...</p>}
        {users && <UserList users={users} />}
      </section>
    );
  }
};

export default Users;
