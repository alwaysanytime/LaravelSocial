@extends('layouts.dashboard')

@section('content')
<div class="w-100" style="background: rgb(244, 244, 244); border-radius: 10px; padding: 15px;">
    <div class="d-flex justify-content-end">
        <button class="btn btn-primary" onclick="newstyle()">Add New Style</button>
    </div>
    <div class="color-picker">
        <div class="d-flex flex-column  justify-content-start">
            <div>Background Color</div>
            <input class="colorpicker" type="text" id="background" rgba value="#ffffff"/>
        </div>
        <div class="d-flex flex-column  justify-content-start">
            <div>Font Color</div>
            <input class="colorpicker" type="text" id="color" rgba  value="#ffffff"/>
        </div>
        <div class="d-flex flex-column  justify-content-start">
            <div>Button Color</div>
            <input class="colorpicker" type="text" id="link" rgba  value="#ffffff"/>
        </div>
        <div class="d-flex flex-column  justify-content-start">
            <div>Button Text</div>
            <input class="colorpicker" type="text" id="linkColor" rgba  value="#ffffff"/>
        </div>
        <div class="d-flex flex-column  justify-content-start justify-content-start">
            <div>Button Hover</div>
            <input class="colorpicker" type="text" id="buttonhover" rgba  value="#ffffff"/>
        </div>
        <div class="d-flex flex-column  justify-content-start">
            <div>Button Border</div>
            <input class="colorpicker" type="text" id="buttonborder" rgba  value="#ffffff"/>
        </div>
    </div>
    <div class="color-picker">
        <div class="d-flex flex-column  justify-content-start">
            <div>Follow Button Color</div>
            <input class="colorpicker" type="text" id="followbutton" rgba value="#ffffff"/>
        </div>
        <div class="d-flex flex-column  justify-content-start">
            <div>Follow Button Font</div>
            <input class="colorpicker" type="text" id="followbuttonfont" rgba  value="#ffffff"/>
        </div>
        <div class="d-flex flex-column  justify-content-start">
            <div>Follow Button Hover</div>
            <input class="colorpicker" type="text" id="followbuttonhover" rgba  value="#ffffff"/>
        </div>
        <div class="d-flex flex-column  justify-content-start">
            <div>Follow Button Border</div>
            <input class="colorpicker" type="text" id="followbuttonborder" rgba  value="#ffffff"/>
        </div>
    </div>
    <div class="color-picker">
        <div class="d-flex flex-column  justify-content-start">
            <div>Following Button Color</div>
            <input class="colorpicker" type="text" id="followingbutton" rgba value="#ffffff"/>
        </div>
        <div class="d-flex flex-column  justify-content-start">
            <div>Following Button Font</div>
            <input class="colorpicker" type="text" id="followingbuttonfont" rgba  value="#ffffff"/>
        </div>
        <div class="d-flex flex-column  justify-content-start">
            <div>Following Button Hover</div>
            <input class="colorpicker" type="text" id="followingbuttonhover" rgba  value="#ffffff"/>
        </div>
        <div class="d-flex flex-column  justify-content-start">
            <div>Following Button Border</div>
            <input class="colorpicker" type="text" id="followingbuttonborder" rgba  value="#ffffff"/>
        </div>
    </div>
    <div>
        <button onclick="saveStyle()" class="btn btn-success">Save</button>
        <button onclick="removeStyle()" class="btn btn-danger">Remove</button>
    </div>
    <div class="style-container">
        @foreach ($styles as $style)
            <div class="color-selector" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)" id="{{$style->id}}" draggable="true" style="background-color: {{$style->background}};" id="style{{$style->id}}" onclick="setActive({{$style->id}})">
                <div class='link-position text-center' style="background-color: {{$style->followbutton}};color: {{$style->followbuttonfont}};">Follow</div>
                <div class='link-position text-center' style="background-color: {{$style->followingbutton}};color: {{$style->followingbuttonfont}};">Following</div>
                <div class='link-position' style="background-color: {{$style->link}};"></div>
                <div class='link-position' style="background-color: {{$style->link}};"></div>
                <div class='link-position' style="background-color: {{$style->link}};"></div>
            </div>
        @endforeach
    </div>
