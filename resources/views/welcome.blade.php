<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:og="http://ogp.me/ns#"
      xmlns:fb="https://www.facebook.com/2008/fbml">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$user ? $user->display." (@".$user->username.") - Cookie" : "Cookie"}}</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}" />
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="icon" href="/favicon.ico">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="{{$user ? $user->bio : ''}}">
    <meta name="keywords" content="{{$user ? $user->username : ''}} Instagram, {{$user ? $user->username : ''}} twitter, {{$user ? $user->username : ''}} tiktok, {{$user ? $user->username : ''}} website">
    <meta name="robots" content="index" />
    <meta name="og:title" content="{{$user ? $user->username. ' | ' : ''}} bookings247.co">
    <meta name="og:description" content="Make the most of your social traffic">
    <meta property="og:image:alt" content="{{$user ? $user->username : 'none'}}"/>
    <meta property="og:image" content="https://bookings247.co/{{$user ? $user->avatar : 'none'}}"/>
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{$user ? $user->username : ''}} | bookings247.co">
    <meta name="twitter:image" content="https://bookings247.co/{{$user ? $user->avatar : 'none'}}">
</head>
<body style="height: 100% !important;">
    <div id="root"></div>
</body>
</html>
