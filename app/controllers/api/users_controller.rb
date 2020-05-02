
class Api::UsersController < ApplicationController

  def index
    render json: User.order(event_date: :DESC)
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    render json: User.create(user_params)
  end

  def destroy
    render json: User.destroy(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:name, :age, :address)
  end

end
