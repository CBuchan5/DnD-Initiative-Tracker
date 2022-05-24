require "test_helper"

class DndCharactersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dnd_character = dnd_characters(:one)
  end

  test "should get index" do
    get dnd_characters_url
    assert_response :success
  end

  test "should get new" do
    get new_dnd_character_url
    assert_response :success
  end

  test "should create dnd_character" do
    assert_difference("DndCharacter.count") do
      post dnd_characters_url, params: { dnd_character: { character_class: @dnd_character.character_class, character_name: @dnd_character.character_name, initiative: @dnd_character.initiative } }
    end

    assert_redirected_to dnd_character_url(DndCharacter.last)
  end

  test "should show dnd_character" do
    get dnd_character_url(@dnd_character)
    assert_response :success
  end

  test "should get edit" do
    get edit_dnd_character_url(@dnd_character)
    assert_response :success
  end

  test "should update dnd_character" do
    patch dnd_character_url(@dnd_character), params: { dnd_character: { character_class: @dnd_character.character_class, character_name: @dnd_character.character_name, initiative: @dnd_character.initiative } }
    assert_redirected_to dnd_character_url(@dnd_character)
  end

  test "should destroy dnd_character" do
    assert_difference("DndCharacter.count", -1) do
      delete dnd_character_url(@dnd_character)
    end

    assert_redirected_to dnd_characters_url
  end
end
