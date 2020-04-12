defmodule SecretHandshake do
  use Bitwise

  @doc """
  Determine the actions of a secret handshake based on the binary
  representation of the given `code`.

  If the following bits are set, include the corresponding action in your list
  of commands, in order from lowest to highest.

  1 = wink
  10 = double blink
  100 = close your eyes
  1000 = jump

  10000 = Reverse the order of the operations in the secret handshake
  """

  @wink_bit 0b1
  @double_blink_bit 0b10
  @close_your_eyes_bit 0b100
  @jump_bit 0b1000
  @reverse 0b10000

  @spec commands(code :: integer) :: list(String.t())
  def commands(code) do
    actions =
      [
        if((code &&& @wink_bit) != 0, do: "wink"),
        if((code &&& @double_blink_bit) != 0, do: "double blink"),
        if((code &&& @close_your_eyes_bit) != 0, do: "close your eyes"),
        if((code &&& @jump_bit) != 0, do: "jump")
      ]
      |> Enum.reject(fn x -> x == nil end)

    if (code &&& @reverse) != 0 do
      Enum.reverse(actions)
    else
      actions
    end
  end
end
