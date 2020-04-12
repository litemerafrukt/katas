<?php

class Box
{
    public function __construct($thing)
    {
        $this->boxed = $thing;
    }

    public function map($func)
    {
        return new Box($func($this->boxed));
    }

    public function fold($func)
    {
        return $func($this->boxed);
    }
}

function isIsogram($s)
{
    return (new Box($s))
        ->map('mb_strtolower')
        ->map(function ($sa) { return preg_replace('/\s|-/u', '', $sa); })
        ->map(function ($s) { return preg_split('//u', $s, null, PREG_SPLIT_NO_EMPTY); })
        ->fold(function ($sa) {
            return array_unique($sa) == $sa;
        });
}
