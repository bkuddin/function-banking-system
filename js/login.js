document.getElementById('login-button').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const userEmailValue = userEmail.value;
    // console.log(userEmailValue)

    const userPassword = document.getElementById('user-password');
    const userPasswordValue = userPassword.value;
    // console.log(userPasswordValue)

    if(userEmailValue === 'bkuddin@io.com' && userPasswordValue === 'secret' ){
        window.location.href='bank.html'
    }
    else{
        alert('Enter valid username and password.')
        userEmail.value = '';
        userPassword.value= '';
    }  
})