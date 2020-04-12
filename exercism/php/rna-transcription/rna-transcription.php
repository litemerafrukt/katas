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
}


class RNA
{
    const TRANS_TABLE = [
        'G' => 'C',
        'C' => 'G',
        'T' => 'A',
        'A' => 'U',
    ];

    private $rna;

    public function __construct(array $dna)
    {
        $this->rna = array_map(function ($nucleotide) {
            return self::TRANS_TABLE[$nucleotide];
        }, $dna);
    }

    public function strand() : string
    {
        return implode('', $this->rna);
    }
}

function toRna($dna) {
    return (new RNA((new DNA($dna))->array()))->strand();
}
