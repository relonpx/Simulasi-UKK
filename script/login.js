const user = {
<<<<<<< HEAD
  username: "rally",
  password: "123",
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const validName = name == user.username;
  const validPass = pass == user.password;

  if (name.trim() === "" || pass.trim() === "") {
    window.alert("Username dan password harus di isi");
  } else {
    console.log(validName);
    console.log(validPass);

    if (validName === false || validPass === false) {
      window.alert("Username dan Password salah!");
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    } else {
      location.href = "index.html";
    }
  }
});
=======
    username: 'rally',
    password: '123'
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault()
    const name = document.getElementById('username').value
    const pass = document.getElementById('password').value
    const validName = name == user.username
    const validPass = pass == user.password

    if (name.trim() === '' || pass.trim() === ''){
        window.alert('Username dan password harus di isi')
    } else {
        console.log(validName)
        console.log(validPass)

        if (validName === false || validPass === false){
            window.alert('Username dan Password salah!')
            document.getElementById('username').value = ''
            document.getElementById('password').value = ''
        } else {
            location.href = 'index.html'
        }
    }
})
>>>>>>> 6f0edbe4adf6ac8126b76f0610f4c0f47f96e769
