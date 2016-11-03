class Api::RecordingsController < ApplicationController

  def create
    @recording = Recording.new(recording_params)
    if @recording.save
      render json: @recording
    else
      render json: @recording.errors.full_messages, status: 422
    end
  end

  def update
    @recording = Recording.find(params[:id])
    if @recording.update(recording_params)
      render json: @recording
    else
      render json @recording.errors.full_messages, status: 422
    end
  end

  def delete
    @recording = Recording.find(params[:id])
    @recording.destroy
  end

  private

  def recording_params
    params.require(:recording).permit(:title, :uploader_id, :recording_url, :image_url, :description, :publicity, :category_id)
  end

end
