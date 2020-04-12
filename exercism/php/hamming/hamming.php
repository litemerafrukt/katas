<?php

class DNA
{
    private $dna;

    public function __construct(string $dna)
    {
        $this->dna = $dna;
    }

    public function array() : array
    {
        return str_split($this->dna);
    }

    public function count() : int
    {
        return strlen($this->dna);
    }
}

class HammingDistance
{
    private $aStrand;
    private $bStrand;

    function __construct(DNA $aStrand, DNA $bStrand)
    {
        // Validate input
        if ($aStrand->count() != $bStrand->count()) {
            throw new InvalidArgumentException('DNA strands must be of equal length.');
        }
        $this->aStrand = $aStrand;
        $this->bStrand = $bStrand;
    }

    private function zipStrands()
    {
        return array_map(function ($a, $b) {
            return [$a, $b];
        }, $this->aStrand->array(), $this->bStrand->array());
    }

    public function distance() : int
    {
        return array_reduce($this->zipStrands(), function ($count, $pair) {
           return $pair[0] != $pair[1] ? $count + 1: $count;
        }, 0);
    }
}

function distance($a, $b)
{
    $hamming = new HammingDistance(
        new DNA($a),
        new DNA($b)
    );

    return $hamming->distance();
}
