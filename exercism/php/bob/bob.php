<?php

interface RespondeTo {
    public function response() : string;
}

class Silence implements RespondeTo
{
    public function response() : string
    {
        return 'Fine. Be that way!';
    }
}

class Yell implements RespondeTo
{
    public function response() : string
    {
        return 'Whoa, chill out!';
    }
}

class Question implements RespondeTo
{
    public function response() : string
    {
        return 'Sure.';
    }
}

class AnythingElse implements RespondeTo
{
    public function response() : string
    {
        return 'Whatever.';
    }
}

class Statement
{
    public static function parse(string $statement): RespondeTo
    {
        if (trim($statement) == '') {
            return new Silence();
        }

        if (mb_strtoupper($statement) == $statement && mb_strtolower($statement) != $statement) {
            return new Yell();
        }

        if (substr(trim($statement), -1) == '?') {
            return new Question();
        }

        return new AnythingElse();
    }
}

class Bob
{
    public function respondTo(string $statement) : string
    {
        return Statement::parse($statement)->response();
    }
}
