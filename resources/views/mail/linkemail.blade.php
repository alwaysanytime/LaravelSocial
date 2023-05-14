<html>
    <head>
        <style>
            .container {
                width: 100%;
                background: gray;
            }    
            .main {
                background: white;
                width: 400px;
                padding: 10px 30px;
		        margin: auto;
            }
            .link {
                background: rgb(30, 150, 239);
                border-radius: 15px;
                padding: 20px;
		        color: white !important;
                text-align: center;
                margin-top: 20px;
                font-size: 20px;
                text-decoration: none !important;
            }
            .profile {
                color: black !important;
                background-color: transparent;
            }
            .d-flex {
                display: flex;
                width: 100%;
            }
            .d-flex a {
                width: 100%;
            }
            .profile {
                background: transparent;
                color: black;
                border: 2px solid black;
            }
            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
		        margin: auto;
            }
            * {
                text-align: center;
            }
            .bold {
                font-weight: 700;
            }
        </style>
    </head>
    <body>
        <div class="main">
            <div><img src="{{asset($avatar)}}" /></div>
            <h2 class="bold">{{$display}}</h2>
            <h3>{{"@".$username}}</h3> 
            <div class="d-flex">
                <a class="link" href="{{$url}}">{{$title}}</a>
            </div>
            <div class="d-flex">
                <a class="link profile" href="{{'https://cookie.link/'.$username}}">View my cookie profile</a>
            </div>
            <h4 style="margin-top: 50px;"><a style="color: gray;" href="https://cookie.link/settings/emailnotification">Unsubscribe from these alerts</a></h4>
        </div>
    </body>
</html>
