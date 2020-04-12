<?php

class Raindrops {

    private $number;

    public function __construct($number)
    {
        $this->number = $number;
    }

    public function speak()
    {
        $say = $this->number % 3 == 0 ? 'Pling' : '';
        $say .= $this->number % 5 == 0 ? 'Plang' : '';
        $say .= $this->number % 7 == 0 ? 'Plong' : '';
        return (string) ($say ?: $this->number);
    }
}

function raindrops($number) {
    return (new Raindrops($number))->speak();
}
