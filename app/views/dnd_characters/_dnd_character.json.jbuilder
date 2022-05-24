json.extract! dnd_character, :id, :character_name, :character_class, :initiative, :created_at, :updated_at
json.url dnd_character_url(dnd_character, format: :json)
