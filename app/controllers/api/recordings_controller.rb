class Api::RecordingsController < ApplicationController

  def index
    case params[:request]
    when "favorites"
      @recordings = current_user.favorites;
    when "uploaded"
      @recordings = current_user.recordings;
    end
    render json: @recordings
  end

  def show
    @recording = Recording.find(params[:id])
    render json: @recording
  end

  def create
    @recording = Recording.new(recording_params)
    @recording.uploader_id = current_user.id
    if @recording.save
      render :recording
    else
      render json: @recording.errors.full_messages, status: 422
    end
  end

  def update
    @recording = Recording.find(params[:id])
    if @recording.uploader_id == current_user.id
      if @recording.update(recording_params)
        render json: @recording
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
      render json: "deleted"
    else
      render json: "You don't own the recording!", status: 422
    end
  end

  private

  def recording_params
    params.require(:recording).permit(:title, :uploader_id, :recording_url, :image_url, :description, :publicity, :category_id)
  end

end
