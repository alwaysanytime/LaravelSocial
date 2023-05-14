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
                <h3 class="card-title fw-bolder fs-2 text-black" style="padding: 7px;">Feedbacks</h3>
            </div>
            <div class="separator margin-0"></div>
            <div class="d-flex justify-content-end me-10">
                <div class="modal fade" tabindex="-1" id="feedbackmodal">
                    <div class="modal-dialog" style="margin-top: 100px;">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Feedback</h5>
                                <!--begin::Close-->
                                <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                    <span class="svg-icon svg-icon-2x"></span>
                                </div>
                                <!--end::Close-->
                            </div>

                            <div class="modal-body">
                                <div class="mt-2">
                                    <label class="form-label required">Sender</label>
                                    <input class="form-control form-control-solid" id="sender" readonly/>
                                </div>
                                <div class="d-flex mt-5">
                                    <textarea id="feedback" class="form-control">
                                    </textarea>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="customized-scrollbar mb-10" style="max-width: 100% !important;overflow: auto !important;">
                <table class="table table-striped gy-7 gs-7" id="usertable">
                    <thead>
                        <tr class="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                            <th>ID</th>
                            <th><input id="email" onkeyup="search(event, 'email')" placeholder="Email" class="form-control"></th>
                            <th><input id="email" onkeyup="search(event, 'username')" placeholder="Username" class="form-control"></th>
                            <th>Feedback</th>
                            <th>Opened</th>
                            <th>View</th>
                            <th>CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody id="admins">
                        @foreach ($feedbacks as $feedback)
                            <?php $email = $feedback->userid ? $feedback->user->email : $feedback->email; ?> 
                            <tr>
                                <td>{{$feedback->id}}</td>
                                <td>{{$email}}</td>
                                <td>{{$feedback->userid ? $feedback->user->username : ''}}</td>
                                <td>{{$feedback->feedback}}</td>
                                <td>
                                    @if ($feedback->read)
                                        <div class="bg-primary" id='{{"state".$feedback->id}}'>Opened</div>
                                    @else
                                        <div class="bg-danger" id='{{"state".$feedback->id}}'>Not Opened</div>
                                    @endif
                                </td>
                                <td>
                                    <a data-bs-toggle="modal" data-bs-target="#feedbackmodal" class="btn btn-success" onClick="viewFeedback('{{$feedback->id}}', '{{$feedback->feedback}}', '{{$feedback->read}}', '{{$email}}')">View</a>
                                </td>
                                <td>{{$feedback->created_at}}</td>
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
    function search(event, field) {
        table = document.getElementById('admins');
        for (let i = 0; i < table.children.length; i++) {
            let content = table.children[i].children[1].innerHTML;
            if (field == 'username') content = table.children[i].children[2].children[0].innerHTML;
            if (content.indexOf(event.target.value) != -1)
                table.children[i].style.display = 'table-row';
            else table.children[i].style.display = 'none';
        }
    }
</script>
<script>
    function toggle(id) {
        sendRequest('{{route('admin.toggle')}}', '{{csrf_token()}}', {id});
    }
    function remove(id) {
        sendRequest('{{route('admin.remove')}}', '{{csrf_token()}}', {id});
    }

    let unread = {{$data['unread']}};

    function viewFeedback(id, feedback, read, email) {
        document.getElementById('sender').value = email;
        document.getElementById('feedback').value = feedback;
        state = document.getElementById('state' + id);
        if (state.innerHTML == "Not Opened") {
            state.classList.remove('bg-danger');
            state.classList.add('bg-primary');
            state.innerHTML = "Read";
            unread--;
            document.getElementById('feedbackunread').innerHTML = "Feedback (" + unread + ")";
            sendRequest("{{route('admin.readfeedback')}}", "{{csrf_token()}}", {id}, false);
        }
    }
</script>
@endsection