<?php

namespace App\Repository;

use Illuminate\Support\Facades\DB;

class CustomerPaymentMethod
{
    public static function create(array $customerPaymentMethod, int $customerId)
    {
        $fieldsToPersist = [
            'customer_id' => $customerId,
            'payment_method' => $customerPaymentMethod['payment_method']
        ];

        $optionalsFields = [
            'pix_key',
            'card_holder_name',
            'card_number',
            'card_expiration_month',
            'card_expiration_year'
        ];

        foreach ($optionalsFields as $field) {
            if (array_key_exists($field, $customerPaymentMethod)) {
                $fieldsToPersist[$field] = $customerPaymentMethod[$field];
            }
        }

        return DB::table('customers_payment_methods')->insertGetId($fieldsToPersist);
    }

    public static function getById($id)
    {
        return DB::table('customers_payment_methods')
            ->where('id', $id)
            ->first();
    }

    public static function getAll($customerId)
    {
        return DB::table('customers_payment_methods')
            ->where('customer_id', $customerId)
            ->get();
    }

    public static function deleteById(int $paymentMethodId)
    {
        return DB::table('customers_payment_methods')->delete($paymentMethodId);
    }
}
