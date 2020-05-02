# frozen_string_literal: true

class Api::UsersController < ApplicationController

  def index
    render json: User.order(event_date: :DESC)
  end

  def show
    render json: User.find(params[:id])
  end

end
