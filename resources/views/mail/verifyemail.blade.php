<html>
    <head>
        <style>
            .button {
                box-sizing: border-box;
                width: 80%;
                border-radius: 10px;
                font-size: 20px;
                color: white !important;
                padding: 10px;
                font-weight: 500;
                margin-left: 10%;
                background-color: rgb(77, 166, 255);
                text-decoration: none;
                display: block;
                text-align: center;
            }
            .link {
                color: rgb(77, 166, 255) !important;
            }
        </style>
    </head>
    <body>
        <p style="margin-bottom: 20px;">Hi {{$username}},</p>
        <p style="margin-bottom: 20px;">Please verify your email address by clicking the link below. Or <a href="{{$link}}" class="link">click here</a></p>
        <div><a href="{{$link}}" class="button" style="margin-bottom: 20px;">Verify Email</a></div>
        <p>Thanks</p>
    </body>
</html>
