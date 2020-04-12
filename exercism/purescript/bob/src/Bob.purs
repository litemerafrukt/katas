module Bob (hey) where

import Prelude
import Data.Array
import Data.String
import Data.Maybe

answer (Just '?') = "Sure."
answer (Just _) = "Whatever."
answer Nothing = "Whatever."

hey s = answer $ last $ toCharArray s
