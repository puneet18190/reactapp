Rails.application.routes.draw do
  # get 'home/index'
  root 'home#index'
  get 'users', to: 'home#index'
  namespace :api do
    resources :users, only: %i[index]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
