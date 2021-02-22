<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use App\Http\Middleware\DeleteCustomer;
use App\Http\Middleware\NewCustomer;
use App\Http\Middleware\NewPaymentMethod;

$router->post('/customer', [
    'middleware' => NewCustomer::class,
    'uses' => 'Customer@create'
]);
$router->get('/customer', 'Customer@get');
$router->delete('/customer/{id}', 'Customer@delete');

$router->post('/customer/{id}/payment_method', [
    'middleware' => NewPaymentMethod::class,
    'uses' => 'PaymentMethod@create'
]);
$router->get('/customer/{id}/payment_method', 'PaymentMethod@get');
$router->delete('/customer/{id}/payment_method/{paymentMethodId}', 'PaymentMethod@delete');
