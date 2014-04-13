require 'redmine'
require_dependency 'redmine_watchers_textinput/hooks'

Redmine::Plugin.register :redmine_watchers_textinput do
  name 'Watchers Textinput plugin'
  author 'Amaury Balmer'
  description 'Redmine plugin to convert watchers checkboxes to more compact autocomplete text field'
  version '0.2'
  url 'https://github.com/herewithme/redmine_watchers_textinput/'
  author_url 'https://github.com/herewithme/'
end
