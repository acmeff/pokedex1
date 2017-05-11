json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :items

json.image_url asset_path(@pokemon.image_url)
