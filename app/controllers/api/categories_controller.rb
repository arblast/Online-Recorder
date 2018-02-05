class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all().map {|category| {name: category.name, id: category.id}}
    render json: @categories
  end

end
