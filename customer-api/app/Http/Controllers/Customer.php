<?php


namespace App\Http\Controllers;

use App\Repository\Address as AddressRepository;
use App\Repository\Customer as CustomerRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class Customer extends Controller
{
    public function create(Request $request)
    {
        try {

            $requestBody = $request->toArray();

            $customerId = CustomerRepository::create($requestBody);

            $addressId = AddressRepository::create($requestBody['address'], $customerId);

            $customer = CustomerRepository::getById($customerId);

            $customer->address = AddressRepository::getById($addressId);

            return new JsonResponse($customer);

        } catch (\Exception $exception) {
            return new JsonResponse(
                ['error' => true, 'message' => $exception->getMessage()],
                400
            );
        }
    }

    public function get()
    {
        $customers = CustomerRepository::getAll();

        foreach ($customers as &$customer) {
            $customer->address = AddressRepository::getByCustomerId($customer->id);
        }

        return new JsonResponse($customers);
    }

    public function delete(Request $request, $id)
    {
        $addressDeleted = AddressRepository::deleteByCustomerId($id);

        if (!$addressDeleted) {
            return new JsonResponse(['error' => true, 'message' => 'Customer/Address not found.'], 400);
        }

        $customerDeleted = CustomerRepository::deleteById($id);

        if (!$customerDeleted) {
            return new JsonResponse(['error' => true, 'message' => 'Customer not found.'], 400);
        }

        return new JsonResponse(null, 204);
    }
}
