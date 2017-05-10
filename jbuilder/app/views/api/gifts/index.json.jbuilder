json.array! @gifts do |gift|
  json.title gift.title
  json.description gift.description
  json.guest gift.guest
end
