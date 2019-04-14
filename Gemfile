source 'https://rubygems.org'
# source 'https://ruby.taobao.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('http://configs.xiexianbin.cn/gitpags/versions.json').read)

gem 'execjs'
gem 'jekyll', versions['jekyll']
gem 'ruby'

# ref https://github.com/jekyll/jekyll-archives
gem 'jekyll-archives'
gem 'jekyll-paginate', versions['jekyll-paginate']
gem 'jekyll-feed', versions['jekyll-feed']

gem 'github-pages', versions['github-pages']
gem 'listen', versions['listen']
gem 'rouge', versions['rouge']
gem 'kramdown', versions['kramdown']
