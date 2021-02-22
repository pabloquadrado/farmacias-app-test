<?php

namespace App\Repository;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class Customer
{
    public static function create(array $customer): int
    {
        return DB::table('customers')->insertGetId([
            'name' => $customer['name'],
            'document_number' => $customer['document_number'],
        ]);
    }

    public static function getById(int $customerId)
    {
        return DB::table('customers')
            ->where('id', $customerId)
            ->first();
    }

    public static function getAll()
    {
        return DB::table('customers')
            ->select([
                'id',
                'name',
                'document_number'
            ])
            ->get();
    }

    public static function deleteById(int $customerId)
    {
        return DB::table('customers')->delete($customerId);
    }
}
