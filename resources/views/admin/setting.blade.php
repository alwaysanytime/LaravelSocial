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
                <h3 class="card-title fw-bolder fs-2 text-black" style="padding: 7px;">Settings</h3>
            </div>
            <div class="p-5">
                <div class="d-flex align-items-center">
                    <div class="me-4">Amazon ID</div>
                    <input type="text" id="amazon" class="form-control me-4" style="width: 200px;" value="{{$user->display}}">
                    <div><button class="btn btn-primary" onclick="updateTracking()">Update</button></div>
                </div>
                <div class="d-flex align-items-center mt-3">
                    <div class="me-4">Add Amazon tracking</div>
                    @if ($user->badge)
                    <input type="checkbox" id="tracking" checked/>
                    @else
                    <input type="checkbox" id="tracking"/>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <!--end::Col-->
</div>
<script>
    function updateTracking() {
        const amazon = $('#amazon').val();
        const tracking = $('#tracking').prop('checked');
        sendRequest("{{route('admin.savesetting')}}", "{{csrf_token()}}", {amazon, tracking: tracking ? 1 : 0});
    }
</script>
@endsection