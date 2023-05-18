@extends('layouts.app')

@section('header')
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<style>

</style>
@endsection

@section('content')
<div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
                <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">
                ADMIN PANEL
            </div>

            <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                    <form method = "POST" action="{{ route('admin.login') }}">
                        @csrf
                        <div class="form-group">
                            <label class="form-control-label">USERNAME</label>
                            <input type="text" class="form-control" name = 'admin_name'>
                        </div>
                        <div class="form-group">
                            <label class="form-control-label">PASSWORD</label>
                            <input type="password" name = 'password' class="form-control">
                        </div>
                        <!-- <div class="g-recaptcha" data-sitekey="6LefPncgAAAAAKIUIUGkRQbQhU_NKfo1sOAXV949" style="display: none;" id="g-recaptcha"></div> -->
                        <div style="color: red;" id="captcha-error"></div>
                        <div class="col-lg-12 loginbttm">
                            <div class="login-btm login-button float-right">
                                <button type="submit" class="btn btn-outline-primary" onclick="login(event)">LOGIN</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
        </div>
    </div>
    <script>
        const count = localStorage.getItem('count') || 0;
        const time = localStorage.getItem('time') || 0;
        const now = (new Date()).getTime();
        const difference = now - time;
        let isCaptcha = 0;
        if (difference / 60000 <= 5 && count >= 3) {
            document.getElementById('g-recaptcha').style.display = 'block';
            isCaptcha = 1;
        }
        function login(event) {
            const v = grecaptcha.getResponse();
            if (v.length == 0 && isCaptcha)
                event.preventDefault();
            localStorage.setItem('count', (Number)(count) + 1);
            localStorage.setItem('time', now);
            if (v.length != 0 && isCaptcha)
                localStorage.setItem('count', 0);
        }
    </script>
@endsection
