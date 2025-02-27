# automation-practice
Use this project to test any theories related to test automation or GitHub. 
There will also be helpful links here in the readme, as well as explanations and documentation in each file, etc. 


The architecture of this project has been generated using RubyRaider 
Raider is a gem made by our one and only Augustin Gottlieb, and it's used for generating and scaffolding (accessible project generation and editing) test automation projects.
To find out more about RubyRaider, go to https://github.com/RaiderHQ/ruby_raider 
To run available raider commands, run 

raider help

This project will also make use of commonly used linters, such as reek and rubocop


Setup: 
You might encounter a chromedriver error when trying to run the tests for the first time. If that happens, follow this guide: 
1. Visit this page https://googlechromelabs.github.io/chrome-for-testing/
2. Download the chromedriver version 133.0.6943.141
3. Replace the existing chromedriver in your PATH with the new version using these commands: 

sudo mv /path/to/downloaded/chromedriver /usr/local/bin/chromedriver
sudo chmod +x /usr/local/bin/chromedriver

4. Verify the chromedriver version using this command: 

chromedriver --version