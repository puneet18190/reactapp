# frozen_string_literal: true

class Api::UsersController < ApplicationController

  def index
    render json: User.order(event_date: :DESC)
  end
end
