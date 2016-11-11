class Api::RecordingsController < ApplicationController

  def index
    case params[:request][:type]
    when "favorites"
      @recordings = current_user.favorited_recordings;
    when "uploaded"
      @recordings = current_user.recordings;
    when "search"
      @recordings = Recording.all
    end
  end

  def show
    @recording = Recording.find(params[:id])
    @is_favorite = @recording.is_favorite?(current_user)
  end

  def create
    @recording = Recording.new(recording_params)
    @recording.uploader_id = current_user.id
    if @recording.save
      render :show
    else
      render json: @recording.errors.full_messages, status: 422
    end
  end

  def update
    @recording = Recording.find(params[:id])
    if @recording.uploader_id == current_user.id
      if @recording.update(recording_params)
        render :show
      else
        render json: @recording.errors.full_messages, status: 422
      end
    else
      render json: "You don't own the recording!", status: 422
    end
  end

  def destroy
    @recording = Recording.find(params[:id])
    if @recording.uploader_id == current_user.id
      @recording.destroy
      @recordings = current_user.recordings;
      render :index
    else
      render json: "You don't own the recording!", status: 422
    end
  end

  private

  def recording_params
    params.require(:recording).permit(:title, :uploader_id, :recording_url, :image_url, :description, :publicity, :category_name)
  end

end
