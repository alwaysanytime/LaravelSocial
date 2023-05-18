<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Asset;
use Validator;

class AssetController extends BaseController
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
        $team = $user->current_team_id;
        $success['team'] = $team;
        $assetsQuery = Asset::query()->where('team_id', $team);
        $success['assets'] = $assetsQuery->get();

        return $this->sendResponse($success, 'Assets retrieved successfully.');
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

        $asset = new Asset();
        $asset->name = $input['name'];
        $asset->amount = $input['amount'];
        $asset->resource_tracking = $input['resource_tracking'];
        $asset->team_id = $teamId;
        $asset->save();

        return $this->sendResponse('$asset', 'Asset created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);

        if (is_null($product)) {
            return $this->sendError('Product not found.');
        }

        return $this->sendResponse(new ProductResource($product), 'Product retrieved successfully.');
    }

    public function edit($id)
    {
        $asset = Asset::find($id);

        if (is_null($asset)) {
            return $this->sendError('Asset not found.');
        }

        return $this->sendResponse($asset, 'Asset retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Asset $asset)
    {
        $input = $request->all();

        $user = auth()->user();
        $teamId = $user->current_team_id;

        $assetsQuery = Asset::query()->where('team_id', $teamId);
    	$currentAsset = $assetsQuery->find($asset->id);

        if (!$currentAsset) {

            return this->sendError('error' , 'The specified asset does not exist or is not associated with the current team.');
        }

        $currentAsset->name = $input['name'];
        $currentAsset->amount = $input['amount'];
        $currentAsset->resource_tracking = $input['resource_tracking'];
        $currentAsset->save();

        return $this->sendResponse($currentAsset, 'Current Asset updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Asset $asset)
    {
        $user = auth()->user();
        $team = $user->current_team_id;

        $assetsQuery = Asset::query()->where('team_id', $team);
    	$currentAsset = $assetsQuery->find($asset->id);

        if (!$currentAsset) {
            return this->sendError('error', 'The specified asset does not exist or is not associated with the current team.');
        }

        try {
            $asset->delete();
        } catch (\Exception $e) {
            return this->sendError('error', 'Unable to delete asset.');
        }
        return $this->sendResponse([], 'Asset deleted successfully.');
    }
}
