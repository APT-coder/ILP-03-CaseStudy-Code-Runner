document
  .getElementById("sign-up-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("sign-up-username").value;
    const email = document.getElementById("sign-up-email").value;
    const password = document.getElementById("sign-up-password").value;
    const initialScore = 0;

    if (!username || !password || !email) {
      alert("Username and password are required");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/users/${username}/${email}/${password}/${initialScore}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const data = await response.json();
      alert(`User added\n${username} registered successfully`);

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } catch (error) {
      alert("Error creating user: " + error.message);
    }
  });

  // Function to handle login
  document
  .getElementById("login-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const response = await fetch(
      `http://localhost:3000/api/users/${username}/${password}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    if (data.user_name) {
      alert(`Welcome\n${username}`);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      alert(data.error);
    }
  });
