defmodule HelloWorld do
    @spec hello(String.t) :: String.t
    def hello(name) do
        "Hello, " <> name <> "!"
    end

    @spec hello() :: String.t
    def hello() do
        "Hello, World!"
    end
end
