<?php


namespace App\Http\Middleware;


use Closure;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\ProvidesConvenienceMethods;

class NewPaymentMethod
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
            'payment_method' => 'required|in:PIX,CREDIT_CARD'
        ]);

        return $next($request);
    }
}
