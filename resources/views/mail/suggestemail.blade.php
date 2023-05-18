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
                background: rgb(124, 65, 255);
                border-radius: 15px;
                padding: 20px;
                display: block;
		        color: white !important;
                text-align: center;
                margin-top: 20px;
                font-size: 20px;
                text-decoration: none !important;
            }
            .link-container {
                display: flex;
                flex-direction: column;
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
            .d-flex {
                display: flex;
                width: 100%;
            }
            .d-flex a {
                width: 100%;
            }
        </style>
    </head>
    <body>
        <div class="main">
            <div><img src="{{asset($mailuser->avatar)}}" /></div>
            <h2 class="bold">{{$mailuser->display}}</h2>
            <h3>{{"@".$mailuser->username}}</h3>
            <div class="d-flex">
                <a href="{{'https://bookings247.co/'.$mailuser->username}}" class="link">View my cookie profile</a>
            </div>
            <h4 style="margin-top: 50px;"><a style="color: gray;" href="https://bookings247.co/settings/emailnotification">Unsubscribe from these alerts</a></h4>
        </div>
        <script>

        </script>
    </body>
</html>
