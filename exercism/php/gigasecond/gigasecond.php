<?php

function from (DateTime $date) : DateTimeImmutable
{
    $gs = 10**9;
    return DateTimeImmutable::createFromMutable($date)
        ->add(new DateInterval("PT${gs}S"));
}
