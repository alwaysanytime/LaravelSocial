<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class LinkEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $url;
    public $username;
    public $email;
    public $avatar;
    public $display;
    public $title;

    public function __construct($url, $username, $email, $avatar, $display, $title)
    {
        $this->url = $url;
        $this->username = $username;
        $this->email = $email;
        $this->avatar = $avatar;
        $this->display = $display;
        $this->title = $title;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($address = 'noreply@bookings247.co', $name = 'bookings247.co')->subject($this->username." has a link they want you to check out!")->view('mail.linkemail');
    }
}
