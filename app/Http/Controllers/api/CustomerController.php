<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Customer;
use Validator;

class CustomerController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();
        $success['user'] = $user;
        $success['customers'] = Customer::get();
        return $this->sendResponse($success, 'Customers retrieved successfully.');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $teamId = auth()->user()->current_team_id;
        $customer = new Customer();
        $customer->first_name = $input['first_name'];
        $customer->last_name = $input['last_name'];
        $customer->email = $input['email'];
        $customer->phone = $input['phone'];
        $customer->ip = $input['ip'];
        $customer->attributes = $input['attributes'];
        $customer->save();

        return $this->sendResponse($customer, 'Customer created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = Customer::find($id);

        if (is_null($customer)) {
            return $this->sendError('Customer not found.');
        }

        return $this->sendResponse($customer, 'customer retrieved successfully.');
    }

    public function edit($id)
    {
        $customer = Customer::find($id);

        if (is_null($customer)) {
            return $this->sendError('Customer not found.');
        }

        return $this->sendResponse($customer, 'Customer retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
    	$currentCustomer = Customer::find($id);

        if (!$currentCustomer) {

            return this->sendError('error' , 'The specified Customer does not exist or is not associated with the current team.');
        }

        $currentCustomer->first_name = $input['first_name'];
        $currentCustomer->last_name = $input['last_name'];
        $currentCustomer->email = $input['email'];
        $currentCustomer->phone = $input['phone'];
        $currentCustomer->ip = $input['ip'];
        $currentCustomer->attributes = $input['attributes'];
        $currentCustomer->save();

        return $this->sendResponse($currentCustomer, 'Current Customer updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {

        $currentCustomer = Customer::find($customer->id);

        if (!$currentCustomer) {
            return this->sendError('error', 'The specified Customer does not exist or is not associated with the current team.');
        }

        try {
            $customer->delete();
        } catch (\Exception $e) {
            return this->sendError('error', 'Unable to delete Customer.');
        }
        return $this->sendResponse([], 'Customer deleted successfully.');
    }
}