</div>
@endsection
@section('js-file')
<script>
    colors = [];
    @foreach ($styles as $style)
        colors[{{$style->id}}] = {
            background: '{{$style->background}}',
            color: '{{$style->color}}',
            link: '{{$style->link}}',
            linkColor: '{{$style->linkColor}}',
            buttonborder: '{{$style->buttonborder}}',
            buttonhover: '{{$style->buttonhover}}',
            followbutton: '{{$style->followbutton}}',
            followbuttonfont: '{{$style->followbuttonfont}}',
            followbuttonhover: '{{$style->followbuttonhover}}',
            followbuttonborder: '{{$style->followbuttonborder}}',
            followingbutton: '{{$style->followingbutton}}',
            followingbuttonfont: '{{$style->followingbuttonfont}}',
            followingbuttonhover: '{{$style->followingbuttonhover}}',
            followingbuttonborder: '{{$style->followingbuttonborder}}',
        }
    @endforeach
    let last = -1;
    const background = document.getElementById('background');
    const color = document.getElementById('color');
    const link = document.getElementById('link');
    const linkColor = document.getElementById('linkColor');
    const buttonhover = document.getElementById('buttonhover');
    const buttonborder = document.getElementById('buttonborder');
    const followbutton = document.getElementById('followbutton');
    const followbuttonfont = document.getElementById('followbuttonfont');
    const followbuttonhover = document.getElementById('followbuttonhover');
    const followbuttonborder = document.getElementById('followbuttonborder');
    const followingbutton = document.getElementById('followingbutton');
    const followingbuttonfont = document.getElementById('followingbuttonfont');
    const followingbuttonhover = document.getElementById('followingbuttonhover');
    const followingbuttonborder = document.getElementById('followingbuttonborder');

    function setColor(index) {
        background.value = colors[index].background;
        color.value = colors[index].color;
        link.value = colors[index].link;
        linkColor.value = colors[index].linkColor;
        buttonhover.value = colors[index].buttonhover;
        buttonborder.value = colors[index].buttonborder;
        followbutton.value = colors[index].followbutton;
        followbuttonfont.value = colors[index].followbuttonfont;
        followbuttonhover.value = colors[index].followbuttonhover;
        followbuttonborder.value = colors[index].followbuttonborder;
        followingbutton.value = colors[index].followingbutton;
        followingbuttonfont.value = colors[index].followingbuttonfont;
        followingbuttonhover.value = colors[index].followingbuttonhover;
        followingbuttonborder.value = colors[index].followingbuttonborder;
    }

    function newstyle() {
        sendRequest("{{route('admin.changestyle')}}", "{{csrf_token()}}", {
            background: background.value,
            color: color.value,
            link: link.value,
            linkColor: linkColor.value,
            buttonborder: buttonborder.value,
            buttonhover: buttonhover.value,
            followbutton: followbutton.value,
            followbuttonfont: followbuttonfont.value,
            followbuttonhover: followbuttonhover.value,
            followbuttonborder: followbuttonborder.value,
            followingbutton: followingbutton.value,
            followingbuttonfont: followingbuttonfont.value,
            followingbuttonhover: followingbuttonhover.value,
            followingbuttonborder: followingbuttonborder.value,
        });
    }

    function setActive(id) {
        lastStyle = document.getElementById("style"+last);
        if (lastStyle) lastStyle.classList.remove('active');
        last = id;
        style = document.getElementById(id);
        style.classList.add('active');
        setColor(id);
    }

    function saveStyle() {
        if (last != -1)
        sendRequest("{{route('admin.changestyle')}}", "{{csrf_token()}}", {
            id: last,
            background: background.value,
            color: color.value,
            link: link.value,
            linkColor: linkColor.value,
            buttonborder: buttonborder.value,
            buttonhover: buttonhover.value,
            followbutton: followbutton.value,
            followbuttonfont: followbuttonfont.value,
            followbuttonhover: followbuttonhover.value,
            followbuttonborder: followbuttonborder.value,
            followingbutton: followingbutton.value,
            followingbuttonfont: followingbuttonfont.value,
            followingbuttonhover: followingbuttonhover.value,
            followingbuttonborder: followingbuttonborder.value,
        });
    }

    function removeStyle() {
        sendRequest("{{route('admin.removestyle')}}", "{{csrf_token()}}", {id: last});
    }
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.5.3/js/bootstrap-colorpicker.min.js"></script>
    <script>
        $('.colorpicker').colorpicker();
        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function drop(ev) {
            ev.preventDefault();
            var from = ev.dataTransfer.getData("text");
            var to = ev.currentTarget.id;
            if (from != to)
            sendRequest("{{route('admin.swaplink')}}", "{{csrf_token()}}", {from, to});
        }
    </script>
    
@endsection