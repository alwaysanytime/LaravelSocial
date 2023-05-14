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
                            <th><input id="username" onkeyup="search(event, 'username')" placeholder="Username" class="form-control"></th>
                            <th><input id="linkname" onkeyup="search(event, 'linkname')" placeholder="Link Name" class="form-control"></th>
                            <th><input id="linkurl" onkeyup="search(event, 'linkurl')" placeholder="Link URL" class="form-control"></th>
                            <th>Date Sent</th>
                            <th>No of emails sent</th>
                        </tr>
                    </thead>
                    <tbody id="admins">
                        @foreach ($useremails as $useremail)
                            <tr>
                                <td><a href="/{{$useremail->username}}">{{$useremail->username}}</a></td>
                                <td>{{$useremail->linkname}}</td>
                                <td>{{$useremail->linkurl}}</td>
                                <td>{{$useremail->created_at}}</td>
                                <td>
                                    {{$useremail->send == -1 ? 0 : $useremail->send}}
                                    @if ($useremail->send == -1)
                                        <div style="color: red;">Disabled</div>    
                                    @endif
                                </td>                                
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
    </div>
    <!--end::Col-->
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
</script>
@endsection