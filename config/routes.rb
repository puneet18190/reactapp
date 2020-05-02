Rails.application.routes.draw do
  # get 'home/index'
  root 'home#index'
  get 'users', to: 'home#index'
  get 'users/:id', to: 'home#index'
  namespace :api do
    resources :users, only: %i[index show]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
