require 'bundler'

Bundler.require()

get '/json1' do
  {:name => 'Eric', :message => 'This is so cool!'}.to_json
end

get '/json2' do
  {:name => 'Eric', :stuff => 'trololol'}.to_json
end

get '/' do
  erb :index # erb says! hey! go find index.erb and share it
end

get '/about' do
  erb :about
end
