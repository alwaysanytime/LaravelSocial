<!DOCTYPE html>
<html lang="en">
	<!--begin::Head-->
	<head><base href="">
		<title>Cookie.io</title>
		<meta name="description" content="Ceres admin dashboard live demo. Check out all the features of the admin panel. A large number of settings, additional services and widgets." />
		<meta name="keywords" content="Ceres theme, bootstrap, bootstrap 5, admin themes, free admin themes, bootstrap admin, bootstrap dashboard" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charset="utf-8" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="article" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
		<link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css" />
		<!--end::Global Stylesheets Bundle-->
	</head>
	<!--end::Head-->
	<!--begin::Body-->
	<body>
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
            <div style="max-height: 720px;width: 380px; border: 20px solid;border-radius: 50px; padding-bottom: 80px;" class="d-flex flex-column position-relative align-items-center pt-5 h-100">
                @if ($user->avatar && $user->avatar != "")
                    <div class="d-flex justify-content-center align-items-center text-white" style="width: 100px; min-height: 100px; font-size: 60px; text-transform: capitalize; border-radius: 50px; overflow: hidden">
                        <img class='w-100' src="{{$user->avatar}}" style="width: 100px"/>
                    </div>
                @else
                    <div class="d-flex justify-content-center align-items-center text-white bg-dark" style="width: 100px; min-height: 100px; font-size: 60px; text-transform: capitalize; border-radius: 50px; overflow: hidden">
                        {{mb_substr($user->username, 0, 1)}}
                    </div>
                @endif
                <div class="text-center w-100" style="font-size: 20px;">
                    @if ($user->display != "My Name")
                        <div style="font-size: 30px;font-weight: 700">{{$user->display}}</div>
                    @endif
                    <div class="text-muted">{{$user->username}}</div>
                    @if ($user->bio != "My Bio")
                        <div class="text-secondary d-flex w-100 justify-content-center">{{$user->bio}}</div>
                    @endif
                </div>
                <div class='h-100 w-100 scroll p-5 mt-2'>
                    <div class='d-flex flex-column justify-content-center mobile-links-container w-100'>
                        @foreach ($user->links as $link)
                            @if ($link->enable && $link->title != "Title" && $link->title != null)
                                <a target="_blank" href={{$link->url}}><div class="link" style="">{{$link->title}}</div></a>
                            @endif
                        @endforeach
                    </div>
                </div>
                <div class='position-absolute' style="bottom: 30px">
                    <img src="/images/logo/LogoBlack.png" style="width: 50px;height: 50px;"/>
                </div>
            </div>
        </div>
	</body>
	<!--end::Body-->
</html>