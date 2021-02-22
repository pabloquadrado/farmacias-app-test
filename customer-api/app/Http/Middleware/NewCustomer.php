<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\ProvidesConvenienceMethods;

class NewCustomer
{
    use ProvidesConvenienceMethods;

    /**
     * @param Request $request
     * @param Closure $next
     *
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $this->validate($request, [
            'name' => 'required',
            'document_number' => 'required',
            'address.street' => 'required',
            'address.district' => 'required',
            'address.city' => 'required',
            'address.state' => 'required',
            'address.zip_code' => 'required',
        ]);

        return $next($request);
    }
}
