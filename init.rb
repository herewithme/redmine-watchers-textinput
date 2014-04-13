require 'redmine'
require_dependency 'watchers_textinput/hooks'

Redmine::Plugin.register :watchers_textinput do
  name 'Watchers Textinput plugin'
  author 'Amaury Balmer'
  description 'Redmine plugin to convert watchers checkboxes to more compact autocomplete text field'
  version '0.2'
  url 'https://github.com/herewithme/redmine-watchers-textinput/'
  author_url 'https://github.com/herewithme/'
end
