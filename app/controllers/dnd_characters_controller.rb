class DndCharactersController < ApplicationController
  before_action :set_dnd_character, only: %i[ show edit update destroy ]

  # GET /dnd_characters or /dnd_characters.json
  def index
    @dnd_characters = DndCharacter.all
  end

  # GET /dnd_characters/1 or /dnd_characters/1.json
  def show
  end

  # GET /dnd_characters/new
  def new
    @dnd_character = DndCharacter.new
  end

  # GET /dnd_characters/1/edit
  def edit
  end

  # POST /dnd_characters or /dnd_characters.json
  def create
    @dnd_character = DndCharacter.new(dnd_character_params)

    respond_to do |format|
      if @dnd_character.save
        format.html { redirect_to dnd_character_url(@dnd_character), notice: "Dnd character was successfully created." }
        format.json { render :show, status: :created, location: @dnd_character }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @dnd_character.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /dnd_characters/1 or /dnd_characters/1.json
  def update
    respond_to do |format|
      if @dnd_character.update(dnd_character_params)
        format.html { redirect_to dnd_character_url(@dnd_character), notice: "Dnd character was successfully updated." }
        format.json { render :show, status: :ok, location: @dnd_character }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @dnd_character.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /dnd_characters/1 or /dnd_characters/1.json
  def destroy
    @dnd_character.destroy

    respond_to do |format|
      format.html { redirect_to dnd_characters_url, notice: "Dnd character was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dnd_character
      @dnd_character = DndCharacter.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dnd_character_params
      params.require(:dnd_character).permit(:character_name, :character_class, :initiative)
    end
end
