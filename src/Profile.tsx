function Profile() {
  const user = {
    name: "Rahul Sharma",
    age: 21,
    email: "rahul@gmail.com",
    course: "MSc IT",
  };

  return (
    <div style={{
    marginLeft: "570",
      width: "300px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor:"rebeccapurple",
      border: "1px solid #ccc",
      borderRadius: "10px",
      textAlign: "center",
      fontFamily: "Arial"
    }}>
      <h2>User Profile</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Age:</b> {user.age}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Course:</b> {user.course}</p>
    </div>
  );


  
}

export default Profile;
