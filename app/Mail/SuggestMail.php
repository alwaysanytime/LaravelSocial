<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SuggestMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $mailuser;
    public $maillinks;
    public $mailsubject;

    public function __construct($mailuser, $maillinks, $mailsubject)
    {
        $this->mailuser = $mailuser;
        $this->maillinks = $maillinks;
        $this->mailsubject = $mailsubject;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($address = 'noreply@bookings247.co', $name = "bookings247.co")->subject($this->mailsubject)->view('mail.suggestemail');
    }
}
