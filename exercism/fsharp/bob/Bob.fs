module Bob

let (|Shouting|_|) (interaction: string) =
  if (interaction.ToUpper() = interaction && interaction.ToLower() <> interaction) then Some() else None

let (|Question|_|) (interaction: string) =
  if (interaction.EndsWith("?")) then Some() else None

let (|Silence|_|) (interaction: string) =
  if (interaction = "") then Some() else None

let (|Other|) _ = Other

let response (interaction: string): string =
  match interaction.Trim() with
  | Question & Shouting -> "Calm down, I know what I'm doing!"
  | Question -> "Sure."
  | Shouting -> "Whoa, chill out!"
  | Silence -> "Fine. Be that way!"
  | Other -> "Whatever."
