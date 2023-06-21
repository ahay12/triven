import { userService } from "../services";

export default function Profile() {
  return (
    <div className="container">
      <h1>Profile</h1>
      <p>Hello {userService.userValue?.username}</p>
    </div>
  );
}
