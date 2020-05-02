Rails.application.routes.draw do

  root 'home#index'
  get 'users', to: 'home#index'
  get 'users/new', to: 'home#index'
  get 'users/:id', to: 'home#index'

  namespace :api do
    resources :users, only: %i[index show create update]
  end

end
