class HeroesController < ApplicationController
 
  def index
    respond_to do |format|
      format.html { render json: Hero.all }
    end
  end
   
  def show
    respond_to do |format|
      format.html { render json: Hero.find_by( params[:id] ) }
    end
  end
   
  def update
    Hero.find(params[:id]).update_attributes(hero_params)
       
    respond_to do |format|
      format.html { render nothing: true }
    end
  end
 
end