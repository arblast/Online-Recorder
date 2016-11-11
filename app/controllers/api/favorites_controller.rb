class Api::FavoritesController < ApplicationController

  def create
   @favorite = Favorite.new(favorites_params)
   @favorite.user_id = current_user.id

   if @favorite.save
     @is_favorite = @favorite.recording.is_favorite?(current_user)
     @recording = @favorite.recording
     render "/api/recordings/show", status: 200
   else
     render json: @favorite.errors.full_messages, status: 422
   end
 end

 def destroy
   @favorite = Favorite.find_by(
     user_id: current_user.id,
     recording_id: params[:id]
   )
   if @favorite
     if @favorite.destroy
       @recording = Recording.find(params[:id])
       @is_favorite = false
       render "/api/recordings/show", status: 200
     else
       render json: @favorite.errors.full_messages, status: 422
     end
   end
 end

 private
 def favorites_params
   params.require(:favorite).permit(:recording_id)
 end

end
