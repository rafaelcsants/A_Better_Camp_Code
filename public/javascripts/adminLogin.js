async function loginAdmin() {
    try {
      let obj = {
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
      };
      let admin = await $.ajax({
        url: "/api/admin/login",
        method: "post",
        dataType: "json",
        data: JSON.stringify(obj),
        contentType: "application/json",
      });
      sessionStorage.setItem("AdminId", admin.admin_id);
      window.location = "adminProfile.html";
    } catch (err) {
      document.getElementById("msg").innerText = err.responseJSON.msg;
    }
  }