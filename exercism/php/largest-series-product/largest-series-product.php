<?php

class Chunkifier
{
    private $array;
    private $chunkSize;

    public function __construct($array, $chunkSize)
    {
        $this->array = $array;
        $this->chunkSize = $chunkSize;
    }

    public function chunks()
    {
        $stop = count($this->array) - $this->chunkSize;
        for ($i = 0; $i <= $stop; $i++) {
            yield array_slice($this->array, $i, $this->chunkSize);
        }
    }

    public function fold($f, $initial)
    {
        $carry = $initial;
        foreach ($this->chunks() as $chunk) {
            $carry = $f($carry, $chunk);
        }
        return $carry;
    }
}

class Series
{
    private $series;

    public function __construct($series)
    {
        $this->series = str_split((string)$series);
    }

    private function validateChunkSize($chunkSize)
    {
        if ($chunkSize < 0 || $chunkSize > count($this->series)) {
            throw new InvalidArgumentException();
        }
    }

    private function validateNumber($number)
    {
        if (! is_numeric($number)) {
            throw new InvalidArgumentException();
        }
    }

    public function largestProduct($chunkSize)
    {
        $this->validateChunkSize($chunkSize);

        $chunkifier = new Chunkifier($this->series, $chunkSize);

        return $chunkifier->fold(function ($carry, $chunk) {
            $product = array_reduce($chunk, function($p, $n) {
                $this->validateNumber($n);
                return $p * $n;
            }, 1);

            return $product > $carry ? $product : $carry;
        }, 0);
    }
}
