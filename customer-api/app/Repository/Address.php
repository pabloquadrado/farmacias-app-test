<?php

namespace App\Repository;

use Illuminate\Support\Facades\DB;

class Address
{
    public static function create(array $address, int $customerId): int
    {
        $fieldsToPersist = [
            'customer_id' => $customerId,
            'street' => $address['street'],
            'district' => $address['district'],
            'city' => $address['city'],
            'state' => $address['state'],
            'zip_code' => $address['zip_code']
        ];

        if (array_key_exists('number', $address)) {
            $fieldsToPersist['number'] = $address['number'];
        }

        if (array_key_exists('complement', $address)) {
            $fieldsToPersist['complement'] = $address['complement'];
        }

        foreach ($fieldsToPersist as $name => $value) {
            if ($value === null) {
                unset($fieldsToPersist[$name]);
            }
        }

        return DB::table('addresses')->insertGetId($fieldsToPersist);
    }

    public static function getById(int $addressId)
    {
        return DB::table('addresses')
            ->select([
                'id',
                'street',
                'number',
                'complement',
                'district',
                'city',
                'state',
                'zip_code'
            ])
            ->where('id', $addressId)
            ->first();
    }

    public static function getByCustomerId(int $customerId)
    {
        return DB::table('addresses')
            ->select([
                'id',
                'street',
                'number',
                'complement',
                'district',
                'city',
                'state',
                'zip_code'
            ])
            ->where('customer_id', $customerId)
            ->first();
    }

    public static function deleteByCustomerId(int $customerId)
    {
        return DB::table('addresses')
            ->where('customer_id', $customerId)
            ->delete();
    }
}
