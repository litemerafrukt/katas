<?php

function isPangram($phrase)
{
    $alphabet = str_split('abcdefghijklmnopqrstuvxyz');
    $lower_phrase_arr = str_split(mb_strtolower($phrase));

    return empty(array_diff($alphabet, $lower_phrase_arr));
}
