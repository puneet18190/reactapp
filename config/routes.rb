Rails.application.routes.draw do

  # root 'home#index'
  root to: redirect('/users')
  get 'users', to: 'home#index'
  get 'users/new', to: 'home#index'
  get 'users/:id/edit', to: 'home#index'
  get 'users/:id', to: 'home#index'

  namespace :api do
    resources :users, only: %i[index show create update destroy]
  end

end
