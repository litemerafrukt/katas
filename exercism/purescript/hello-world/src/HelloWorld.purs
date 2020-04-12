module HelloWorld where

import Prelude
import Data.Maybe (Maybe(Just, Nothing))

helloWorld :: Maybe String -> String
helloWorld (Just name) = "Hello, " <> name <> "!"
helloWorld Nothing = "Hello, World!"