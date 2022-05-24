require "application_system_test_case"

class DndCharactersTest < ApplicationSystemTestCase
  setup do
    @dnd_character = dnd_characters(:one)
  end

  test "visiting the index" do
    visit dnd_characters_url
    assert_selector "h1", text: "Dnd characters"
  end

  test "should create dnd character" do
    visit dnd_characters_url
    click_on "New dnd character"

    fill_in "Character class", with: @dnd_character.character_class
    fill_in "Character name", with: @dnd_character.character_name
    fill_in "Initiative", with: @dnd_character.initiative
    click_on "Create Dnd character"

    assert_text "Dnd character was successfully created"
    click_on "Back"
  end

  test "should update Dnd character" do
    visit dnd_character_url(@dnd_character)
    click_on "Edit this dnd character", match: :first

    fill_in "Character class", with: @dnd_character.character_class
    fill_in "Character name", with: @dnd_character.character_name
    fill_in "Initiative", with: @dnd_character.initiative
    click_on "Update Dnd character"

    assert_text "Dnd character was successfully updated"
    click_on "Back"
  end

  test "should destroy Dnd character" do
    visit dnd_character_url(@dnd_character)
    click_on "Destroy this dnd character", match: :first

    assert_text "Dnd character was successfully destroyed"
  end
end
