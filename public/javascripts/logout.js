async function logout (){
    sessionStorage.removeItem("PessoaId");
    sessionStorage.removeItem("AdminId");
    sessionStorage.removeItem("monitorId");
    location.reload(true);
}

export {logout};