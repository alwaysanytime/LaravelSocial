@extends('layouts.dashboard')

@section('content')
<div class="row gy-12 g-xl-8">
    <!--begin::Col-->
    <div class="col-xxl-12">
        <!--begin::Table Widget 1-->
        <div class="card">
            <!--begin::Header-->
            <div class="card-header border-0 pt-5 pb-3">
                <!--begin::Card title-->
                <h3 class="card-title fw-bolder fs-2 text-black" style="padding: 7px;">List of Users</h3>
            </div>
            <div class="separator margin-0"></div>
            <div class="customized-scrollbar mb-10" style="max-width: 100% !important;overflow: auto !important;">
                <table class="table table-striped gy-7 gs-7" id="usertable">
                    <thead>
                        <tr class="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                            <th>ID</th>
                            <th><input id="email" onkeyup="search(event, 'email')" placeholder="Email" class="form-control"></th>
                            <th><input id="username" onkeyup="search(event, 'username')" placeholder="Username" class="form-control"></th>
                            <th>Link1</th>
                            <th>Link2</th>
                            <th>Followers</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="admins">
                        @foreach ($verifications as $verification)
                            <tr>
                                <td>{{$verification->id}}</td>
                                <td>{{$verification->user->email}}</td>
                                <td>{{$verification->user->username}}</td>
                                <td><a href="{{$verification->link1}}">{{$verification->link1}}</a></td>
                                <td><a href="{{$verification->link2}}">{{$verification->link2}}</a></td>
                                <td>{{$verification->user->follower()->get()->count()}}</td>
                                <td>{{$verification->created_at}}
                                <td>
                                    @if ($verification->state == 0)
                                        <button class="btn btn-success" onclick="approve({{$verification->id}}, 0)">Approve</button>
                                        <button class="btn btn-danger ms-3" onclick="approve({{$verification->id}}, 1)">Deny</button>
                                    @elseif ($verification->state == -1)
                                        <div class="bg-success">Approved</div>                                    
                                    @elseif ($verification->state == 1)
                                        <div class="bg-danger">Denied</div>                                    
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
    </div>
    <!--end::Col-->
    <div class="modal fade" tabindex="-1" id="modal">
        <div class="modal-dialog" style="margin-top: 100px;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="who">@Username</h5>
                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                        <span class="svg-icon svg-icon-2x"></span>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <select class="form-control form-control-solid" id="memail">
                            <option value="1">Verified</option>
                            <option value="0">Not Verified</option>
                        </select>
                    </div>
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Profile</label>
                        <select class="form-control form-control-solid" id="mprofile">
                            <option value="1">Visible</option>
                            <option value="0">Not Visible</option>
                        </select>
                    </div>
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Verified</label>
                        <select class="form-control form-control-solid" id="mverified">
                            <option value="1">Verified</option>
                            <option value="0">Not Verified</option>
                        </select>
                    </div>
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Email Alerts</label>
                        <select class="form-control form-control-solid" id="malert">
                            <option value="1">Active</option>
                            <option value="0">Disable</option>
                        </select>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" onclick="save()">Save</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('js-file')
<script>
    function toggle(id, action="") {
        let isExecuted = true;
        if (action == 'delete')
            isExecuted = confirm("Are you sure to restore this account?");
        if (isExecuted)
            sendRequest('{{route('admin.toggle')}}', '{{csrf_token()}}', {id, action});
    }
    function verify(id) {
        sendRequest('{{route('admin.verifyUser')}}', '{{csrf_token()}}', {id});
    }
    function remove(id) {
        const isExecuted = confirm("Are you sure to delete this account?");
        if (isExecuted)
            sendRequest('{{route('admin.remove')}}', '{{csrf_token()}}', {id});
    }
    function search(event, field) {
        table = document.getElementById('admins');
        for (let i = 0; i < table.children.length; i++) {
            let content = table.children[i].children[1].innerHTML;
            if (field == 'username') content = table.children[i].children[2].children[0].innerHTML;
            else if (field == 'referr') content = table.children[i].children[3].innerHTML;
            if (content.indexOf(event.target.value) != -1)
                table.children[i].style.display = 'table-row';
            else table.children[i].style.display = 'none';
        }
    }

    var user = $('#who');
    var memail = $('#memail');
    var mprofile = $('#mprofile');
    var mverified = $('#mverified');
    var memailalert = $('#malert');
    var _username = "";
    function setModal(username, email, profile, verified, emailsend) {
        _username = username;
        user.html("@"+username);
        memail.val(email == "" || email == "null" ? 0 : 1);
        mprofile.val(1 - profile);
        mverified.val(verified);
        memailalert.val(emailsend);
    }

    function save() {
        console.log({username: _username, email: memail.val(), profile: mprofile.val(), verified: mverified.val(), emailsend: memailalert.val()});
        sendRequest('{{route("admin.changeuser")}}', '{{csrf_token()}}', {username: _username, email: memail.val(), profile: mprofile.val(), verified: mverified.val(), emailsend: memailalert.val()});
    }

    function approve(id, allow) {
        sendRequest('{{route("admin.approveverifyuser")}}', '{{csrf_token()}}', {id, allow});
    }
</script>
@endsection