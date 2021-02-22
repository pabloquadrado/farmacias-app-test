<?php

namespace App\Http\Controllers;

use App\Repository\CustomerPaymentMethod;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PaymentMethod extends Controller
{
    public function create(Request $request, $id)
    {
        try {

            $paymentMethodId = CustomerPaymentMethod::create($request->toArray(), $id);

            return new JsonResponse(CustomerPaymentMethod::getById($paymentMethodId));

        } catch (\Exception $exception) {
            return new JsonResponse(
                ['error' => true, 'message' => $exception->getMessage()],
                400
            );
        }
    }

    public function get(Request $request, $id)
    {
        return CustomerPaymentMethod::getAll($id);
    }

    public function delete(Request $request, $id, $paymentMethodId)
    {
        $paymentMethodDeleted = CustomerPaymentMethod::deleteById($paymentMethodId);

        if (!$paymentMethodDeleted) {
            return new JsonResponse(['error' => true, 'message' => 'Customer Payment Method not found.'], 400);
        }

        return new JsonResponse(null, 204);
    }
}
