<template>
<div class="navbar">
    <button class="button"> 
        <router-link to="/">
            Home
        </router-link>
    </button>
    <button class="register"> 
        <router-link to="/registered">
            Register
        </router-link>
    </button>
</div>
<div class="signin">
    <img class = "signinbg" alt="sign in background" src="@/assets/signin.png">
    <h1 class = "signinlbl">
        Sign in
    </h1>
    <input type="email" class = "email" placeholder="Email">
    <input type="password" class = "password" placeholder="Password">
    <button class="signinbtn"> 
        <router-link to="/registered">
            Sign in
        </router-link>
    </button>
</div>
</template>
<script>
</script>
<style>

.button {
    display: grid;
    position: absolute;
    width: 139px;
    height: 47px;
    left: 1465px;
    top: 30px;
    background: #F2F0FE;
    border-radius: 10px;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 9px;
    align-items: center;
    appearance: none;
}
.button a {
    text-decoration: none;
    color: #695AC9;
}
.register {
    position: absolute;
    background-color: #695AC9;
    border-radius: 10px;
    width: 139px;
    height: 45px;
    left: 1628px;
    top: 33px;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    display: inline-block;
    align-items: center;
    text-align: center;
    border: 0;
    font-family: 'Segoe UI';
}
.register a {
    text-decoration: none;
    color: #F2F0FE;
}
.signin {
    box-sizing: border-box;
    position: absolute;
    width: 1055px;
    height: 546px;
    left: 432px;
    top: 265px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
}
.signinbg {
    position: absolute;
    height: 349.57px;
    width: 349.35px;
    left: 59.58px;
    top: 53.5px;
    border-radius: 0px;
}
.signinlbl {
    position: absolute;
    width: 406px;
    height: 64px;
    left: 485px;
    top: 13px;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 60px;
    color: #04040D;
}
.email {
    box-sizing: border-box;
    position: absolute;
    width: 342px;
    height: 47px;
    left: 480px;
    top: 144px;
    background: #FFFFFF;
    border: 0.5px solid #000000;
    border-radius: 10px;
}
.password {
    box-sizing: border-box;
    position: absolute;
    width: 342px;
    height: 47px;
    left: 480px;
    top: 210px;
    background: #FFFFFF;
    border: 0.5px solid #000000;
    border-radius: 10px;
}
.signinbtn {
    position: absolute;
    width: 342px;
    height: 47px;
    left: 480px;
    top: 298px;
    border-radius: 10px;
    border: 0;
    background-color: #695AC9;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    display: inline-block;
    align-items: center;
    text-align: center;
    font-family: 'Segoe UI';
}
.signinbtn a {
    text-decoration: none;
    color: #F2F0FE;
}
</style>