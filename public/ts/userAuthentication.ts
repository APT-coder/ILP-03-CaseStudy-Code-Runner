document
  .getElementById("sign-up-form")
  ?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = (document.getElementById(
      "sign-up-username"
    ) as HTMLInputElement)?.value;
    const email = (document.getElementById(
      "sign-up-email"
    ) as HTMLInputElement)?.value;
    const password = (document.getElementById(
      "sign-up-password"
    ) as HTMLInputElement)?.value;
    const initialScore = 0;

    if (!username || !password || !email) {
      alert("Username, email, and password are required");
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
    } catch (error: any) {
      alert("Error creating user: " + error.message);
    }
  });

document
  .getElementById("login-form")
  ?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = (document.getElementById(
      "login-username"
    ) as HTMLInputElement)?.value;
    const password = (document.getElementById(
      "login-password"
    ) as HTMLInputElement)?.value;

    const response = await fetch(
      `http://localhost:3000/api/users/${username}/${password}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    if (data.user_name) {
      alert(`Welcome\n${username}`);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      alert(data.error);
    }
  });
