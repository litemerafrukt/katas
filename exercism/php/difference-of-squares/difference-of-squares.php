<?php

abstract class DiffSumStuff
{
    protected $sum;

    public function getSum()
    {
        return $this->sum;
    }

    public function difference(DiffSumStuff $val)
    {
        return $this->sum - $val->getSum();
    }
}

class SquareSum extends DiffSumStuff
{
    public function __construct(int $number)
    {
        $this->sum = array_sum(range(1, $number)) ** 2;
    }
}

class SumSquare extends DiffSumStuff
{
    public function __construct(int $number)
    {
        $this->sum = array_reduce(range(1, $number), function ($s, $n) {
            return $s + $n ** 2;
        }, 0);
    }
}

function squareOfSums(int $number)
{
    return (new SquareSum($number))->getSum();
}

function sumOfSquares(int $number)
{
    return (new SumSquare($number))->getSum();
}

function difference(int $number)
{
    $squareSum = new SquareSum($number);
    $sumSquare = new SumSquare($number);
    return $squareSum->difference($sumSquare);
}
