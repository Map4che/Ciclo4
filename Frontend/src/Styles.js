export default body {
    margin: 0;
    padding: 0;
    background: url(https://wallpaperaccess.com/full/2314950.jpg) no-repeat center top;
    background-size: cover;
    font-family: sans-serif;
    height: 100vh;
}

.elLogin{}
    width: 320px;
    height: 500px;
    background: black;
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 70px 30px;
    border-radius: 15px;
}

.elLogin .avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
}

.elLogin h1{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 22px;
}

.elLogin label{
    margin: 0;
    padding: 0;
    font-weight: bold;
    display:block;
}

.elLogin input{
    width:100%;
    margin-bottom: 20px;
}

.elLogin input[type="email"],
.elLogin input[type="password"]{
    border:none;
    border-bottom:1px solid darkgrey;
    background: transparent;
    outline: none;
    heigth: 40px;
    color:#fff;
    font-size:16px;
}

.elLogin input[type="checkbox"]{
    border:none;
    outline:none;
    width:15px;
    height:15px;
}

.elLogin button[type="submit"]{
    border: none;
    outline: none;
    height: 40px;
    background: #b80f22;
    border-radius: 20px;
}

.elLogin a{
    text-decoration: none;
    font-size:12px;
    line-height: 20px;
    color: aqua;
}

.elLogin a:hover{
    color:#fff;
}