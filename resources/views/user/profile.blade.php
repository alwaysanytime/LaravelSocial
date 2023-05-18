<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:og="http://ogp.me/ns#"
      xmlns:fb="https://www.facebook.com/2008/fbml">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$user ? $user->display." (@".$user->username.") - Booking" : "Booking"}}</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}" />
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
    <style>
        .link-normal {
            background: "{{$style->link}}",
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: "{{$style->linkColor}}";
            border-radius: 20px;
            padding: 15px;
            border: 1px solid "{{$style->buttonborder}}";
            text-align: center;
            font-size: 15px;
            font-weight: 600;
        }
        .link:hover {
            background-color: "{{$style->buttonhover}}";
        }
        .link-social {
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            color: "{{$style->color}}" !important;
            border-radius: 5px;
            text-align: center;
            width: 50px;
            height: 50px;
            margin: 5px;
            font-size: 30px;
        }
    </style>
</head>
<?php

$social = [
    ['name'=> 'bi bi-twitter', 'include'=> "twitter.com"],
    ['name'=> 'bi bi-instagram', 'include'=> "instagram.com"],
    ['name'=> 'bi bi-facebook', 'include'=> "facebook.com"],
    ['name'=> 'bi bi-reddit', 'include'=> "reddit.com"],
    ['name'=> 'bi bi-snapchat', 'include'=> "snapchat.com"],
    ['name'=> 'bi bi-tiktok', 'include'=> "tiktok.com"],
    ['name'=> 'bi bi-discord', 'include'=> "discord.com"],
    ['name'=> 'bi bi-linkedin', 'include'=> "linkedin.com"],
    ['name'=> 'bi bi-spotify', 'include'=> "spotify.com"],
    ['name'=> 'bi bi-youtube', 'include'=> "youtube.com"],
    ['name'=> 'fa-brands fa-tumblr', 'include'=> "tumblr.com"],
    ['name'=> 'bi bi-telegram', 'include'=> "telegram.org"],
    ['name'=> 'bi bi-telegram', 'include'=> "telegram.me"],
    ['name'=> 'bi bi-telegram', 'include'=> "t.me"],
    ['name'=> 'bi bi-skype', 'include'=> "skype.com"],
];

?>
<body style="height: 100% !important;">
    <div class="d-flex justify-content-center h-100 row">
        <div class="d-flex align-items-center flex-column h-100 pt-2" style="background-color: {{$style->background}}">
            <div style="width: 100px;height:100px;overflow:hidden;border-radius:50px;font-size:60px;text-transform: capitalize;line-height:100px;text-align:center;">
                @if ($user->email_verified_at)
                    <img src="{{$user->avatar}}" class="w-100 h-100" />
                @else
                    {{substr($user->username."T", 0, 1)}}
                @endif
            </div>
            <div class="text-center mt-3" style="font-size:16px;color: {{$style->color}}">
                @if ($user->display != "My Name")
                    <div style="font-size: 20px, font-weight: 700" class="mt-n2 c-center">
                        {{$user->display}}
                        @if ($user->badge)
                            <img src="/images/badge.svg" class="badge-image ml-1" />
                        @endif
                    </div>
                @endif
            </div>
            <div>
                <button>Follow</button>
            </div>
            @if ($user->social && $user->showsocial)
                <div class='d-flex flex-wrap justify-content-center align-items-center mt-3'>
                    @foreach ($links as $link)
                        @if ($link->enable && $link->title != "Title" && $link->title != null && $link->title != "")
                            <?php
                                $i = 0;
                                foreach($social as $item) {
                                    if (strpos($link->url, $item["include"]) !== false)
                                        break;
                                    $i++;
                                }
                            ?>
                            @if ($i != count($social))
                                <a href="{{$link->mask ? 'https://'.bin2hex(random_bytes($num)) : $link->url}}" onclick="" class="link-social">
                                    <i class="{{$social[$i]}}"></i>
                                </a>
                            @endif
                        @endif
                    @endforeach
                </div>
            @endif
            <div class='w-100 p-2 mt-3 d-flex flex-column'>
                <div class='d-flex flex-column justify-content-center mobile-links-container w-100'>
                    @foreach ($links as $link)
                        @if ($link->enable && $link->title != "Title" && $link->title != null && $link->title != "")
                            <?php
                                $i = 0;
                                foreach($social as $item) {
                                    if (strpos($link->url, $item["include"]) !== false)
                                        break;
                                    $i++;
                                }
                                $issocial = 0;
                                if ($i != count($social)) $issocial = 1;
                            ?>
                            <a class="link link-normal" target="{{$link->mask ? 'https://'.bin2hex(random_bytes($num)) : $link->url}}" onClick="" style="padding-left: {{$issocial ? 60: 15}}, padding-right: {{$issocial ? 60: 15}}">
                                @if ($i != count($social) && $user->showsocial)
                                    <i class="{{$social[$i].name}}"></i>
                                @endif
                                <span>{{$link->title}}</span>
                            </a>
                        @endif
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</body>
</html>
