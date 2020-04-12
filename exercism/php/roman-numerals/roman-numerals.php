<?php

class RomanConverter
{
    private $one;
    private $five;
    private $nine;

    public function __construct($one, $five, $nine)
    {
        $this->one = $one;
        $this->five = $five;
        $this->nine = $nine;
    }

    public function toRoman($num)
    {
        if ($num == 0) {
            return '';
        }

        if ($num == 4) {
            return $this->one . $this->five;
        }

        if ($num == 5) {
            return $this->five;
        }

        if ($num == 9) {
            return $this->nine;
        }

        return ($num > 5 ? $this->five : '')
                . str_repeat($this->one, $num % 5);
    }
}

function toRoman($num)
{
    $strNum = str_pad($num, 4, '0', STR_PAD_LEFT);
    $numArr = str_split($strNum);

    $thousands = new RomanConverter('M', 'MMMMM', 'MMMMMMMMM');
    $hundreds = new RomanConverter('C', 'D', 'CM');
    $tenths = new RomanConverter('X', 'L', 'XC');
    $ones = new RomanConverter('I', 'V', 'IX');
    return $thousands->toRoman($numArr[0])
            . $hundreds->toRoman($numArr[1])
            . $tenths->toRoman($numArr[2])
            . $ones->toRoman($numArr[3]);
}
